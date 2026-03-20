import type { RehypeShikiOptions } from '@shikijs/rehype';
import type { BuiltinLanguage, ShikiTransformer } from 'shiki';

export type SupportedLanguage = Extract<
  BuiltinLanguage,
  | 'bash'
  | 'css'
  | 'html'
  | 'javascript'
  | 'js'
  | 'json'
  | 'jsx'
  | 'scss'
  | 'shell'
  | 'ts'
  | 'tsx'
  | 'typescript'
>;

const attrsRegex = /([a-z_][\w-]*)(=(["'])(.*?)\3)?/gi;
const attrsMatchRegex = /\{([^}]*)\}/;
const transformerProps: ShikiTransformer = {
  pre(node) {
    const rawMeta = this.options.meta?.__raw ?? '';

    const attrsMatch = rawMeta.match(attrsMatchRegex);
    if (!attrsMatch) {
      node.properties ??= {};
      node.properties.language = this.options.lang;
      return node;
    }

    const [attrs] = attrsMatch;
    node.properties ??= {};

    for (const match of attrs.matchAll(attrsRegex)) {
      const key = match[1];
      const value = match[4];
      if (!key) continue;

      node.properties[key] = value ?? true;
    }

    node.properties.language = this.options.lang;

    return node;
  }
};

export const REHYPE_SHIKI_OPTIONS: RehypeShikiOptions = {
  langs: [
    'javascript',
    'js',
    'typescript',
    'ts',
    'tsx',
    'jsx',
    'html',
    'css',
    'scss',
    'json',
    'bash',
    'shell'
  ],
  themes: {
    light: 'github-light',
    dark: 'github-dark'
  },
  colorReplacements: {
    'github-light': {
      '#fff': 'var(--color-secondary)'
    },
    'github-dark': {
      '#24292e': 'var(--color-secondary)'
    }
  },
  defaultColor: false,
  transformers: [
    transformerProps
    // https://shiki.style/packages/transformers#transformers
    // Transformers only applies classes and does not come with styles; you can provide your own CSS rules to style them properly.
    // transformerNotationDiff(),
    // transformerNotationHighlight(),
    // transformerNotationWordHighlight()
  ]
};
