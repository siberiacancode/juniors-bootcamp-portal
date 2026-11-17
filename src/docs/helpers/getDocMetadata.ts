import type { Metadata } from 'next';

import type { DocPage } from './getDocPage';

export const getDocMetadata = (doc: DocPage | undefined): Metadata => {
  if (!doc) return {};

  return {
    title: doc.data.title,
    description: doc.data.description
  };
};
