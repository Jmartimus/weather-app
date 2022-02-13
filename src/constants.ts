//  We need all these types defined so that when we call useGetWeather, the app knows what shape the returning data is in

// constants file hold things that aren't going to change
export interface WeatherResults {
  address: string;
  currentConditions: CurrentConditions;
  days: Day[];
  latitude: number;
  longitude: number;
  queryCost: number;
  resolvedAddress: string;
  stations: Stations;
  timezone: string;
  tzoffset: number;
}
interface CurrentConditions {
  cloudcover: number;
  conditions: string;
  datetime: string;
  datetimeEpoch: number;
  dew: number;
  feelslike: number;
  humidity: number;
  icon: string;
  moonphase: number;
  precip: number;
  precipprob: null;
  preciptype: null;
  pressure: number;
  snow: null;
  snowdepth: number;
  solarenergy: null;
  solarradiation: null;
  stations: string[]; // its an array of strings
  sunrise: string;
  sunriseEpoch: number;
  sunset: string;
  sunsetEpoch: number;
  temp: number;
  uvindex: null;
  visibility: number;
  winddir: number;
  windgust: null;
  windspeed: number;
}

interface Day {
  cloudcover: number;
  conditions: string;
  datetime: string;
  datetimeEpoch: number;
  description: string;
  dew: number;
  feelslike: number;
  feelslikemax: number;
  feelslikemin: number;
  humidity: number;
  icon: string;
  moonphase: number;
  precip: number;
  precipcover: null;
  precipprob: number;
  preciptype: null;
  pressure: number;
  severerisk: number;
  snow: number;
  snowdepth: number;
  solarenergy: number;
  solarradiation: number;
  source: string;
  stations: string[];
  sunrise: string;
  sunriseEpoch: number;
  sunset: string;
  sunsetEpoch: number;
  temp: number;
  tempmax: number;
  tempmin: number;
  uvindex: number;
  visibility: number;
  winddir: number;
  windgust: number;
  windspeed: number;
}

interface Stations {
  E3292: Station;
  KJDD: Station;
  KJXI: Station;
  KSLR: Station;
  KTYR: Station;
}

interface Station {
  distance: number;
  latitude: number;
  longitude: number;
  useCount: number;
  id: string;
  contribution: number;
  name: string;
  quality: number;
}

export const snowPic =
  'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
export const sunnyPic =
  'https://images.unsplash.com/photo-1548263594-a71ea65a8598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80';
export const rainyPic =
  'https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
export const foggyPic =
  'https://images.unsplash.com/photo-1479476437642-f85d89e5ad7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
export const cloudyPic =
  'https://images.unsplash.com/photo-1551485324-27120d4b3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
