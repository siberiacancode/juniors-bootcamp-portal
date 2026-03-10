import { parseAsArrayOf, parseAsString, useQueryState } from 'nuqs';

const KEY = 'tags';
const OPTIONS = parseAsArrayOf(parseAsString).withDefault([]);

export const useTagsQueryState = () => useQueryState(KEY, OPTIONS);
