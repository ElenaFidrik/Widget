export interface Coordinates {
    lon: number;
    lat: number;
}

export interface Location {
    coord: Coordinates;
    id: number;
    name: string;
}

export interface LocationTableProps {
    locations: Location[];
    onSelect: (location: Location) => void;
}

export interface SearchStringProps {
    onSearch: (search: string) => void;
    locations: Location[];
    onSelect: (location: Location) => void;
}

export interface WeatherConditions {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface MainWeatherData {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

export interface WeatherWind {
    speed: number;
}

export interface WeatherSys {
    sunrise: number;
    sunset: number;
}

export interface Weather {
    weather: WeatherConditions[];
    main: MainWeatherData;
    wind: WeatherWind;
    sys: WeatherSys;
    dt: number;
    day: string;
}