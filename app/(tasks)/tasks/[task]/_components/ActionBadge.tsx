import { cn } from '@/lib/utils';

type RestOperation = 'delete' | 'get' | 'patch' | 'post' | 'put';

type GraphQLOperation = 'mutation' | 'query' | 'subscription';

interface ActionBadgeProps extends React.ComponentProps<'div'> {
  operation: GraphQLOperation | RestOperation;
}

const ACTION_COLORS_MAP: Record<GraphQLOperation | RestOperation, string> = {
  delete:
    'bg-(--color-red-100) text-(--color-red-800) dark:text-(--color-red-100) dark:bg-(--color-red-800)',
  get: 'bg-(--color-blue-50) text-(--color-blue-800) dark:text-(--color-blue-50) dark:bg-(--color-blue-800)',
  patch:
    'bg-(--color-yellow-50) text-(--color-yellow-800) dark:text-(--color-yellow-50) dark:bg-(--color-yellow-800)',
  post: 'bg-(--color-green-100) text-(--color-green-800) dark:text-(--color-green-100) dark:bg-(--color-green-800)',
  put: 'bg-(--color-orange-100) text-(--color-orange-800) dark:text-(--color-orange-100) dark:bg-(--color-orange-800)',
  mutation:
    'bg-(--color-purple-100) text-(--color-purple-600) dark:text-(--color-purple-100) dark:bg-(--color-purple-600)',
  query:
    'bg-(--color-sky-100) text-(--color-sky-500) dark:text-(--color-sky-100) dark:bg-(--color-sky-500)',
  subscription:
    'bg-(--color-orange-100) text-(--color-orange-400) dark:text-(--color-orange-100) dark:bg-(--color-orange-400)'
};

export const ActionBadge = ({ className, operation, ...props }: ActionBadgeProps) => (
  <div
    className={cn(
      'rounded-full px-6 py-2 text-[20px]/7 font-bold tracking-wider',
      ACTION_COLORS_MAP[operation],
      className
    )}
    {...props}
  />
);
