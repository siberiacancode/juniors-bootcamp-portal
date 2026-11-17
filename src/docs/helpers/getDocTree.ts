import type { Folder, Item, Node, Root } from 'fumadocs-core/page-tree';

import { findNeighbour } from 'fumadocs-core/page-tree';

import type { DocsPage, DocsSource } from '../sources';

/** узел дерева, к страницам которого можно прицепить свои данные (например, locked) */
export type DocTreeNode<Extra = object> =
  | (Exclude<Node, Folder | Item> & { children?: never })
  | (Item & Extra)
  | (Omit<Folder, 'children'> & { children: DocTreeNode<Extra>[] });

export interface DocTree<Extra = object> {
  children: DocTreeNode<Extra>[];
  name: Root['name'];
}

const isInside = (url: string, prefix: string) => url === prefix || url.startsWith(`${prefix}/`);

const hasPageInside = (node: Node, prefix: string): boolean => {
  if (node.type === 'page') return isInside(node.url, prefix);
  if (node.type === 'folder')
    return (
      (!!node.index && isInside(node.index.url, prefix)) ||
      node.children.some((child) => hasPageInside(child, prefix))
    );
  return false;
};

/**
 * Дерево раздела для сайдбара. `prefix` — url папки, например `/tasks/pizza`:
 * вернутся только её дети. Без prefix — всё дерево источника.
 */
export const getDocTree = (source: DocsSource, prefix?: string): Root => {
  const root = source.getPageTree();
  if (!prefix) return root;

  const folder = root.children.find(
    (node): node is Folder => node.type === 'folder' && hasPageInside(node, prefix)
  );

  return folder ? { name: folder.name, children: folder.children } : { name: '', children: [] };
};

/**
 * Обойти дерево и дописать к каждой странице свои данные (`map` получает страницу
 * с frontmatter). Удобно для блокировки, бейджей и т.п.
 */
export const mapDocTree = <Extra extends object>(
  source: DocsSource,
  tree: Root,
  map: (page: DocsPage, item: Item) => Extra | null
): DocTree<Extra> => {
  const walk = (nodes: Node[]): DocTreeNode<Extra>[] =>
    nodes.flatMap((node): DocTreeNode<Extra>[] => {
      if (node.type === 'page') {
        const page = source.getNodePage(node);
        const extra = page ? map(page, node) : ({} as Extra);
        return extra === null ? [] : [{ ...node, ...extra }];
      }
      if (node.type === 'folder') {
        const children = walk(node.children);
        return children.length ? [{ ...node, children }] : [];
      }
      return [node];
    });

  return { name: tree.name, children: walk(tree.children) };
};

/** предыдущая и следующая страница внутри дерева */
export const getDocNeighbours = (tree: Root, url: string) => findNeighbour(tree, url);
