import ReactMarkdown from 'react-markdown';

export interface TextSectionsProps {
  description: string;
  title: string;
}

export const TextSections = ({ title, description }: TextSectionsProps) => (
  <section className='flex flex-col gap-4'>
    <h2 className='text-5xl font-pixelify-sans font-bold'>{title}</h2>
    <div className='rounded-20 bg-surface p-6 leading-relaxed text-pretty text-muted-fg'>
      <div className='text-lg prose prose-sm max-w-none dark:prose-invert'>
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>
    </div>
  </section>
);
