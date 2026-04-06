'use server';

import { cookies } from 'next/headers';

export const getCookieValue = async <Value = unknown>(key: string) => {
  const cookieStore = await cookies();

  const rawValue = cookieStore.get(key)?.value;

  if (!rawValue) return null;

  try {
    // TODO validate
    return JSON.parse(rawValue) as Value;
  } catch {
    return null;
  }
};
