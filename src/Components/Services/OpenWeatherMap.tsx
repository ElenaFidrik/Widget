import { Location, Weather, Coordinates } from '../../type';

export const requestURL = `https://api.openweathermap.org/data/2.5/weather?appid=c6ec416eeecda5131e358a8af1c11b1e`;

export async function searchLocation(city: string): Promise<Location | undefined> {
    const result = await fetch(requestURL + `&q=${city}`);
  
    if (result.status === 404) return undefined;
    if (result.status !== 200) throw new Error('Failed to read location data.');
  
    return await result.json();
}

export async function readWeather(locationId: number): Promise<Weather> {
    const current = await fetch(requestURL + `&id=${locationId}&units=metric`);
  
    if (current.status !== 200) throw new Error('Failed to read location data.');
  
    return await current.json();
}

export async function readForecast(locationId: number): Promise<Weather[]> {
    const forecast = await fetch(`https://api.openweathermap.org/data/2.5//forecast?id=${locationId}&units=metric&cnt=5&appid=c6ec416eeecda5131e358a8af1c11b1e`);
  
    if (forecast.status !== 200) throw new Error('Failed to read location data');
  
    return (await forecast.json()).list;
}

export async function readGeolocation(latitude: number, longitude:number): Promise<Coordinates[]> {
    const geolocation = await fetch(`https://api.openweathermap.org/data/2.5//forecast?lat=${latitude}&lon=${longitude}&cnt=5&appid=c6ec416eeecda5131e358a8af1c11b1e`);
  
    if (geolocation.status !== 200) throw new Error('Failed to read location data.');
  
    return await geolocation.json();
}

export function getIconUrl(code: string): string {
    return `http://openweathermap.org/img/wn/${code}.png`;
}