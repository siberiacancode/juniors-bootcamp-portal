export type RestOperation = 'delete' | 'get' | 'patch' | 'post' | 'put';

export type GraphQLOperation = 'mutation' | 'query' | 'subscription';

export type ApiOperation = GraphQLOperation | RestOperation;
