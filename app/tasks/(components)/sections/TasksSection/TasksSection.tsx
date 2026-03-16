import type { CSSProperties } from 'react';

import { CarIcon, PackageIcon, PizzaIcon, PopcornIcon } from 'lucide-react';
import Link from 'next/link';

import { IntlText } from '@/components/intl';

const pseudoRandom = (seed: number) => {
  let value = seed;
  return () => {
    value = Math.sin(value) * 10000;
    return value - Math.floor(value);
  };
};

const createPixelCluster = (slug: string, index: number) => {
  const next = pseudoRandom(
    slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) + index * 31
  );
  const count = Math.floor(next() * 5) + 3;

  return Array.from({ length: count }).map((_, pixelIndex) => ({
    id: `${slug}-pixel-${index}-${pixelIndex}`,
    size: 10 + Math.floor(next() * 20),
    top: Math.floor(next() * 70),
    left: Math.floor(next() * 70)
  }));
};

const TASK_CARDS = [
  {
    slug: 'delivery',
    title: 'Delivery',
    description: 'page.tasks.cards.delivery.description',
    href: '/platform/tasks/delivery',
    icon: PackageIcon,
    colors: {
      border: 'rgba(76, 125, 240, 0.4)',
      icon: 'hsl(220, 92%, 65%)',
      iconBg: 'rgba(76, 125, 240, 0.18)',
      shadow: 'rgba(76, 125, 240, 0.85)'
    }
  },
  {
    slug: 'car',
    title: 'Car',
    description: 'page.tasks.cards.car.description',
    href: '/platform/tasks/car',
    icon: CarIcon,
    colors: {
      border: 'rgba(239, 68, 68, 0.4)',
      icon: 'hsl(0, 84%, 60%)',
      iconBg: 'rgba(239, 68, 68, 0.18)',
      shadow: 'rgba(239, 68, 68, 0.85)'
    }
  },
  {
    slug: 'cinema',
    title: 'Cinema',
    description: 'page.tasks.cards.cinema.description',
    href: '/platform/tasks/cinema',
    icon: PopcornIcon,
    colors: {
      border: 'rgba(236, 72, 153, 0.4)',
      icon: 'hsl(330, 85%, 65%)',
      iconBg: 'rgba(236, 72, 153, 0.18)',
      shadow: 'rgba(236, 72, 153, 0.85)'
    }
  },
  {
    slug: 'pizza',
    title: 'Pizza',
    description: 'page.tasks.cards.pizza.description',
    href: '/platform/tasks/pizza',
    icon: PizzaIcon,
    colors: {
      border: 'rgba(250, 204, 21, 0.4)',
      icon: 'hsl(45, 93%, 55%)',
      iconBg: 'rgba(250, 204, 21, 0.2)',
      shadow: 'rgba(250, 204, 21, 0.85)'
    }
  }
];

export const TasksSection = () => (
  <section className='grid grid-cols-1 gap-4 md:grid-cols-2'>
    {TASK_CARDS.map((card, index) => (
      <Link
        key={card.slug}
        style={
          {
            '--task-shadow': card.colors.shadow,
            '--task-icon-bg': card.colors.iconBg,
            '--task-icon-color': card.colors.icon,
            '--task-overlay': card.colors.border
          } as CSSProperties
        }
        className='group block'
        href={card.href}
      >
        <div className='relative flex flex-col overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:filter-[drop-shadow(8px_8px_0px_var(--task-shadow))]'>
          <div className='pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
            {createPixelCluster(card.slug, index).map((pixel) => (
              <span
                key={pixel.id}
                style={{
                  width: pixel.size,
                  height: pixel.size,
                  top: `${pixel.top}%`,
                  left: `${pixel.left}%`,
                  backgroundColor: 'var(--task-overlay)',
                  opacity: 0.5
                }}
                className='absolute block transition-transform duration-300 group-hover:scale-110'
              />
            ))}
          </div>
          <div className='flex items-center justify-between'>
            <div
              className='flex size-18 items-center justify-center rounded-2xl font-pixelify-sans text-3xl transition-all duration-300'
              style={{ backgroundColor: card.colors.iconBg, color: card.colors.icon }}
            >
              <card.icon className='size-14' />
            </div>
            <span className='font-pixelify-sans text-6xl text-muted-foreground/60 transition-all duration-300 group-hover:text-foreground'>
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          <div className='mt-6 flex flex-col justify-between'>
            <h3 className='font-pixelify-sans text-6xl/tight font-bold transition-[text-shadow] group-hover:[text-shadow:4px_4px_0px_var(--task-shadow)]'>
              <IntlText path={card.title as MessagePath} />
            </h3>
            <p className='mt-3 text-base/relaxed text-muted-foreground'>
              <IntlText path={card.description as MessagePath} />
            </p>
          </div>
        </div>
      </Link>
    ))}
  </section>
);
