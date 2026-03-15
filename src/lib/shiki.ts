import type { CodeOptionsMultipleThemes } from 'shiki';

export const SUPPORTED_LANGUAGES = [
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
] as const;

export const OPTIONS_MULTIPLE_THEMES: CodeOptionsMultipleThemes = {
  themes: {
    light: 'github-light',
    dark: 'github-dark'
  },
  defaultColor: false
};

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];
