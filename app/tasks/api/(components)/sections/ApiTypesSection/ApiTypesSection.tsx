import Link from 'next/link';

import { getShadowColor } from '@/app/guides/helpers';
import { IntlText } from '@/components/intl';
import { MagicCard } from '@/components/ui';

const API_TYPES = [
  {
    href: '/api/rest',
    label: 'REST',
    descriptionPath: 'page.tasksApi.rest.description',
    shadowColor: getShadowColor(20),
    gradient: {
      from: 'hsl(214, 95%, 82%)',
      to: 'hsl(217, 91%, 60%)'
    }
  },
  {
    href: '/api/graphql',
    label: 'GraphQL',
    descriptionPath: 'page.tasksApi.graphql.description',
    shadowColor: getShadowColor(5),
    gradient: {
      from: 'hsl(330, 95%, 85%)',
      to: 'hsl(330, 70%, 60%)'
    }
  }
];

export const ApiTypesSection = () => (
  <section className='mb-4'>
    <ul className='grid grid-cols-1 gap-3 md:grid-cols-2'>
      {API_TYPES.map((apiType) => (
        <li key={apiType.label}>
          <Link className='w-full' href={apiType.href}>
            <div className='flex flex-col rounded-md transition-all duration-200'>
              <MagicCard
                className='bg-card! p-6'
                gradientColor='none'
                gradientFrom={apiType.gradient.from}
                gradientTo={apiType.gradient.to}
              >
                <div className='relative mb-4 flex items-center gap-4' style={apiType.shadowColor}>
                  <div className='font-pixelify-sans text-6xl font-bold'>{apiType.label}</div>
                </div>
                <p className='mb-2 flex-1 text-lg/relaxed'>
                  <IntlText path={apiType.descriptionPath as MessagePath} />
                </p>
              </MagicCard>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </section>
);
