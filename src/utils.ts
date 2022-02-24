// import { dayOfWeek, monthOfYear } from './constants';
// import { default as dayjs } from 'dayjs';
import dayjs from 'dayjs-ext';

export const toFahrenheit = (data: number): string => Math.floor((data * 9) / 5 + 32).toString();
export const changeToDay = (date: string): any => dayjs(date).format('ddd. MMM DD, YYYY');

// export const toDate = (date: string): string => {
//   const newDate = new Date();
//   const month = newDate.getMonth();
//   const date = newDate.getDate();
//   const day = newDate.getDay();
//   const hour = newDate.getHours();
//   const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
//   const minutes = newDate.getMinutes();
//   const ampm = hour >= 12 ? 'PM' : 'AM';

//   return dayOfWeek[day] + ', ' + date + ' ' + monthOfYear[month];
// };

// Find out what today is
// To find out what day the passed in value is
// and then return the day of the week in the format you want
// And then you will run this function on each date in your Forecast component
