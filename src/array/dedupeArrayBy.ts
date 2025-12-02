export const dedupeArrayBySet =
  <K extends PropertyKey, T extends Record<K, any>>(prop: K) =>
  (arr: T[] = []): T[] => {
    const seen = new Set<any>();
    return arr.filter((el) => {
      if (seen.has(el[prop])) return false;
      seen.add(el[prop]);
      return true;
    });
  };
