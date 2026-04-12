'use client';

import type { EmblaCarouselType, EmblaOptionsType, EmblaPluginType } from 'embla-carousel';
import type { AutoplayOptionsType } from 'embla-carousel-autoplay';
import type { EmblaViewportRefType } from 'embla-carousel-react';
import type { ComponentProps, KeyboardEvent } from 'react';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { createContext, use, useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

import { IconButton } from './icon-button';

type CarouselRef = EmblaViewportRefType;
type CarouselApi = EmblaCarouselType;
type CarouselOptions = EmblaOptionsType;
type CarouselPlugin = EmblaPluginType;

interface CarouselProps {
  options?: CarouselOptions;
  plugins?: {
    autoplay?: boolean | AutoplayOptionsType;
  };
}

interface CarouselContextProps {
  api?: CarouselApi;
  canScrollNext: boolean;
  canScrollPrev: boolean;
  carouselRef: CarouselRef;
  scrollSnapList: number[];
  selectedScrollSnap: number;
  scrollNext: (jump?: boolean) => void;
  scrollPrev: (jump?: boolean) => void;
  scrollTo: (index: number, jump?: boolean) => void;
}

const CarouselContext = createContext<CarouselContextProps | null>(null);

const useCarousel = () => {
  const context = use(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
};

const Carousel = ({
  options,
  plugins,
  className,
  children,
  ...props
}: ComponentProps<'div'> & CarouselProps) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...options,
      axis: 'x'
    },
    Object.entries(plugins ?? {}).reduce((acc, [pluginName, pluginOptions]) => {
      if (pluginOptions) {
        if (pluginName === 'autoplay') {
          acc.push(Autoplay(typeof pluginOptions === 'object' ? pluginOptions : undefined));
        }
      }
      return acc;
    }, [] as CarouselPlugin[])
  );

  const [canScrollPrev, setCanScrollPrev] = useState(api?.canScrollPrev() ?? false);
  const [canScrollNext, setCanScrollNext] = useState(api?.canScrollNext() ?? false);
  const [selectedScrollSnap, setSelectedScrollSnap] = useState(api?.selectedScrollSnap() ?? 0);
  const [scrollSnapList, setScrollSnapList] = useState<number[]>(api?.scrollSnapList() ?? []);

  const onSelect = (api: CarouselApi) => {
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
    setSelectedScrollSnap(api.selectedScrollSnap());
  };

  const onReInit = (api: CarouselApi) => {
    setScrollSnapList(api.scrollSnapList());

    onSelect(api);
  };

  const scrollPrev = (jump?: boolean) => {
    api?.scrollPrev(jump);
    // eslint-disable-next-line ts/no-unnecessary-condition
    api?.plugins().autoplay?.reset();
  };

  const scrollNext = (jump?: boolean) => {
    api?.scrollNext(jump);
    // eslint-disable-next-line ts/no-unnecessary-condition
    api?.plugins().autoplay?.reset();
  };

  const scrollTo = (index: number, jump?: boolean) => {
    api?.scrollTo(index, jump);
    // eslint-disable-next-line ts/no-unnecessary-condition
    api?.plugins().autoplay?.reset();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      scrollPrev();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      scrollNext();
    }
  };

  useEffect(() => {
    if (!api) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    onReInit(api);
    onSelect(api);

    api.on('reInit', onReInit);
    api.on('select', onSelect);
    return () => {
      api.off('reInit', onReInit);
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <CarouselContext
      value={{
        carouselRef,
        api,
        scrollTo,
        scrollSnapList,
        selectedScrollSnap,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      }}
    >
      <div
        aria-roledescription='carousel'
        className={cn('relative', className)}
        data-slot='carousel'
        role='region'
        onKeyDownCapture={handleKeyDown}
        {...props}
      >
        {children}
      </div>
    </CarouselContext>
  );
};

const CarouselContent = ({ className, ...props }: ComponentProps<'div'>) => {
  const { carouselRef } = useCarousel();

  return (
    <div ref={carouselRef} className='overflow-hidden' data-slot='carousel-content'>
      <div className={cn('-ml-6 flex', className)} {...props} />
    </div>
  );
};

const CarouselItem = ({ className, ...props }: ComponentProps<'div'>) => (
  <div
    aria-roledescription='slide'
    className={cn('min-w-0 shrink-0 grow-0 basis-full pl-6', className)}
    data-slot='carousel-item'
    role='group'
    {...props}
  />
);

const CarouselPrevious = ({
  className,
  variant = 'outline',
  size = 'sm',
  onClick,
  ...props
}: ComponentProps<typeof IconButton>) => {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <IconButton
      {...props}
      className={cn(
        'absolute top-1/2 -left-12 -translate-y-1/2 touch-manipulation rounded-full',
        className
      )}
      data-slot='carousel-previous'
      disabled={!canScrollPrev}
      size={size}
      variant={variant}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) scrollPrev();
      }}
    >
      <ChevronLeftIcon />
      <span className='sr-only'>Previous slide</span>
    </IconButton>
  );
};

const CarouselNext = ({
  className,
  variant = 'outline',
  onClick,
  size = 'sm',
  ...props
}: ComponentProps<typeof IconButton>) => {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <IconButton
      {...props}
      className={cn(
        'absolute top-1/2 -right-12 -translate-y-1/2 touch-manipulation rounded-full',
        className
      )}
      data-slot='carousel-next'
      disabled={!canScrollNext}
      size={size}
      variant={variant}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) scrollNext();
      }}
    >
      <ChevronRightIcon />
      <span className='sr-only'>Next slide</span>
    </IconButton>
  );
};

const CarouselDots = ({ className, ...props }: ComponentProps<'div'>) => {
  const { scrollSnapList, selectedScrollSnap, scrollTo } = useCarousel();

  return (
    <div
      className={cn('flex h-3 items-center justify-center gap-2 pt-6', className)}
      data-slot='carousel-dot-buttons'
      {...props}
    >
      {scrollSnapList.map((_, index) => (
        <button
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className={cn(
            'aspect-square size-3 rounded-full',
            selectedScrollSnap === index
              ? 'pointer-events-none bg-border-hard'
              : 'border border-border-soft bg-transparent'
          )}
          type='button'
          onClick={() => scrollTo(index)}
        >
          <span className='sr-only'>Go to slide {index + 1}</span>
        </button>
      ))}
    </div>
  );
};

export {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel
};
