import fetches from '@siberiacancode/fetches';

export const instance = fetches.create({
  baseURL: 'https://api.github.com'
});
