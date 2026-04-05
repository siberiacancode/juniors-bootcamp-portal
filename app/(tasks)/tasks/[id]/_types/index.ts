import type { GraphQLOperation, RestOperation } from '@/types/operation';

export interface RestApiField {
  field: string;
  operation: RestOperation;
}

export interface GraphQLApiField {
  field: string;
  operation: GraphQLOperation;
}

export type ApiType = 'graphQL' | 'rest';

export type LevelName = 'junior' | 'middle' | 'senior';

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
    figma: string;
    requirements: string;
    backend: string;
  };
  title: MessagePath;
}

export interface TaskSettingsCookieValue {
  api: ApiType;
  level: LevelName;
}
