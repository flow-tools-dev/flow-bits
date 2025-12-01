export const jsonClone = <T>(v: T): T =>
  v === undefined ? v : JSON.parse(JSON.stringify(v));
