export function toFahrenheit(degrees: number): number {
  let tempInF: number;
  // eslint-disable-next-line prefer-const
  tempInF = Math.floor(degrees * 9) / 5 + 32;
  return tempInF;
}
