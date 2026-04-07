'use server';

import { cookies } from 'next/headers';

interface GetCookieValue {
  /** Returns parsed cookie value or undefined if not found */
  <Value>(key: string): Promise<Value | undefined>;
  /** Returns parsed cookie value or fallback if not found */
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
    // TODO validate
    return JSON.parse(rawValue) as Value;
  } catch {
    return fallback;
  }
};
