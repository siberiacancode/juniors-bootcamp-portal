'use client';

import type { ComponentProps } from 'react';

import { FormattedMessage } from 'react-intl';

type IntlTextValues = ComponentProps<typeof FormattedMessage>['values'];

interface IntlTextProps {
  html?: boolean;
  id?: string;
  path: MessagePath;
  values?: IntlTextValues;
}

const VALUES: IntlTextValues = {
  span: (chunks) => <span>{chunks}</span>,
  br: () => <br />,
  backendLink: (chunks) => (
    <a
      href='https://github.com/siberiacancode/juniors-bootcamp-backend/issues'
      rel='noopener noreferrer'
      target='_blank'
    >
      {chunks}
    </a>
  )
};

export const IntlText = ({ html, id, path, values }: IntlTextProps) => {
  const mergedValues = { ...VALUES, ...values };

  if (html)
    return (
      <FormattedMessage id={path} values={mergedValues}>
        {(txt: string | TrustedHTML) => <span dangerouslySetInnerHTML={{ __html: txt }} id={id} />}
      </FormattedMessage>
    );

  return <FormattedMessage id={path} values={mergedValues} />;
};
