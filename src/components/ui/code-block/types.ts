import type { JSX } from 'react';

import type { SupportedLanguage } from '@/lib/shiki';

export interface ParsedBlock {
  code: string;
  children: JSX.Element;
  fileName?: string;
  key: string;
  language: SupportedLanguage;
}
