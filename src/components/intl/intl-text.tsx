'use client';

import type { ComponentProps } from 'react';

import { FormattedMessage } from 'react-intl';

interface IntlTextProps {
  html?: boolean;
  id?: string;
  path: MessagePath;
  values?: ComponentProps<typeof FormattedMessage>['values'];
}

export const IntlText = ({ html, id, path, values }: IntlTextProps) =>
  html ? (
    <FormattedMessage id={path} values={values}>
      {(txt: string | TrustedHTML) => <span dangerouslySetInnerHTML={{ __html: txt }} id={id} />}
    </FormattedMessage>
  ) : (
    <FormattedMessage id={path} values={values} />
  );
