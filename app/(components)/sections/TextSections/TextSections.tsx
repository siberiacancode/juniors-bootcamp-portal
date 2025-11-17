import ReactMarkdown from 'react-markdown';

export interface TextSectionsProps {
  description: string;
  title: string;
}

export const TextSections = ({ title, description }: TextSectionsProps) => (
  <section className='flex flex-col gap-4'>
    <h2 className='font-pixelify-sans text-5xl font-bold'>{title}</h2>
    <div className='bg-secondary text-muted-foreground dark:bg-card rounded-lg p-6 leading-relaxed text-pretty'>
      <div className='prose prose-sm dark:prose-invert max-w-none text-lg'>
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>
    </div>
  </section>
);
