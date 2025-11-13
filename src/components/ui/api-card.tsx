'use client';

import { Badge, Card } from '@/components/ui';
import { cn } from '@/lib/utils';

type RestMethod = 'delete' | 'get' | 'patch' | 'post' | 'put';
type GraphQLMethod = 'mutation' | 'query' | 'subscription';

type ApiCardVariant = 'graphql' | 'rest';

interface BaseApiCardProps extends React.ComponentProps<'div'> {
  inline?: boolean;
  name: string;
}

interface RestApiCardProps extends BaseApiCardProps {
  type: RestMethod;
  variant: 'rest';
}

interface GraphQLApiCardProps extends BaseApiCardProps {
  type: GraphQLMethod;
  variant: 'graphql';
}

type ApiCardProps = GraphQLApiCardProps | RestApiCardProps;

const VARIANT_COLORS: Record<ApiCardVariant, string> = {
  rest: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100',
  graphql: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100'
};

const TYPE_COLORS: Record<GraphQLMethod | RestMethod, string> = {
  get: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100',
  post: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100',
  put: 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100',
  delete: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100',
  patch: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100',

  query: 'bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-100',
  mutation: 'bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-100',
  subscription: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100'
};

export const ApiCard = ({
  variant,
  type,
  name,
  className,
  inline = true,
  ...props
}: ApiCardProps) => (
  <Card
    className={cn(
      'flex flex-row gap-2 rounded-lg p-2',
      inline && 'w-fit border-none shadow-none',
      className
    )}
    {...props}
  >
    <Badge className={VARIANT_COLORS[variant]}>{variant}</Badge>
    <Badge className={TYPE_COLORS[type]}>{type}</Badge>
    <div className='text-sm font-medium'>{name}</div>
  </Card>
);
