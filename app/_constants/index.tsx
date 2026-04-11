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

import { MatrixGrid } from '@/components/common';

export const FAQ_ITEMS = [
  {
    question: 'page.home.section.faq.0.question',
    answer: 'page.home.section.faq.0.answer'
  },
  {
    question: 'page.home.section.faq.1.question',
    answer: 'page.home.section.faq.1.answer'
  },
  {
    question: 'page.home.section.faq.2.question',
    answer: 'page.home.section.faq.2.answer'
  }
] as const;

export const MARQUEE_TECHNOLOGIES = [
  {
    name: 'react',
    icon: (
      <MatrixGrid
        matrix={[
          [0, 0, 0, 0, 1, 1],
          [0, 0, 1, 1, 1, 1],
          [1, 1, 1, 1, 0, 0],
          [1, 1, 0, 0, 0, 0]
        ]}
        fill='#FF8EEA'
        size={12}
      />
    )
  },
  {
    name: 'vue',
    icon: (
      <MatrixGrid
        matrix={[
          [0, 1],
          [0, 1],
          [1, 1]
        ]}
        fill='#42BC58'
      />
    )
  },
  {
    name: 'angular',
    icon: (
      <MatrixGrid
        matrix={[
          [1, 1, 1],
          [0, 1, 0]
        ]}
        fill='#C58EFF'
      />
    )
  },
  {
    name: 'svelte',
    icon: (
      <MatrixGrid
        matrix={[
          [0, 1, 0],
          [1, 1, 1],
          [0, 1, 0]
        ]}
        fill='#FFB08E'
      />
    )
  },
  {
    name: 'node.js',
    icon: (
      <MatrixGrid
        matrix={[
          [0, 1, 1],
          [1, 1, 0],
          [0, 1, 1]
        ]}
        fill='#8EDDFF'
      />
    )
  }
] as const;

export const PROJECT_CARD_COLORS = [
  {
    background: 'bg-[var(--color-orange-100)] dark:bg-[var(--color-orange-900)]/70',
    icon: 'text-[var(--color-orange-500)] dark:text-[var(--color-orange-400)]'
  },
  {
    background: 'bg-[var(--color-pink-100)] dark:bg-[var(--color-pink-900)]/70',
    icon: 'text-[var(--color-pink-500)] dark:text-[var(--color-pink-400)]'
  },
  {
    background: 'bg-[var(--color-green-100)] dark:bg-[var(--color-green-900)]/70',
    icon: 'text-[var(--color-green-500)] dark:text-[var(--color-green-400)]'
  }
] as const;

export const REVIEWS = [
  {
    name: 'John Doe',
    role: 'Software Engineer',
    review:
      'This bootcamp was an amazing experience! The curriculum was well-structured and the instructors were very knowledgeable. '
  },
  {
    name: 'Jane Smith',
    role: 'Frontend Developer',
    review: 'I highly recommend this bootcamp to anyone looking to break into the tech industry. '
  },
  {
    name: 'Emily Johnson',
    role: 'Full Stack Developer',
    review: 'The support from the community and mentors was incredible. '
  },
  {
    name: 'Michael Brown',
    role: 'Data Scientist',
    review: 'The bootcamp provided a great balance of theory and practical application. '
  },
  {
    name: 'Sarah Wilson',
    role: 'UX Designer',
    review: 'I appreciated the focus on both technical skills and soft skills. '
  }
];

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
];
