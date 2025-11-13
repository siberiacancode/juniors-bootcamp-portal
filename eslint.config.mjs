import { eslint } from '@siberiacancode/eslint';

/** @type {import('eslint').Linter.Config} */
export default eslint(
  {
    typescript: true,
    react: true,
    jsx: true,
    'jsx-a11y': true
  },
  {
    name: 'junior-bootcamp/rewrite',
    rules: {
      'node/prefer-global/process': 'off',
      'react/no-context-provider': 'off'
    }
  },
  {
    name: 'junior-bootcamp/bugs',
    rules: {
      'react/no-comment-textnodes': 'off',
      'react-hooks-extra/no-unnecessary-use-prefix': 'off',
      'react-hooks-extra/prefer-use-state-lazy-initialization': 'off'
    }
  }
);
