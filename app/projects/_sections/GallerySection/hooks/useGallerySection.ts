'use client';

import { parseAsStringLiteral, useQueryStates } from 'nuqs';
import { useIntl } from 'react-intl';

import type { Project, ProjectFramework, ProjectTask } from '@/types';

import { yandexMetrika } from '@/lib/yandex-metrika';

const PROJECT_TASKS = ['delivery', 'cars', 'cinema', 'pizza', 'games'] as const;
const PROJECT_FRAMEWORKS = ['react', 'next', 'vue', 'nuxt', 'angular'] as const;

const FRAMEWORK_LABELS = {
  angular: 'select.framework.angular',
  next: 'select.framework.next',
  nuxt: 'select.framework.nuxt',
  react: 'select.framework.react',
  vue: 'select.framework.vue'
} satisfies Record<ProjectFramework, MessagePath>;

export const TASK_LABELS = {
  cars: 'select.task.cars',
  cinema: 'select.task.cinema',
  delivery: 'select.task.delivery',
  games: 'select.task.games',
  pizza: 'select.task.pizza'
} satisfies Record<ProjectTask, MessagePath>;

const projectQueryParams = {
  task: parseAsStringLiteral(PROJECT_TASKS),
  framework: parseAsStringLiteral(PROJECT_FRAMEWORKS)
};

export const useGallerySection = (projects: Project[]) => {
  const intl = useIntl();
  const [queryParams, setQueryParams] = useQueryStates(projectQueryParams);
  const selectedTask = queryParams.task ?? 'all';
  const selectedFramework = queryParams.framework ?? 'all';
  const taskOptions = [
    { value: 'all', label: intl.formatMessage({ id: 'select.task.all' }) },
    ...PROJECT_TASKS.map((task) => ({
      value: task,
      label: intl.formatMessage({ id: TASK_LABELS[task] })
    }))
  ];
  const frameworkOptions = [
    { value: 'all', label: intl.formatMessage({ id: 'select.framework.all' }) },
    ...PROJECT_FRAMEWORKS.map((framework) => ({
      value: framework,
      label: intl.formatMessage({ id: FRAMEWORK_LABELS[framework] })
    }))
  ];

  const filteredProjects = projects.filter(
    (project) =>
      (!queryParams.task || project.task === queryParams.task) &&
      (!queryParams.framework || project.framework === queryParams.framework)
  );

  const onTaskChange = (value: string | null) => {
    if (value === null) return;

    const task = value === 'all' ? null : (value as ProjectTask);
    setQueryParams({ task });

    if (!task) return;

    yandexMetrika({
      eventName: 'reachGoal',
      target: 'project_task_filter_click',
      params: { task }
    });
  };

  const onFrameworkChange = (value: string | null) => {
    if (value === null) return;

    const framework = value === 'all' ? null : (value as ProjectFramework);
    setQueryParams({ framework });
    if (!framework) return;

    yandexMetrika({
      eventName: 'reachGoal',
      target: 'project_framework_filter_click',
      params: { framework }
    });
  };

  const onResetFilters = () => setQueryParams({ task: null, framework: null });

  const onProjectClick = (project: Project) =>
    yandexMetrika({
      eventName: 'reachGoal',
      target: 'project_code_click',
      params: { task: project.task, username: project.username }
    });

  const onContributeClick = () =>
    yandexMetrika({
      eventName: 'reachGoal',
      target: 'project_contribute_click',
      params: { placement: 'gallery' }
    });

  return {
    state: { selectedTask, selectedFramework, filteredProjects, taskOptions, frameworkOptions },
    functions: {
      onContributeClick,
      onFrameworkChange,
      onProjectClick,
      onResetFilters,
      onTaskChange
    }
  };
};
