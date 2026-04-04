'use server';

import { compile } from '@mdx-js/mdx';

import { intl } from '@/intl/server';

import type { LevelData, LevelName, TaskContent } from '../_types';

export type SerializedLevelData = Omit<LevelData, 'expectedResult' | 'flow'> & {
  expectedResult: string;
  flow: string;
};

export type SerializedTaskContent = Omit<TaskContent, 'levels'> & {
  levels: Record<LevelName, SerializedLevelData>;
};

export async function serializeTask(task: TaskContent): Promise<SerializedTaskContent> {
  const levels = await Promise.all(
    Object.entries(task.levels).map(async ([levelName, data]) => {
      const [expectedResult, flow] = await Promise.all([
        compile(intl.formatMessage({ id: data.expectedResult }), { outputFormat: 'function-body' }),
        compile(intl.formatMessage({ id: data.flow }), { outputFormat: 'function-body' })
      ]);
      return [
        levelName,
        { ...data, expectedResult: String(expectedResult), flow: String(flow) }
      ] as const;
    })
  );
  return {
    ...task,
    levels: Object.fromEntries(levels) as SerializedTaskContent['levels']
  };
}
