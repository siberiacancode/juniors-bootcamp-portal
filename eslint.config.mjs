import { eslint } from '@siberiacancode/eslint';
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss';

/** @type {import('eslint').Linter.Config} */
export default eslint(
  {
    typescript: true,
    react: true,
    nextjs: true,
    jsxA11y: true
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
  },
  {
    name: 'junior-bootcamp/shadcn',
    files: ['src/components/ui/**/*.tsx'],
    rules: {
      'react-refresh/only-export-components': 'off'
    }
  },
  {
    name: 'junior-bootcamp/tailwindcss',
    extends: [eslintPluginBetterTailwindcss.configs.recommended],
    rules: {
      'better-tailwindcss/enforce-consistent-line-wrapping': 'off',
      'better-tailwindcss/enforce-consistent-class-order': 'off'
    },
    settings: {
      'better-tailwindcss': {
        entryPoint: 'app/globals.css'
      }
    }
  }
);
