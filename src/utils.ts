import dayjs from 'dayjs-ext';

export const toFahrenheit = (data: number): string => Math.floor((data * 9) / 5 + 32).toString();
export const changeToDay = (date: string): string => dayjs(date).format('ddd. MMM DD, YYYY');
