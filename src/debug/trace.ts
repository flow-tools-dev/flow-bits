export const trace =
  <T>(label: any) =>
  (x: T): T => {
    console.log(label, x);
    return x;
  };
