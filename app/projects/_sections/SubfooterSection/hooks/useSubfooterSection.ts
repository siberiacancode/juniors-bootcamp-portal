'use client';

import { yandexMetrika } from '@/lib/yandex-metrika';

export const useSubfooterSection = () => {
  const onContributeClick = () =>
    yandexMetrika({
      eventName: 'reachGoal',
      target: 'project_contribute_click',
      params: { placement: 'subfooter' }
    });

  return { functions: { onContributeClick } };
};
