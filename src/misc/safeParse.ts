export const safeParse = (s: string) => {
  try {
    return JSON.parse(s);
  } catch (e) {
    return s;
  }
};
