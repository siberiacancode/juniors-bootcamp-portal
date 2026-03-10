import { parseAsString, useQueryState } from 'nuqs';

const KEY = 'search';
const OPTIONS = parseAsString.withDefault('');

export const useSearchQueryState = () => useQueryState(KEY, OPTIONS);
