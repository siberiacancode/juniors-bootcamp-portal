'use client';

import type { ComponentProps } from 'react';

import { MoonIcon, SunIcon } from 'lucide-react';

import { useTheme } from '@/app/(contexts)/theme';
import { Button } from '@/components/ui';

type ThemeButtonProps = ComponentProps<typeof Button>;

export const ThemeButton = (props: ThemeButtonProps) => {
  const theme = useTheme();

  const onThemeClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const x = event.clientX;
    const y = event.clientY;
    const radius = Math.hypot(window.innerWidth, window.innerHeight);

    await document.startViewTransition(() => {
      theme.set(theme.value === 'dark' ? 'light' : 'dark');
    }).ready;

    document.documentElement.animate(
      {
        clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`]
      },
      {
        duration: 700,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)'
      }
    );
  };

  return (
    <Button size='icon' variant='ghost' onClick={onThemeClick} {...props}>
      {theme.value === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
