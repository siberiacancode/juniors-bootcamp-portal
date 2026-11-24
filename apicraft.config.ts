import { apicraft } from '@siberiacancode/apicraft';

export default apicraft([
  {
    input: 'https://juniorsbootcamp.ru/api/rest.json',
    output: 'generated/api/juniorsbootcamp',
    baseUrl: '/api',
    instance: {
      name: 'fetches',
      runtimeInstancePath: './src/utils/api/instance'
    },
    plugins: ['tanstack'],
    nameBy: 'path',
    groupBy: 'standalone',
    parser: {
      filters: {
        tags: {
          include: ['💸 transactions']
        }
      }
    }
  },
  {
    input:
      'https://raw.githubusercontent.com/github/rest-api-description/main/descriptions/api.github.com/api.github.com.json',
    output: 'generated/api/github',
    instance: {
      name: 'fetches',
      runtimeInstancePath: './src/utils/api/github'
    },
    nameBy: 'operationId',
    groupBy: 'standalone',
    parser: {
      filters: {
        operations: {
          include: ['GET /repos/{owner}/{repo}/zipball/{ref}']
        },
        orphans: false
      }
    }
  }
]);
