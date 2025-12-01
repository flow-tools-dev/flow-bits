export const traceWithCxt =
  <T, C>(label: any) =>
  (cxt: C) =>
  (x: T): T => {
    console.log(label, cxt, x);
    return x;
  };
