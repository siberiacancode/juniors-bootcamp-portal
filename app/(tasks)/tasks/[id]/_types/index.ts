import type { GraphQLOperation, RestOperation } from '@/types/operation';
import type { LevelName } from '@/types/task-settings';

export type { ApiType, LevelName, TaskSettingsCookieValue } from '@/types/task-settings';

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
