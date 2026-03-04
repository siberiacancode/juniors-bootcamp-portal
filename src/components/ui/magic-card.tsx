'use client';

import { motion, useMotionTemplate, useMotionValue } from 'motion/react';
import * as React from 'react';
import { useCallback, useEffect } from 'react';

import { cn } from '@/lib/utils';

interface MagicCardProps {
  children?: React.ReactNode;
  className?: string;
  gradientColor?: string;
  gradientFrom?: string;
  gradientOpacity?: number;
  gradientSize?: number;
  gradientTo?: string;
}

export const MagicCard = ({
  children,
  className,
  gradientSize = 200,
  gradientColor = '#D9D9D955',
  gradientOpacity = 0.8,
  gradientFrom = '#9E7AFF',
  gradientTo = '#FE8BBB'
}: MagicCardProps) => {
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);
  const reset = useCallback(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [gradientSize, mouseX, mouseY]);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    reset();
  }, [reset]);

  useEffect(() => {
    const handleGlobalPointerOut = (e: PointerEvent) => {
      if (!e.relatedTarget) {
        reset();
      }
    };

    const handleVisibility = () => {
      if (document.visibilityState !== 'visible') {
        reset();
      }
    };

    window.addEventListener('pointerout', handleGlobalPointerOut);
    window.addEventListener('blur', reset);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      window.removeEventListener('pointerout', handleGlobalPointerOut);
      window.removeEventListener('blur', reset);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [reset]);

  return (
    <div
      className={cn('group relative rounded-[inherit]', className)}
      onPointerEnter={reset}
      onPointerLeave={reset}
      onPointerMove={handlePointerMove}
    >
      <motion.div
        style={{
          background: useMotionTemplate`
          radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
          ${gradientFrom}, 
          ${gradientTo}, 
          var(--border) 100%
          )
          `
        }}
        className='bg-border pointer-events-none absolute inset-0 rounded-[inherit] duration-300 group-hover:opacity-100'
      />
      <div className='bg-card absolute inset-px rounded-[inherit]' />
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
          `,
          opacity: gradientOpacity
        }}
        className='pointer-events-none absolute inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100'
      />
      <div className='relative'>{children}</div>
    </div>
  );
};
