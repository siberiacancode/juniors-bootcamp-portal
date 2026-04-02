import type { GraphQLOperation, RestOperation } from '@/types/operation';

export interface RestApiField {
  field: string;
  operation: RestOperation;
}

export interface GraphQLApiField {
  field: string;
  operation: GraphQLOperation;
}

export type LevelName = 'junior' | 'middle' | 'senior';

export interface LevelData {
  expectedResult: MessagePath;
  flow: MessagePath[];
  graphQL: GraphQLApiField[];
  rest: RestApiField[];
}

type LevelDataWithName<Name extends LevelName> = LevelData & { name: Name };

export interface TaskContent {
  description: MessagePath;
  emoji: string;
  levels: [LevelDataWithName<'junior'>, LevelDataWithName<'middle'>, LevelDataWithName<'senior'>];
  links: {
    figma: string;
    requirements: string;
    backend: string;
  };
  title: MessagePath;
}
