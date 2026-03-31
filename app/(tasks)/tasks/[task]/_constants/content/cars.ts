import type { TaskContent } from '../../_types';

export const CARS: TaskContent = {
  emoji: '🏍️',
  title: 'page.task.cars.title',
  description: 'page.task.cars.description',
  links: {
    backend: 'TODO',
    figma: 'TODO',
    requirements: 'TODO'
  },
  levels: [
    {
      name: 'junior',
      expectedResult: 'page.task.cars.level.junior.expectedResult',
      flow: ['page.task.cars.level.junior.flow.1', 'page.task.cars.level.junior.flow.2'],
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
      name: 'middle',
      expectedResult: 'page.task.cars.level.middle.expectedResult',
      flow: ['page.task.cars.level.middle.flow.1', 'page.task.cars.level.middle.flow.2'],
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
      expectedResult: 'page.task.cars.level.senior.expectedResult',
      flow: ['page.task.cars.level.senior.flow.1', 'page.task.cars.level.senior.flow.2'],
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
