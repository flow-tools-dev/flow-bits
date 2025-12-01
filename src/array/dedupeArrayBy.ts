export const dedupeArrayBy =
  <K extends PropertyKey, T extends Record<K, any>>(prop: K) =>
  (arr: T[] = []): T[] => [
    ...arr
      .reduce((m, el) => (m.has(el[prop]) ? m : m.set(el[prop], el)), new Map())
      .values(),
  ];
