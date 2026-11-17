import type { DocsPage, DocsSource } from '../sources';

export type DocProps = Record<string, unknown>;

export interface DocPage {
  /** MDX-компонент страницы, рендерить через `<DocBody doc={doc} />` */
  Body: DocsPage['data']['body'];
  data: DocsPage['data'];
  page: DocsPage;
  /** props, доступные в MDX как `props.*` (`<show when={props.stack === 'react'}>`) */
  props: DocProps;
  /** оглавление, уже посчитанное с учётом `<show>` и props */
  toc: DocsPage['data']['toc'];
}

/**
 * Страница документации по slug. Если передать props, контент и оглавление
 * будут отрендерены для них: блоки `<show when={...}>` проверяются по `props`.
 */
export const getDocPage = (
  source: DocsSource,
  slug: string[],
  props: DocProps = {}
): DocPage | undefined => {
  const page = source.getPage(slug, Object.keys(props).length ? { props } : undefined);
  if (!page) return;

  return {
    page,
    data: page.data,
    Body: page.data.body,
    toc: page.data.toc,
    props
  };
};
