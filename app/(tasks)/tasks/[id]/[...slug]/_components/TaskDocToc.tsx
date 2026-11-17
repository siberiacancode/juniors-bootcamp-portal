import type { DocPage } from '@/docs';

interface TaskDocTocProps {
  items: DocPage['toc'];
}

export const TaskDocToc = ({ items }: TaskDocTocProps) => (
  <ul className='flex flex-col gap-1 text-[14px]/5'>
    {items.map((item) => (
      <li key={item.url} style={{ paddingLeft: (item.depth - 2) * 12 }}>
        <a href={item.url}>{item.title}</a>
      </li>
    ))}
  </ul>
);
