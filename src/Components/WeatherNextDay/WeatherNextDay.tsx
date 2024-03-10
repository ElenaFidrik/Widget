import React, { FC } from 'react';
import style from './style.module.css';
import { Weather } from '../../type';
import { getIconUrl } from '../Services/OpenWeatherMap';

interface WeatherNextDayProps {
    weather: Weather;
    day:string;
}

const WEEK_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const WeatherNextDay: FC<WeatherNextDayProps> = ({weather, day}) => {

    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    return (

          <div className={style.weather_main}>
            <h6>{day}</h6>
            <div className={style.weather_temp}>{Math.round(weather.main.temp)}°C</div>
            {weather.weather.map(condition =>
              <div className={style.weather_icon} key={condition.id}>
                <img src={getIconUrl(condition.icon)} alt={condition.main}/> {condition.main}
              </div>)
            }
          </div>
    );
}