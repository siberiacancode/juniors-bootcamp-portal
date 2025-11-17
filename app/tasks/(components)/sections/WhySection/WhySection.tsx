'use client';

import { useIntl } from 'react-intl';

import { TextSections } from '@/app/(components)/sections';

export const WhySection = () => {
  const intl = useIntl();

  return (
    <TextSections
      title={intl.formatMessage({ id: 'page.tasks.why.title' })}
      description={intl.formatMessage({ id: 'page.tasks.why.description' })}
    />
  );
};
