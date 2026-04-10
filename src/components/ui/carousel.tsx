'use client';

import type { EmblaCarouselType, EmblaOptionsType, EmblaPluginType } from 'embla-carousel';
import type { AutoplayOptionsType } from 'embla-carousel-autoplay';
import type { EmblaViewportRefType } from 'embla-carousel-react';
import type { ComponentProps, KeyboardEvent } from 'react';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { createContext, use, useCallback, useEffect, useState } from 'react';

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
  setApi?: (api: CarouselApi) => void;
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
  setApi,
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

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const [selectedScrollSnap, setSelectedScrollSnap] = useState(0);
  const [scrollSnapList, setScrollSnapList] = useState<number[]>([]);

  const onInit = useCallback((api: CarouselApi) => {
    setScrollSnapList(api.scrollSnapList());
  }, []);

  const onSelect = useCallback((api: CarouselApi) => {
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
    setSelectedScrollSnap(api.selectedScrollSnap());
  }, []);

  const scrollPrev = useCallback((jump?: boolean) => api?.scrollPrev(jump), [api]);

  const scrollNext = useCallback((jump?: boolean) => api?.scrollNext(jump), [api]);

  const scrollTo = useCallback(
    (index: number, jump?: boolean) => {
      api?.scrollTo(index, jump);
      // eslint-disable-next-line ts/no-unnecessary-condition
      api?.plugins().autoplay?.reset();
    },
    [api]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  useEffect(() => {
    if (!api) return;

    api.on('init', onInit);
    api.on('select', onSelect);

    return () => {
      api.off('init', onInit);
      api.off('select', onSelect);
    };
  }, [api, onSelect]);

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
  ...props
}: ComponentProps<typeof IconButton>) => {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <IconButton
      className={cn(
        'absolute top-1/2 -left-12 -translate-y-1/2 touch-manipulation rounded-full',

        className
      )}
      data-slot='carousel-previous'
      disabled={!canScrollPrev}
      size={size}
      variant={variant}
      onClick={() => scrollPrev()}
      {...props}
    >
      <ChevronLeftIcon />
      <span className='sr-only'>Previous slide</span>
    </IconButton>
  );
};

const CarouselNext = ({
  className,
  variant = 'outline',
  size = 'sm',
  ...props
}: ComponentProps<typeof IconButton>) => {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <IconButton
      className={cn(
        'absolute top-1/2 -right-12 -translate-y-1/2 touch-manipulation rounded-full',
        className
      )}
      data-slot='carousel-next'
      disabled={!canScrollNext}
      size={size}
      variant={variant}
      onClick={() => scrollNext()}
      {...props}
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
