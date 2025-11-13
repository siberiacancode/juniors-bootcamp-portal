'use client';

import type { ComponentProps } from 'react';

import { IntlProvider as ReactIntlProvider } from 'react-intl';

export type IntlProviderProps = ComponentProps<typeof ReactIntlProvider>;

export const IntlProvider = (props: IntlProviderProps) => <ReactIntlProvider {...props} />;
