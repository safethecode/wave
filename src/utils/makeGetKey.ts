/**
 * @description Util to solve key duplication problem that occurs during
 * server-side rendering when using Recoil
 */

export const makeGetKey = (domain: string) => (key: string) =>
  `${typeof window === 'undefined' ? '_' : ''}${domain}-${key}`;
