export const toKeys = (v: any): PropertyKey[] => {
  if (v?.constructor === Object) return Object.keys(v);
  if (v?.keys && typeof v.keys === 'function') return [...v.keys()];
  return [];
};
