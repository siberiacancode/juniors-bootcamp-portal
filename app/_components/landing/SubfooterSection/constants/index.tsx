import { MatrixGrid } from '@/components/common';

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
        fill='var(--color-pink-300)'
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
        fill='var(--color-green-300)'
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
        fill='var(--color-violet-300)'
        size={22}
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
        fill='var(--color-orange-300)'
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
        fill='var(--color-sky-300)'
      />
    )
  }
] as const;

export const PROJECT_CARD_COLORS = [
  {
    key: '1',
    background: 'bg-(--color-orange-100) dark:bg-(--color-orange-900)/70',
    icon: 'text-(--color-orange-500) dark:text-(--color-orange-400)'
  },
  {
    key: '2',
    background: 'bg-(--color-pink-100) dark:bg-(--color-pink-900)/70',
    icon: 'text-(--color-pink-500) dark:text-(--color-pink-400)'
  },
  {
    key: '3',
    background: 'bg-(--color-green-100) dark:bg-(--color-green-900)/70',
    icon: 'text-(--color-green-500) dark:text-(--color-green-400)'
  }
] as const;
