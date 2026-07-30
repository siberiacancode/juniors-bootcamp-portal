import { apicraft } from '@siberiacancode/apicraft';

export default apicraft([
  {
    input: 'http://127.0.0.1:3010/api/rest.json',
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
  }
]);
