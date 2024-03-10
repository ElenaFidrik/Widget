import React, {FC, useEffect, useState} from "react";
import {WeatherToday} from "../WeatherToday/WeatherToday";
import { readWeather, readForecast } from "../Services/OpenWeatherMap";
import { Location, Weather } from '../../type';
import style from './style.module.css';
import { WeatherNextDay } from "../WeatherNextDay/WeatherNextDay";

export interface WeatherInterface {
  location: Location | null;
}

export const WeatherWeek: FC<WeatherInterface> = ({location}) => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [forecast, setForecast] = useState<Weather[] | null>(null);

  useEffect(() => {
    (async function () {
      if (location) {
        const [weather, forecast] = await Promise.all([
          readWeather(location.id),
          readForecast(location.id), 
        ]);
        setWeather(weather);
        setForecast(forecast);
      }
    })()
  }, [location]);

  if (!location || !weather || !forecast) return null;

  return (
    <div className={style.WeatherWeek}>
      
      <WeatherToday weather={weather} 
                    location={location}/>

      <div className={style.ForecastContainer}>
          {forecast.map((data) =>
            <div className={style.ForecastBlock} key={data.dt}>
              <WeatherNextDay weather={data}
                              day={data.day}/>

            </div>
          )}
      </div>
    </div>
  );
};