import { Card } from '@/components/ui';
import { cn } from '@/lib/utils';

export interface TaskCardProps extends React.ComponentProps<'div'> {
  description: string;
  emoji: string;
  title: string;
}

export const TaskCard = ({ title, description, emoji, className, ...props }: TaskCardProps) => (
  <Card className={cn('rounded-lg border p-4', className)} {...props}>
    <div className='flex items-start gap-3'>
      <div className='text-4xl'>{emoji}</div>
      <div className='flex-1'>
        <h3 className='mb-1 text-2xl'>{title}</h3>
        <p className='text-muted-foreground text-sm'>{description}</p>
      </div>
    </div>
  </Card>
);
