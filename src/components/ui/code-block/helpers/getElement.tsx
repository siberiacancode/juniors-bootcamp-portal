'use server';

import { toJsxRuntime } from 'hast-util-to-jsx-runtime';
import { Fragment } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { codeToHast } from 'shiki';

import type { SupportedLanguage } from '@/lib/shiki';

import { OPTIONS_MULTIPLE_THEMES } from '@/lib/shiki';
import { cn } from '@/lib/utils';

export const getElement = async (code: string, language: SupportedLanguage) => {
  const out = await codeToHast(code, {
    lang: language,
    ...OPTIONS_MULTIPLE_THEMES
  });

  return toJsxRuntime(out, {
    Fragment,
    jsx,
    jsxs,
    components: {
      pre: ({ className, ...props }) => (
        <pre
          className={cn(
            'overflow-x-auto rounded-b-xl p-6 text-base [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
            className
          )}
          {...props}
        />
      )
    }
  });
};
