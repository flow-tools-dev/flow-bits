export const deferToMacroQueue = <T>(fn: () => T): NodeJS.Timeout =>
  setTimeout(fn, 0);
