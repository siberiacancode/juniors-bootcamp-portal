import type { LevelName, TaskSettings } from './constants';

import { TASK_LEVELS } from './constants';

export const isLevelReached = (current: LevelName, required: LevelName) =>
  TASK_LEVELS.indexOf(current) >= TASK_LEVELS.indexOf(required);

/**
 * То, что видно в MDX как `props`:
 *
 * - `props.level`, `props.stack`, `props.api` — выбранные значения
 * - `props.atLeast.middle` — уровень middle или выше (уровни накопительные)
 *
 * ```mdx
 * <show when={props.atLeast.middle}>...</show>
 * <show when={props.level === 'junior'}>...</show>
 * <show when={props.stack === 'react'}>...</show>
 * ```
 */
export const getTaskDocProps = (settings: TaskSettings) => ({
  ...settings,
  atLeast: Object.fromEntries(
    TASK_LEVELS.map((level) => [level, isLevelReached(settings.level, level)])
  ) as Record<LevelName, boolean>
});

export type TaskDocProps = ReturnType<typeof getTaskDocProps>;
