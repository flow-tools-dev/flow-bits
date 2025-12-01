export const toString = <T>(v: T): string => {
  if (v?.toString && typeof v.toString === 'function') return v.toString();
  return `${v}`;
};
