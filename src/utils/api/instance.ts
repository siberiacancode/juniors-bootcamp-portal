import fetches from '@siberiacancode/fetches';

export const instance = fetches.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
});
