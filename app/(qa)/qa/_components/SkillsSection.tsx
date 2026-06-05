import {
  BugIcon,
  ClipboardCheckIcon,
  FileSearchIcon,
  FlaskConicalIcon,
  PlayIcon
} from 'lucide-react';
import * as motion from 'motion/react-client';

import { Card, Typography } from '@/components/ui';
import { IntlText } from '@/intl';
import { cn } from '@/lib/utils';

const SKILLS = [
  {
    title: 'page.testers.skills.testCases.title',
    description: 'page.testers.skills.testCases.description',
    Icon: ClipboardCheckIcon,
    featured: true
  },
  {
    title: 'page.testers.skills.requirements.title',
    description: null,
    Icon: FileSearchIcon,
    featured: false
  },
  {
    title: 'page.testers.skills.bugReports.title',
    description: null,
    Icon: BugIcon,
    featured: false
  },
  {
    title: 'page.testers.skills.automation.title',
    description: null,
    Icon: FlaskConicalIcon,
    featured: false
  }
] as const;

export const SkillsSection = () => (
  <motion.section
    transition={{
      duration: 0.6
    }}
    className='grid gap-6 lg:grid-cols-[minmax(0,553px)_1fr] lg:items-stretch'
    initial={{ opacity: 0, y: '20%' }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <div className='flex flex-col gap-4'>
      {SKILLS.map(({ description, featured, Icon, title }) => (
        <Card
          key={title}
          className={cn(
            'min-h-22 justify-center gap-8 rounded-24 border-0 bg-secondary p-6 sm:min-h-35.25 sm:px-10 sm:py-8',
            featured &&
              'min-h-112.5 justify-start bg-(--color-blue-50) text-(--color-blue-900) sm:min-h-53.5 dark:bg-(--color-blue-900)/70 dark:text-(--color-blue-50)'
          )}
        >
          <div className='flex items-start gap-4'>
            <Typography as='h2' className='flex-1' variant='title-lg'>
              <IntlText path={title} />
            </Typography>
            <Icon className='size-10 shrink-0 text-action-primary' />
          </div>

          {featured && (
            <div className='relative flex h-48 items-center justify-center rounded-16 bg-background/70 lg:hidden'>
              <PlayIcon className='absolute right-4 bottom-4 size-6 rounded-full bg-muted p-1 text-muted-fg' />
            </div>
          )}

          {description && (
            <Typography as='p' variant='body-md'>
              <IntlText path={description} />
            </Typography>
          )}
        </Card>
      ))}
    </div>

    <div className='relative hidden min-h-110 items-center justify-center overflow-hidden rounded-24 bg-secondary lg:flex lg:min-h-171'>
      <div className='absolute inset-6 rounded-24 border border-border-soft/20 bg-background/40' />
      <div className='relative flex size-20 items-center justify-center rounded-full bg-background text-muted-fg shadow-sm'>
        <PlayIcon className='size-8 fill-current' />
      </div>
    </div>
  </motion.section>
);
