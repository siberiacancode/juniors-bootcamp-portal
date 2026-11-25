import { cn as clsx } from '@siberiacancode/reactuse';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: Parameters<typeof clsx>) => twMerge(clsx(...inputs));
