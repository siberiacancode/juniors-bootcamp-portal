import type { ApiType, LevelName, TaskSettings } from '@/docs/tasks/constants';
import type { GraphQLOperation, RestOperation } from '@/types';

export type { ApiType, LevelName };

export interface RestApiField {
  field: string;
  operation: RestOperation;
}

export interface GraphQLApiField {
  field: string;
  operation: GraphQLOperation;
}

export interface LevelData {
  api: {
    graphQL: GraphQLApiField[];
    rest: RestApiField[];
  };
  expectedResult: MessagePath;
  flow: MessagePath;
}

export interface TaskContent {
  description: MessagePath;
  emoji: string;
  levels: Record<LevelName, LevelData>;
  links: {
    design: string;
    backend: string;
  };
  title: MessagePath;
}

export type TaskSettingsCookieValue = TaskSettings;
