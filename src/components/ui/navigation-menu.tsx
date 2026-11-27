'use client';

import type { ComponentPropsWithRef } from 'react';

import { NavigationMenu as Primitive } from '@base-ui/react/navigation-menu';
import { useRender } from '@base-ui/react/use-render';
import { cva } from 'class-variance-authority';
import { ChevronDownIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

const navigationMenuTriggerStyle = cva(
  'group/navigation-menu-trigger inline-flex h-10 items-center rounded-full px-6 text-[14px] font-medium tracking-wide transition-colors outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-popup-open:bg-muted'
);

const NavigationMenuPositioner = ({
  className,
  side = 'bottom',
  sideOffset = 8,
  align = 'start',
  ...props
}: Primitive.Positioner.Props) => (
  <Primitive.Portal>
    <Primitive.Positioner
      className={cn(
        'isolate z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width)',
        className
      )}
      align={align}
      side={side}
      sideOffset={sideOffset}
      {...props}
    >
      <Primitive.Popup className='relative h-(--popup-height) w-(--popup-width) origin-(--transform-origin) rounded-24 bg-background text-foreground shadow-[0_16px_40px_rgba(11,11,11,.08)] ring-1 ring-border-soft transition-[opacity,transform,width,height,scale] duration-200 outline-none data-ending-style:opacity-0 data-starting-style:opacity-0'>
        <Primitive.Viewport className='relative size-full overflow-hidden' />
      </Primitive.Popup>
    </Primitive.Positioner>
  </Primitive.Portal>
);

const NavigationMenu = ({
  align = 'start',
  className,
  children,
  ...props
}: Primitive.Root.Props & Pick<Primitive.Positioner.Props, 'align'>) => (
  <Primitive.Root
    className={cn('group/navigation-menu relative flex max-w-max flex-1 items-center', className)}
    data-slot='navigation-menu'
    {...props}
  >
    {children}
    <NavigationMenuPositioner align={align} />
  </Primitive.Root>
);

const NavigationMenuList = ({
  className,
  ...props
}: ComponentPropsWithRef<typeof Primitive.List>) => (
  <Primitive.List
    className={cn('flex list-none items-center gap-0', className)}
    data-slot='navigation-menu-list'
    {...props}
  />
);

const NavigationMenuItem = ({
  className,
  ...props
}: ComponentPropsWithRef<typeof Primitive.Item>) => (
  <Primitive.Item
    className={cn('relative', className)}
    data-slot='navigation-menu-item'
    {...props}
  />
);

const NavigationMenuTrigger = ({ className, children, ...props }: Primitive.Trigger.Props) => (
  <Primitive.Trigger
    className={cn(navigationMenuTriggerStyle(), className)}
    data-slot='navigation-menu-trigger'
    {...props}
  >
    {children}
    <ChevronDownIcon
      aria-hidden='true'
      className='ml-2 size-4 transition-transform duration-200 group-data-popup-open/navigation-menu-trigger:rotate-180'
    />
  </Primitive.Trigger>
);

const NavigationMenuContent = ({ className, ...props }: Primitive.Content.Props) => (
  <Primitive.Content
    className={cn(
      'h-full p-2 outline-none data-ending-style:opacity-0 data-starting-style:opacity-0',
      className
    )}
    data-slot='navigation-menu-content'
    {...props}
  />
);

const NavigationMenuLink = ({ className, ...props }: Primitive.Link.Props) => (
  <Primitive.Link
    className={cn(
      'flex items-center rounded-16 p-2 transition-colors outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring data-active:bg-muted',
      className
    )}
    data-slot='navigation-menu-link'
    {...props}
  />
);

const NavigationMenuIndicator = ({
  className,
  ...props
}: ComponentPropsWithRef<typeof Primitive.Icon>) => (
  <Primitive.Icon
    className={cn('top-full z-1 flex h-1.5 items-end justify-center', className)}
    data-slot='navigation-menu-indicator'
    {...props}
  />
);

const NavigationMenuCard = ({ className, render, ...props }: useRender.ComponentProps<'div'>) =>
  useRender({
    defaultTagName: 'div',
    render,
    props: {
      ...props,
      className: cn(
        'group/card flex items-center gap-3 rounded-16 p-2 text-left text-foreground hover:bg-muted',
        className
      ),
      'data-slot': 'navigation-menu-card'
    }
  });

const NavigationMenuCardIcon = ({
  className,
  render,
  ...props
}: useRender.ComponentProps<'span'>) =>
  useRender({
    defaultTagName: 'span',
    render,
    props: {
      ...props,
      className: cn(
        'flex size-10 shrink-0 items-center justify-center rounded-12 bg-muted group-hover/card:bg-background',
        className
      ),
      'data-slot': 'navigation-menu-card-icon'
    }
  });

const NavigationMenuCardTitle = ({
  className,
  render,
  ...props
}: useRender.ComponentProps<'strong'>) =>
  useRender({
    defaultTagName: 'strong',
    render,
    props: {
      ...props,
      className: cn('text-[14px]/5.5 font-bold tracking-wide', className),
      'data-slot': 'navigation-menu-card-title'
    }
  });

const NavigationMenuCardDescription = ({
  className,
  render,
  ...props
}: useRender.ComponentProps<'small'>) =>
  useRender({
    defaultTagName: 'small',
    render,
    props: {
      ...props,
      className: cn('text-[12px]/4 font-medium text-muted-fg', className),
      'data-slot': 'navigation-menu-card-description'
    }
  });

const NavigationMenuAction = ({ className, render, ...props }: useRender.ComponentProps<'div'>) =>
  useRender({
    defaultTagName: 'div',
    render,
    props: {
      ...props,
      className: cn(
        'flex items-center justify-between rounded-14 px-2 py-2.5 text-[14px] font-bold tracking-wide text-foreground hover:bg-muted',
        className
      ),
      'data-slot': 'navigation-menu-action'
    }
  });

export {
  NavigationMenu,
  NavigationMenuAction,
  NavigationMenuCard,
  NavigationMenuCardDescription,
  NavigationMenuCardIcon,
  NavigationMenuCardTitle,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPositioner,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
};
