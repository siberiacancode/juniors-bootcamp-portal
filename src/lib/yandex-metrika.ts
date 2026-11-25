import { createYandexMetrika } from '@siberiacancode/yandex-metrika';

import type { ProjectFramework, ProjectTask } from '@/types';

const YANDEX_METRIKA_COUNTER_ID = 108002818;

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

interface ProjectLinkClickEvent {
  eventName: 'reachGoal';
  params: {
    task: ProjectTask;
    username: string;
  };
  target: 'project_code_click';
}

interface ProjectContributeClickEvent {
  eventName: 'reachGoal';
  params: {
    placement: 'gallery' | 'subfooter';
  };
  target: 'project_contribute_click';
}

interface ProjectTaskFilterClickEvent {
  eventName: 'reachGoal';
  params: {
    task: ProjectTask;
  };
  target: 'project_task_filter_click';
}

interface ProjectFrameworkFilterClickEvent {
  eventName: 'reachGoal';
  params: {
    framework: ProjectFramework;
  };
  target: 'project_framework_filter_click';
}

export const yandexMetrika = createYandexMetrika<
  | GuideBadgeClickEvent
  | GuideSearchInputEvent
  | ProjectContributeClickEvent
  | ProjectFrameworkFilterClickEvent
  | ProjectLinkClickEvent
  | ProjectTaskFilterClickEvent
>(YANDEX_METRIKA_COUNTER_ID);
