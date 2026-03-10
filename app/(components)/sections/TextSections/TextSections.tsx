import ReactMarkdown from 'react-markdown';

export interface TextSectionsProps {
  description: string;
  title: string;
}

export const TextSections = ({ title, description }: TextSectionsProps) => (
  <section className='flex flex-col gap-4'>
    <h2 className='font-pixelify-sans text-5xl font-bold'>{title}</h2>
    <div className='rounded-lg bg-surface p-6 leading-relaxed text-pretty text-muted-foreground dark:bg-card'>
      <div className='prose prose-sm max-w-none text-lg dark:prose-invert'>
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>
    </div>
  </section>
);
