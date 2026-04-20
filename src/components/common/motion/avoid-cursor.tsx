'use client';

import type { SpringOptions } from 'motion/react';
import type { ComponentPropsWithoutRef } from 'react';

import { motion, useSpring } from 'motion/react';
import { useEffect, useRef } from 'react';

type AvoidCursorProps = { radius?: number; force?: number } & ComponentPropsWithoutRef<
  typeof motion.div
>;

const SPRING_OPTIONS: SpringOptions = { damping: 20, stiffness: 180 };

export const AvoidCursor = ({
  children,
  radius = 120,
  force = 40,
  style,
  ...props
}: AvoidCursorProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, SPRING_OPTIONS);
  const y = useSpring(0, SPRING_OPTIONS);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onPointerMove = ({ clientX, clientY }: PointerEvent) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const dx = clientX - (left + width / 2);
      const dy = clientY - (top + height / 2);
      const dist = Math.hypot(dx, dy);

      if (dist < radius && dist > 0) {
        const repulse = ((radius - dist) / radius) * force;
        x.set(-(dx / dist) * repulse);
        y.set(-(dy / dist) * repulse);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', onPointerMove);
  }, [radius, force]);

  return (
    <motion.div ref={ref} style={{ ...style, x, y }} {...props}>
      {children}
    </motion.div>
  );
};
