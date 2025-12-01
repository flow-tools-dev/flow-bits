export const deferToMicroQueue = async <T>(fn: () => T): Promise<T> => fn();
