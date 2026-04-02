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
      flow: 'page.task.pizza.level.junior.flow',
      rest: [
        {
          operation: 'get',
          field: '/pizza/catalog'
        }
      ],
      graphQL: [
        {
          operation: 'query',
          field: 'getPizzasCatalog'
        }
      ]
    },
    {
      name: 'middle',
      expectedResult: 'page.task.pizza.level.middle.expectedResult',
      flow: 'page.task.pizza.level.middle.flow',
      rest: [
        {
          operation: 'get',
          field: '/pizza/catalog'
        },
        {
          operation: 'post',
          field: '/pizza/payment'
        }
      ],
      graphQL: [
        {
          operation: 'query',
          field: 'getPizzasCatalog'
        },
        {
          operation: 'mutation',
          field: 'createPizzaPayment'
        }
      ]
    },
    {
      name: 'senior',
      expectedResult: 'page.task.pizza.level.senior.expectedResult',
      flow: 'page.task.pizza.level.senior.flow',
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
          field: '/pizza/catalog'
        },
        {
          operation: 'post',
          field: '/pizza/payment'
        },
        {
          operation: 'get',
          field: '/pizza/orders'
        },
        {
          operation: 'get',
          field: '/pizza/orders/:orderId'
        },
        {
          operation: 'put',
          field: '/pizza/order/cancel'
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
          field: 'getPizzasCatalog'
        },
        {
          operation: 'mutation',
          field: 'createPizzaPayment'
        },
        {
          operation: 'query',
          field: 'getPizzaOrders'
        },
        {
          operation: 'query',
          field: 'getPizzaOrder'
        },
        {
          operation: 'mutation',
          field: 'cancelPizzaOrder'
        }
      ]
    }
  ]
};
