import React, { FC, useState } from 'react';
import './App.css';
import { Location } from './type';
import { ErrorAlert, WarningAlert } from "./Components/Notification/Notification";
import { searchLocation } from "./Components/Services/OpenWeatherMap";
import { SearchString } from "./Components/SearchString/SearchString";
import { WeatherWeek } from './Components/WeatherWeek/WeatherWeek';

const App: FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [error, setError] = useState('');
  const [warning, setWarning] = useState(''); 
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);
  
  const resetAlerts = () => {
    setError('');
    setWarning('');
  }

  let addLocation = async (city: string) => {
    resetAlerts();
    const location = await searchLocation(city);

    if (!location) {
      setError(`No location found called ${city}.`);
    } else if (locations.find(item => item.id === location.id)) {
      setWarning(`Location '${city}' is already in the list.`);
    } else {
      setLocations([location, ...locations]);
    }
  };

  return (
    <div className='container'>
      <SearchString onSearch={addLocation} 
                    locations={locations}
                    onSelect={location => setCurrentLocation(location)}/>
      <ErrorAlert message={error}/>
      <WarningAlert message={warning}/>

      <WeatherWeek location={currentLocation}/>

    </div>
  );
}

export default App;