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
      flow: 'page.task.delivery.level.junior.flow',
      rest: [
        {
          operation: 'get',
          field: '/delivery/points'
        },
        {
          operation: 'get',
          field: '/delivery/package/types'
        },
        {
          operation: 'post',
          field: '/delivery/calc'
        }
      ],
      graphQL: [
        {
          operation: 'query',
          field: 'getDeliveryPoints'
        },
        {
          operation: 'query',
          field: 'getDeliveryPackageTypes'
        },
        {
          operation: 'mutation',
          field: 'calculateDelivery'
        }
      ]
    },
    {
      name: 'middle',
      expectedResult: 'page.task.delivery.level.middle.expectedResult',
      flow: 'page.task.delivery.level.middle.flow',
      rest: [
        {
          operation: 'get',
          field: '/delivery/points'
        },
        {
          operation: 'get',
          field: '/delivery/package/types'
        },
        {
          operation: 'post',
          field: '/delivery/calc'
        },
        {
          operation: 'post',
          field: '/delivery/order'
        }
      ],
      graphQL: [
        {
          operation: 'query',
          field: 'getDeliveryPoints'
        },
        {
          operation: 'query',
          field: 'getDeliveryPackageTypes'
        },
        {
          operation: 'mutation',
          field: 'calculateDelivery'
        },
        {
          operation: 'mutation',
          field: 'createDeliveryOrder'
        }
      ]
    },
    {
      name: 'senior',
      expectedResult: 'page.task.delivery.level.senior.expectedResult',
      flow: 'page.task.delivery.level.senior.flow',
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
          field: '/delivery/points'
        },
        {
          operation: 'get',
          field: '/delivery/package/types'
        },
        {
          operation: 'post',
          field: '/delivery/calc'
        },
        {
          operation: 'post',
          field: '/delivery/order'
        },
        {
          operation: 'get',
          field: '/delivery/orders'
        },
        {
          operation: 'get',
          field: '/delivery/orders/:orderId'
        },
        {
          operation: 'put',
          field: '/delivery/orders/cancel'
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
          field: 'getDeliveryPoints'
        },
        {
          operation: 'query',
          field: 'getDeliveryPackageTypes'
        },
        {
          operation: 'mutation',
          field: 'calculateDelivery'
        },
        {
          operation: 'mutation',
          field: 'createDeliveryOrder'
        },
        {
          operation: 'query',
          field: 'getDeliveries'
        },
        {
          operation: 'query',
          field: 'getDelivery'
        },
        {
          operation: 'mutation',
          field: 'cancelDeliveryOrder'
        }
      ]
    }
  ]
};
