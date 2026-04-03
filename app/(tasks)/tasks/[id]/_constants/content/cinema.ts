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
  levels: {
    junior: {
      expectedResult: 'page.task.cinema.level.junior.expectedResult',
      flow: 'page.task.cinema.level.junior.flow',
      api: {
        rest: [
          {
            operation: 'get',
            field: '/cinema/films'
          },
          {
            operation: 'get',
            field: '/cinema/film/:filmId'
          }
        ],
        graphQL: [
          {
            operation: 'query',
            field: 'getCinemaToday'
          },
          {
            operation: 'query',
            field: 'getFilm'
          }
        ]
      }
    },
    middle: {
      expectedResult: 'page.task.cinema.level.middle.expectedResult',
      flow: 'page.task.cinema.level.middle.flow',
      api: {
        rest: [
          {
            operation: 'get',
            field: '/cinema/films'
          },
          {
            operation: 'get',
            field: '/cinema/film/:filmId'
          },
          {
            operation: 'get',
            field: '/cinema/film/:filmId/schedule'
          },
          {
            operation: 'post',
            field: '/cinema/payment'
          }
        ],
        graphQL: [
          {
            operation: 'query',
            field: 'getCinemaToday'
          },
          {
            operation: 'query',
            field: 'getFilm'
          },
          {
            operation: 'query',
            field: 'getFilmSchedule'
          },
          {
            operation: 'mutation',
            field: 'createCinemaPayment'
          }
        ]
      }
    },
    senior: {
      expectedResult: 'page.task.cinema.level.senior.expectedResult',
      flow: 'page.task.cinema.level.senior.flow',
      api: {
        rest: [
          {
            operation: 'post',
            field: '/auth/otp'
          },
          {
            operation: 'post',
            field: '/users/signin'
          },
          {
            operation: 'post',
            field: '/users/session'
          },
          {
            operation: 'patch',
            field: '/users/profile'
          },
          {
            operation: 'get',
            field: '/cinema/films'
          },
          {
            operation: 'get',
            field: '/cinema/film/:filmId'
          },
          {
            operation: 'get',
            field: '/cinema/film/:filmId/schedule'
          },
          {
            operation: 'post',
            field: '/cinema/payment'
          },
          {
            operation: 'get',
            field: '/cinema/orders'
          },
          {
            operation: 'put',
            field: '/cinema/orders/cancel'
          }
        ],
        graphQL: [
          {
            operation: 'mutation',
            field: 'createOtp'
          },
          {
            operation: 'mutation',
            field: 'signin'
          },
          {
            operation: 'mutation',
            field: 'updateProfile'
          },
          {
            operation: 'query',
            field: 'session'
          },
          {
            operation: 'query',
            field: 'getCinemaToday'
          },
          {
            operation: 'query',
            field: 'getFilm'
          },
          {
            operation: 'query',
            field: 'getFilmSchedule'
          },
          {
            operation: 'mutation',
            field: 'createCinemaPayment'
          },
          {
            operation: 'query',
            field: 'getCinemaOrders'
          },
          {
            operation: 'mutation',
            field: 'cancelCinemaOrder'
          }
        ]
      }
    }
  }
};
