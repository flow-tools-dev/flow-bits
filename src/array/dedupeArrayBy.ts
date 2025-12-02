export const dedupeArrayBy =
  <K extends PropertyKey, T extends Record<K, any>>(prop: K) =>
  (arr: T[] = []): T[] => {
    const seen = new Map<any, boolean>();
    return arr.filter((el) => {
      if (seen.has(el[prop])) return false;
      seen.set(el[prop], true);
      return true;
    });
  };
