import type { Root } from 'mdast';
import type { Plugin } from 'unified';

import { visit } from 'unist-util-visit';

export const remarkCodeGroup: Plugin<void[], Root> = () => (tree) => {
  visit(tree, 'containerDirective', (node) => {
    if (node.name === 'code-group') {
      node.data = {
        hName: 'CodeGroup',
        hProperties: {}
      };
    }
  });
};
