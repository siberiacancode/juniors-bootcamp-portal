import {
  CodeIcon,
  ComponentIcon,
  CornerLeftDownIcon,
  GitCompareIcon,
  MedalIcon,
  Minimize2Icon,
  PackageIcon,
  ShapesIcon,
  StarIcon,
  TrophyIcon
} from 'lucide-react';

export const LEVELS = [
  {
    name: 'junior',
    icon: StarIcon,
    color: 'bg-(--color-green-100) dark:bg-(--color-green-900)/70 text-(--color-green-500)'
  },
  {
    name: 'middle',
    icon: MedalIcon,
    color: 'bg-(--color-yellow-100) dark:bg-(--color-yellow-900)/70 text-(--color-yellow-500)'
  },
  {
    name: 'senior',
    icon: TrophyIcon,
    color: 'bg-(--color-purple-100) dark:bg-(--color-purple-900)/70 text-(--color-purple-500)'
  }
] as const;

export const GUIDES = [
  {
    label: 'React строковые пропсы',
    color: 'text-(--color-orange-500)',
    icon: CodeIcon,
    background: 'bg-(--color-orange-100) dark:bg-(--color-orange-900)/70'
  },
  {
    label: 'Один package manager',
    color: 'text-(--color-pink-500)',
    icon: PackageIcon,
    background: 'bg-(--color-pink-100) dark:bg-(--color-pink-900)/70'
  },
  {
    label: 'Ранний выход из функции',
    color: 'text-(--color-green-500)',
    icon: CornerLeftDownIcon,
    background: 'bg-(--color-green-100) dark:bg-(--color-green-900)/70'
  },
  {
    label: 'SVG в ассетах',
    color: 'text-(--color-violet-500)',
    icon: ShapesIcon,
    background: 'bg-(--color-violet-100) dark:bg-(--color-violet-900)/70'
  },
  {
    label: 'Лишний return в функциях',
    color: 'text-(--color-sky-500)',
    icon: Minimize2Icon,
    background: 'bg-(--color-sky-100) dark:bg-(--color-sky-900)/70'
  },
  {
    label: 'Оператор ?? против ||',
    color: 'text-(--color-purple-500)',
    icon: GitCompareIcon,
    background: 'bg-(--color-purple-100) dark:bg-(--color-purple-900)/70'
  },
  {
    label: 'Children prop',
    color: 'text-(--color-blue-500)',
    icon: ComponentIcon,
    background: 'bg-(--color-blue-100) dark:bg-(--color-blue-900)/70'
  }
] as const;
