'use client';

import type { ComponentProps, ReactNode } from 'react';

import { ChevronDownIcon } from 'lucide-react';
import { Accordion as AccordionPrimitive } from 'radix-ui';

import { cn } from '@/lib/utils';

const SkillsAccordion = ({
  className,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Root>) => (
  <AccordionPrimitive.Root className={cn('flex flex-col gap-6', className)} {...props} />
);

const SkillsAccordionItem = ({
  className,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Item>) => (
  <AccordionPrimitive.Item className={className} {...props} />
);

const SkillsAccordionTrigger = ({
  className,
  children,
  icon,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Trigger> & {
  icon?: ReactNode;
}) => (
  <AccordionPrimitive.Header className='flex'>
    <AccordionPrimitive.Trigger
      className={cn(
        `flex flex-1 items-center justify-between gap-4 text-left text-[24px]/8 font-medium tracking-wide transition-transform outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50`,
        !icon && '[&[data-state=open]>svg]:rotate-180',
        className
      )}
      {...props}
    >
      {children}
      {icon || (
        <ChevronDownIcon className='pointer-events-none size-6 shrink-0 transition-transform duration-200' />
      )}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);

const SkillsAccordionContent = ({
  className,
  children,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Content>) => (
  <AccordionPrimitive.Content
    className='overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
    {...props}
  >
    <div
      className={cn(
        'pt-2 text-[18px]/7 font-normal',
        '[&>a]:underline [&>a]:underline-offset-4',
        className
      )}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
);

export { SkillsAccordion, SkillsAccordionContent, SkillsAccordionItem, SkillsAccordionTrigger };
