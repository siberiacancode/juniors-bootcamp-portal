import type { TaskContent } from '../../_types';

export const CINEMA: TaskContent = {
  emoji: '🍿',
  title: 'page.task.cinema.title',
  description: 'page.task.cinema.description',
  links: {
    backend: 'TODO',
    figma: 'TODO',
    requirements: 'TODO'
  },
  levels: [
    {
      name: 'junior',
      expectedResult: 'page.task.cinema.level.junior.expectedResult',
      flow: ['page.task.cinema.level.junior.flow.1', 'page.task.cinema.level.junior.flow.2'],
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
      expectedResult: 'page.task.cinema.level.middle.expectedResult',
      flow: ['page.task.cinema.level.middle.flow.1', 'page.task.cinema.level.middle.flow.2'],
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
      expectedResult: 'page.task.cinema.level.senior.expectedResult',
      flow: ['page.task.cinema.level.senior.flow.1', 'page.task.cinema.level.senior.flow.2'],
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
