'use client';

import { ChevronDownIcon } from 'lucide-react';
import { Accordion as AccordionPrimitive } from 'radix-ui';
import * as React from 'react';

import { cn } from '@/lib/utils';

const Accordion = ({ ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) => {
  return (
    <AccordionPrimitive.Root className='flex flex-col gap-6' data-slot='accordion' {...props} />
  );
};

const AccordionItem = ({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) => {
  return (
    <AccordionPrimitive.Item
      className={cn('rounded-24 border-2 border-foreground p-4', className)}
      data-slot='accordion-item'
      {...props}
    />
  );
};

const AccordionTrigger = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) => {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        className={cn(
          `flex flex-1 items-center justify-between gap-4 text-left text-[24px]/8 font-medium tracking-wide transition-transform outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180`,
          className
        )}
        data-slot='accordion-trigger'
        {...props}
      >
        {children}
        <ChevronDownIcon className='pointer-events-none size-6 shrink-0 transition-transform duration-200' />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
};

const AccordionContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) => {
  return (
    <AccordionPrimitive.Content
      className='overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
      data-slot='accordion-content'
      {...props}
    >
      <div className={cn('pt-2 text-[18px]/7 font-normal', className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
};

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
