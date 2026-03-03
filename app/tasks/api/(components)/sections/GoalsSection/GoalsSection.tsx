'use client';

import { useIntl } from 'react-intl';

import { TextSections } from '@/app/(components)/sections';

export const GoalsSection = () => {
  const intl = useIntl();

  return (
    <TextSections
      description={intl.formatMessage({ id: 'page.tasksApi.goals.description' })}
      title={intl.formatMessage({ id: 'page.tasksApi.goals.title' })}
    />
  );
};
