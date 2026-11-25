'use client';

import { useRender } from '@base-ui/react/use-render';

import { cn } from '@/lib/utils';

import { typographyVariants } from './typography';

const ProjectCard = ({ className, render, ...props }: useRender.ComponentProps<'article'>) =>
  useRender({
    defaultTagName: 'article',
    render,
    props: {
      ...props,
      className: cn('flex min-w-0 flex-col gap-5 rounded-24 bg-secondary p-4 sm:p-5', className),
      'data-slot': 'project-card'
    }
  });

const ProjectCardImage = ({ className, render, ...props }: useRender.ComponentProps<'img'>) =>
  useRender({
    defaultTagName: 'img',
    render,
    props: {
      ...props,
      className: cn('h-auto w-full rounded-20 bg-background', className),
      'data-slot': 'project-card-image'
    }
  });

const ProjectCardContent = ({ className, render, ...props }: useRender.ComponentProps<'div'>) =>
  useRender({
    defaultTagName: 'div',
    render,
    props: {
      ...props,
      className: cn('flex min-h-37 flex-col gap-4 px-1 pb-1 sm:min-h-42 sm:gap-5', className),
      'data-slot': 'project-card-content'
    }
  });

const ProjectCardAuthor = ({ className, render, ...props }: useRender.ComponentProps<'p'>) =>
  useRender({
    defaultTagName: 'p',
    render,
    props: {
      ...props,
      className: cn(
        typographyVariants({ variant: 'body-sm' }),
        'font-overpass-mono text-foreground/70',
        className
      ),
      'data-slot': 'project-card-author'
    }
  });

const ProjectCardTitle = ({ className, render, ...props }: useRender.ComponentProps<'h2'>) =>
  useRender({
    defaultTagName: 'h2',
    render,
    props: {
      ...props,
      className: cn(
        typographyVariants({ variant: 'title-md' }),
        'text-[22px]/7 wrap-break-word sm:text-[26px]/8',
        className
      ),
      'data-slot': 'project-card-title'
    }
  });

const ProjectCardActions = ({ className, render, ...props }: useRender.ComponentProps<'div'>) =>
  useRender({
    defaultTagName: 'div',
    render,
    props: {
      ...props,
      className: cn('mt-auto flex items-center gap-4', className),
      'data-slot': 'project-card-actions'
    }
  });

const ProjectCardCodeLink = ({ className, render, ...props }: useRender.ComponentProps<'a'>) =>
  useRender({
    defaultTagName: 'a',
    render,
    props: {
      ...props,
      className: cn(
        'rounded-4 focus-visible:outline-2 focus-visible:outline-ring [&>svg]:size-6',
        className
      ),
      'data-slot': 'project-card-code-link'
    }
  });

const ProjectCardFramework = ({ className, render, ...props }: useRender.ComponentProps<'span'>) =>
  useRender({
    defaultTagName: 'span',
    render,
    props: {
      ...props,
      className: cn('inline-flex [&>svg]:size-6', className),
      'data-slot': 'project-card-framework'
    }
  });

export {
  ProjectCard,
  ProjectCardActions,
  ProjectCardAuthor,
  ProjectCardCodeLink,
  ProjectCardContent,
  ProjectCardFramework,
  ProjectCardImage,
  ProjectCardTitle
};
