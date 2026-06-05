'use client';

import * as motion from 'motion/react-client';
import { useState } from 'react';

import { TestersMascotIcon } from '@/components/icons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Typography
} from '@/components/ui';
import { IntlText } from '@/intl';
import { cn } from '@/lib/utils';

import type { SkillTitle } from './types';

import { SkillPreview } from './components/SkillPreview';
import { SKILLS } from './constants';

export const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillTitle>(SKILLS[0].title);

  const selectedSkillData = SKILLS.find((skill) => skill.title === selectedSkill) ?? SKILLS[0];
  const onSkillChange = (value: string) => {
    if (value) setSelectedSkill(value as SkillTitle);
  };

  return (
    <motion.section
      transition={{
        duration: 0.6
      }}
      className='relative grid gap-6 pt-52 lg:grid-cols-[minmax(0,560px)_1fr] lg:pt-0'
      initial={{ opacity: 0, y: '20%' }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <TestersMascotIcon className='pointer-events-none absolute top-0 left-1/2 z-0 h-67 w-auto -translate-x-1/2 select-none lg:-top-52 lg:right-22 lg:left-auto lg:translate-x-0' />

      <Accordion
        collapsible
        className='z-10 hidden flex-col gap-4 lg:flex'
        type='single'
        value={selectedSkill}
        onValueChange={onSkillChange}
      >
        {SKILLS.map((skill) => {
          const Icon = skill.Icon;

          return (
            <AccordionItem
              key={skill.title}
              className={cn(
                'flex flex-col rounded-32 border-0 bg-secondary px-10 py-8',
                'data-[state=open]:bg-(--color-blue-50) data-[state=open]:text-(--color-blue-900) dark:data-[state=open]:bg-(--color-blue-900) dark:data-[state=open]:text-(--color-blue-50)'
              )}
              value={skill.title}
            >
              <AccordionTrigger icon={<Icon className='size-10 shrink-0 text-action-primary' />}>
                <Typography as='span' variant='title-lg'>
                  <IntlText path={skill.title} />
                </Typography>
              </AccordionTrigger>
              <AccordionContent>
                <IntlText path={skill.description} />
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>

      <div className='z-10 hidden items-center justify-center overflow-hidden rounded-32 bg-secondary lg:flex'>
        <div className='w-full p-6 sm:p-8'>
          <SkillPreview skill={selectedSkillData} />
        </div>
      </div>

      <Accordion
        collapsible
        className='z-10 flex flex-col gap-4 lg:hidden'
        type='single'
        value={selectedSkill}
        onValueChange={onSkillChange}
      >
        {SKILLS.map((skill) => (
          <AccordionItem
            key={skill.title}
            className={cn(
              'rounded-32 border-0 bg-secondary p-6',
              'data-[state=open]:bg-(--color-blue-50) data-[state=open]:text-(--color-blue-900) dark:data-[state=open]:bg-(--color-blue-900) dark:data-[state=open]:text-(--color-blue-50)'
            )}
            value={skill.title}
          >
            <AccordionTrigger>
              <Typography as='span' variant='title-md'>
                <IntlText path={skill.title} />
              </Typography>
            </AccordionTrigger>
            <AccordionContent className='flex flex-col gap-6'>
              <SkillPreview className='mt-6' skill={skill} />
              <Typography as='span' variant='body-sm'>
                <IntlText path={skill.description} />
              </Typography>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.section>
  );
};
