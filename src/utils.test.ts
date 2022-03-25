import { toFahrenheit, changeToDay } from './utils';

describe('utilities test', () => {
  it('should convert celsius degrees to fahrenheit & type to string', () => {
    expect(toFahrenheit(10)).toBe('50');
  });
  it('should convert date format to ddd. MMM DD, YYYY', () =>
    expect(changeToDay('2022-03-26')).toBe('Sat. Mar 26, 2022'));
});
