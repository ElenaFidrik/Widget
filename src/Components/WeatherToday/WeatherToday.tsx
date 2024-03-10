import React, { FC } from 'react';
import { Weather, Location } from '../../type';
import style from './style.module.css';
import { getIconUrl } from '../Services/OpenWeatherMap';

export interface WeatherProps {
  weather: Weather;
  location: Location;
}

export const WeatherToday: FC<WeatherProps> = ({weather, location}) => {

    return (
        <div>
          <div className={style.weather_main}>
            <h2 className={style.weather_location}>
            
              {location.name}
            </h2>
            <div className={style.weather_temp}>{Math.round(weather.main.temp)}°C</div>
            {weather.weather.map(condition =>
              <div className={style.weather_icon} key={condition.id}>
                <img src={getIconUrl(condition.icon)} alt={condition.main}/> {condition.main}
              </div>)
            }
          </div>
          <div className={style.weather_param_wrap}>
            <div className={style.weather_param}> <span>Pressure:</span> {weather.main.pressure} hPa</div>
            <div className={style.weather_param}> <span>Humidity:</span> {weather.main.humidity}%</div>
            <div className={style.weather_param}> <span>Wind speed:</span> {weather.wind.speed} m/s</div>
            <div className={style.weather_param}>
              <div> <span>Sunrise:</span> {weather.sys.sunrise} UTC</div>
              <div> <span>Sunset:</span> {weather.sys.sunset} UTC</div>
            </div>
          </div>
        </div>
    );
}