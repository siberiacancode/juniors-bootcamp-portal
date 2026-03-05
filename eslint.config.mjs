import { eslint } from '@siberiacancode/eslint';

/** @type {import('eslint').Linter.Config} */
export default eslint(
  {
    typescript: true,
    react: true,
    nextjs: true,
    // jsxA11y: true,
    tailwind: true
  },
  {
    name: 'junior-bootcamp/rewrite',
    rules: {
      'node/prefer-global/process': 'off',
      'react/no-context-provider': 'off',
      'siberiacancode-tailwind/enforce-consistent-line-wrapping': [
        'warn',
        {
          group: 'never',
          preferSingleLine: true,
          printWidth: 0,
          strictness: 'loose'
        }
      ]
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
    settings: {
      'better-tailwindcss': {
        entryPoint: 'app/globals.css'
      }
    }
  }
);
