'use client';

import { useDisclosure } from '@siberiacancode/reactuse';
import { ChevronDownIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Fragment } from 'react';

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Drawer,
  DrawerContent,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Skeleton
} from '@/components/ui';

const DynamicSharedButton = dynamic(
  () => import('../SharedButton/SharedButton').then((module) => module.SharedButton),
  {
    ssr: false,
    loading: () => <Skeleton className='size-9' />
  }
);

interface BreadcrumbItemType {
  emoji?: string;
  path: string;
  title: string;
}

interface HeaderProps {
  breadcrumbs: BreadcrumbItemType[];
}

export const DesktopHeader = ({ breadcrumbs }: HeaderProps) => {
  const lastBreadcrumb = breadcrumbs.at(-1)!;

  return (
    <div className='flex items-center justify-between'>
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbs.length > 3 ? (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink asChild href={breadcrumbs[0].path}>
                  <Link href={breadcrumbs[0].path}>
                    <div className='flex items-center gap-1'>
                      {breadcrumbs[0].emoji && <span>{breadcrumbs[0].emoji}</span>}
                      <span>{breadcrumbs[0].title}</span>
                    </div>
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <BreadcrumbEllipsis />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {breadcrumbs.slice(1, -2).map((item) => (
                      <DropdownMenuItem asChild key={item.path}>
                        <BreadcrumbLink asChild href={item.path}>
                          <Link href={item.path}>
                            <div className='flex items-center gap-1'>
                              {item.emoji && <span>{item.emoji}</span>}
                              <span>{item.title}</span>
                            </div>
                          </Link>
                        </BreadcrumbLink>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              {breadcrumbs.slice(-2).map((item, index) => (
                <Fragment key={item.path}>
                  <BreadcrumbItem key={item.path}>
                    <BreadcrumbLink asChild href={item.path}>
                      <Link href={item.path}>
                        <div className='flex items-center gap-1'>
                          {item.emoji && <span>{item.emoji}</span>}
                          <span>{item.title}</span>
                        </div>
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {index < 1 && <BreadcrumbSeparator />}
                </Fragment>
              ))}
            </>
          ) : (
            breadcrumbs.slice(0, -1).map((item, index) => (
              <Fragment key={item.path}>
                <BreadcrumbItem key={item.path}>
                  <BreadcrumbLink asChild href={item.path}>
                    <Link href={item.path}>
                      <div className='flex items-center gap-1'>
                        {item.emoji && <span>{item.emoji}</span>}
                        <span>{item.title}</span>
                      </div>
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
              </Fragment>
            ))
          )}

          <BreadcrumbItem key={lastBreadcrumb.path}>
            <BreadcrumbPage>
              <div className='flex items-center gap-1'>
                {lastBreadcrumb.emoji && <span>{lastBreadcrumb.emoji}</span>}
                <span>{lastBreadcrumb.title}</span>
              </div>
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className='flex flex-wrap items-center gap-2'>
        <DynamicSharedButton emoji={lastBreadcrumb.emoji} title={lastBreadcrumb.title} />
      </div>
    </div>
  );
};

export const MobileHeader = ({ breadcrumbs }: HeaderProps) => {
  const navigationDropdown = useDisclosure(false);
  const lastBreadcrumb = breadcrumbs[breadcrumbs.length - 1];

  return (
    <>
      <div className='flex w-full items-center justify-between'>
        <Button variant='ghost' onClick={() => navigationDropdown.toggle()}>
          <span>{lastBreadcrumb.emoji}</span>
          <span>{lastBreadcrumb.title}</span>
          <ChevronDownIcon className='size-4' />
        </Button>

        <DynamicSharedButton emoji={lastBreadcrumb.emoji} title={lastBreadcrumb.title} />
      </div>

      <Drawer open={navigationDropdown.opened} onOpenChange={navigationDropdown.toggle}>
        <DrawerContent>
          <div className='flex flex-col gap-2'>
            {[...breadcrumbs].reverse().map((item) => (
              <Link
                key={item.path}
                className='flex items-center gap-2 rounded-md p-2 hover:bg-gray-100'
                href={item.path}
                onClick={() => navigationDropdown.toggle()}
              >
                <span>{item.emoji}</span>
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export const Header = ({ breadcrumbs }: HeaderProps) => (
  <>
    <div className='mb-5 md:hidden'>
      <MobileHeader breadcrumbs={breadcrumbs} />
    </div>
    <div className='mb-5 hidden md:block'>
      <DesktopHeader breadcrumbs={breadcrumbs} />
    </div>
  </>
);
