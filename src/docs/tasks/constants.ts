/** Порядок важен: уровни накопительные, middle видит всё, что видит junior */
export const TASK_LEVELS = ['junior', 'middle', 'senior'] as const;
export const TASK_STACKS = ['react', 'vue', 'angular', 'svelte'] as const;
export const TASK_APIS = ['rest', 'graphQL'] as const;

export type LevelName = (typeof TASK_LEVELS)[number];
export type StackName = (typeof TASK_STACKS)[number];
export type ApiType = (typeof TASK_APIS)[number];

export interface TaskSettings {
  api: ApiType;
  level: LevelName;
  stack: StackName;
}

export const DEFAULT_TASK_SETTINGS: TaskSettings = {
  level: 'junior',
  stack: 'react',
  api: 'rest'
};
