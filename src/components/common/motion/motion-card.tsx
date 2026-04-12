'use client';

import { motion } from 'motion/react';

import { Card } from '@/components/ui';

type MotionCardProps = Omit<React.ComponentProps<typeof Card>, 'asChild'>;

export const MotionCard = motion.create<MotionCardProps>(Card);
