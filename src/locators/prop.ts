export const prop =
  <T, K extends keyof T>(key: K) =>
  (obj: T): T[K] | undefined =>
    obj?.[key];
