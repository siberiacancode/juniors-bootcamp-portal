'use client';

import type { ComponentProps } from 'react';

import { FormattedMessage } from 'react-intl';

type Values = ComponentProps<typeof FormattedMessage>['values'];

interface IntlTextProps {
  html?: boolean;
  id?: string;
  path: MessagePath;
  values?: Values;
}

const VALUES: Values = {
  span: (text) => <span>{text}</span>,
  br: () => <br />
};

export const IntlText = ({ html, id, path, values }: IntlTextProps) => {
  const mergedValues = { ...VALUES, ...values };
  return html ? (
    <FormattedMessage id={path} values={mergedValues}>
      {(txt: string | TrustedHTML) => <span dangerouslySetInnerHTML={{ __html: txt }} id={id} />}
    </FormattedMessage>
  ) : (
    <FormattedMessage id={path} values={mergedValues} />
  );
};
