'use server';

import { cookies } from 'next/headers';

interface GetCookieValue {
  <Value>(key: string): Promise<Value | undefined>;
  <Value>(key: string, fallback: Value): Promise<Value>;
}

export const getCookieValue: GetCookieValue = async <Value = unknown>(
  key: string,
  fallback?: Value
) => {
  const cookieStore = await cookies();

  const rawValue = cookieStore.get(key)?.value;

  if (!rawValue) return fallback;

  try {
    return JSON.parse(rawValue) as Value;
  } catch {
    return fallback;
  }
};
