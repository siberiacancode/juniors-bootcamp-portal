import Link from 'next/link';

export interface LinkMentionProps extends React.ComponentProps<typeof Link> {
  external?: false;
}

export interface TagMentionProps extends React.ComponentProps<'a'> {
  external: true;
}

type MentionProps = LinkMentionProps | TagMentionProps;

export const Mention = ({ children, external = false, ...props }: MentionProps) => (
  <>
    {external && (
      <a {...(props as TagMentionProps)} rel='noopener noreferrer' target='_blank'>
        <div className='hover:bg-accent flex w-fit items-center gap-2 rounded-md p-2 text-lg font-medium'>
          {children}
        </div>
      </a>
    )}
    {!external && (
      <Link {...(props as LinkMentionProps)}>
        <div className='hover:bg-accent flex w-fit items-center gap-2 rounded-md p-2 text-lg font-medium'>
          {children}
        </div>
      </Link>
    )}
  </>
);
