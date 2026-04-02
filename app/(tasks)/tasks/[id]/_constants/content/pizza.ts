import type { TaskContent } from '../../_types';

export const PIZZA: TaskContent = {
  emoji: '🍕',
  title: 'page.task.pizza.title',
  description: 'page.task.pizza.description',
  links: {
    backend: 'TODO',
    figma: 'TODO',
    requirements: 'TODO'
  },
  levels: [
    {
      name: 'junior',
      expectedResult: 'page.task.pizza.level.junior.expectedResult',
      flow: ['page.task.pizza.level.junior.flow.1', 'page.task.pizza.level.junior.flow.2'],
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
      expectedResult: 'page.task.pizza.level.middle.expectedResult',
      flow: ['page.task.pizza.level.middle.flow.1', 'page.task.pizza.level.middle.flow.2'],
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
      expectedResult: 'page.task.pizza.level.senior.expectedResult',
      flow: ['page.task.pizza.level.senior.flow.1', 'page.task.pizza.level.senior.flow.2'],
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
