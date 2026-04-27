import { LINKS } from '@/constants';

import type { TaskContent } from '../../_types';

export const CARS: TaskContent = {
  emoji: '🏍️',
  title: 'page.task.cars.title',
  description: 'page.task.cars.description',
  links: {
    backend: LINKS.TASKS.CARS.BACKEND,
    design: LINKS.TASKS.CARS.DESIGN
  },
  levels: {
    junior: {
      expectedResult: 'page.task.cars.level.junior.expectedResult',
      flow: 'page.task.cars.level.junior.flow',
      api: {
        rest: [
          {
            operation: 'get',
            field: '/cars/catalog'
          },
          {
            operation: 'get',
            field: '/cars/:carId'
          }
        ],
        graphQL: [
          {
            operation: 'query',
            field: 'getCarsCatalog'
          },
          {
            operation: 'query',
            field: 'getCar'
          }
        ]
      }
    },
    middle: {
      expectedResult: 'page.task.cars.level.middle.expectedResult',
      flow: 'page.task.cars.level.middle.flow',
      api: {
        rest: [
          {
            operation: 'get',
            field: '/cars/catalog'
          },
          {
            operation: 'get',
            field: '/cars/:carId'
          },
          {
            operation: 'post',
            field: '/cars/order'
          }
        ],
        graphQL: [
          {
            operation: 'query',
            field: 'getCarsCatalog'
          },
          {
            operation: 'query',
            field: 'getCar'
          },
          {
            operation: 'mutation',
            field: 'createCarOrder'
          }
        ]
      }
    },
    senior: {
      expectedResult: 'page.task.cars.level.senior.expectedResult',
      flow: 'page.task.cars.level.senior.flow',
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
            field: '/cars/catalog'
          },
          {
            operation: 'get',
            field: '/cars/:carId'
          },
          {
            operation: 'post',
            field: '/cars/order'
          },
          {
            operation: 'get',
            field: '/cars/orders'
          },
          {
            operation: 'put',
            field: '/cars/orders/cancel'
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
            field: 'getCarsCatalog'
          },
          {
            operation: 'query',
            field: 'getCar'
          },
          {
            operation: 'mutation',
            field: 'createCarOrder'
          },
          {
            operation: 'query',
            field: 'getCarsOrders'
          },
          {
            operation: 'mutation',
            field: 'cancelCarOrder'
          }
        ]
      }
    }
  }
};
