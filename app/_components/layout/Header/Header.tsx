import { guidesSource, tasksSource } from '@/lib/source';

import { DesktopHeader, MobileHeader } from './components';

export const Header = () => {
  const tree = [...tasksSource.pageTree.children, ...guidesSource.pageTree.children];

  return (
    <>
      <DesktopHeader tree={tree} />
      <MobileHeader />
    </>
  );
};
