'use client';

import type { ComponentProps } from 'react';

import { MoonIcon, SunIcon } from 'lucide-react';

import type { Button } from '@/components/ui';

import { useTheme } from '@/app/(contexts)/theme';
import { IconButton } from '@/components/ui';

type ThemeButtonProps = ComponentProps<typeof Button>;

export const ThemeButton = (props: ThemeButtonProps) => {
  const theme = useTheme();

  const onThemeClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const x = event.clientX;
    const y = event.clientY;
    theme.animate(x, y, theme.value === 'dark' ? 'light' : 'dark');
  };

  return (
    <IconButton variant='ghost' onClick={onThemeClick} {...props}>
      {theme.value === 'dark' ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
};
