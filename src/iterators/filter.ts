export const filter =
  <T>(fn: (item: T, idx: number, arr: T[]) => boolean) =>
  (a: T[]) =>
    a?.filter(fn);
