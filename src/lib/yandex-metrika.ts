import { createYandexMetrika } from '@siberiacancode/yandex-metrika';

interface GuideBadgeClickEvent {
  eventName: 'reachGoal';
  params: {
    tag: string;
  };
  target: 'guide_badge_click';
}

interface GuideSearchInputEvent {
  eventName: 'reachGoal';
  params: {
    search: string;
  };
  target: 'guide_search_input';
}

export const yandexMetrika = createYandexMetrika<GuideBadgeClickEvent | GuideSearchInputEvent>(
  108002818
);
