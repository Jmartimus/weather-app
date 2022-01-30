//We need all these types defined so that when we call useGetWeather, the app knows what shape the returning data is in

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
  stations: string[];
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
