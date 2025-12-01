export const dedupeArray = <T>(arr: T[] = []): T[] => Array.from(new Set(arr));
