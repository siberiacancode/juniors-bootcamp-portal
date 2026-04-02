import type { TaskContent } from '../../_types';

export const DELIVERY: TaskContent = {
  emoji: '📦',
  title: 'page.task.delivery.title',
  description: 'page.task.delivery.description',
  links: {
    backend: 'TODO',
    figma: 'TODO',
    requirements: 'TODO'
  },
  levels: [
    {
      name: 'junior',
      expectedResult: 'page.task.delivery.level.junior.expectedResult',
      flow: ['page.task.delivery.level.junior.flow.1', 'page.task.delivery.level.junior.flow.2'],
      rest: [
        {
          operation: 'get',
          field: '/example'
        },
        {
          operation: 'post',
          field: '/example'
        },
        {
          operation: 'patch',
          field: '/example'
        },
        {
          operation: 'put',
          field: '/example'
        },
        {
          operation: 'delete',
          field: '/example'
        }
      ],
      graphQL: [
        {
          operation: 'query',
          field: 'example()'
        },
        {
          operation: 'mutation',
          field: 'example()'
        },
        {
          operation: 'subscription',
          field: 'example()'
        }
      ]
    },
    {
      name: 'middle',
      expectedResult: 'page.task.delivery.level.middle.expectedResult',
      flow: ['page.task.delivery.level.middle.flow.1', 'page.task.delivery.level.middle.flow.2'],
      rest: [
        {
          operation: 'get',
          field: 'TODO'
        }
      ],
      graphQL: [
        {
          operation: 'query',
          field: 'TODO'
        }
      ]
    },
    {
      name: 'senior',
      expectedResult: 'page.task.delivery.level.senior.expectedResult',
      flow: ['page.task.delivery.level.senior.flow.1', 'page.task.delivery.level.senior.flow.2'],
      rest: [
        {
          operation: 'get',
          field: 'TODO'
        }
      ],
      graphQL: [
        {
          operation: 'query',
          field: 'TODO'
        }
      ]
    }
  ]
};
