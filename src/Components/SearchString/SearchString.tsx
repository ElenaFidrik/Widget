import React, {ChangeEvent, FC, useState} from "react";
import { SearchStringProps } from "../../type";
import style from './style.module.css';
import { BtnGeolocation } from "../Geolocation/BtnGeolocation";

export const SearchString: FC<SearchStringProps> = ({onSearch , locations, onSelect}) => {
    const [inputValue, setInputValue] = useState('');
    const [nameLocation, setNameLocation] = useState<string | null>(null);

    const handlerChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        if (nameLocation) {
            setNameLocation(null)
        }
        setInputValue(event.target.value)
    }

    const addLocation = () => {
        onSearch(inputValue);
        setInputValue('');
    };

    const handlerKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {

        const { key } = event;
        if (key === 'Enter') {
            onSearch(inputValue);
            setInputValue('');
        }
    }

    return (
        <div className={style.InputSearchContainer}>
            <div className={style.InputSearchString}>
                <input className={style.InputSearch} type="text" value={inputValue} placeholder="Search city..."
                    onKeyDown={handlerKeyPress}
                    onChange={handlerChangeInput}>    
                </input>
                <BtnGeolocation />
            </div>
            <h3 className={style.Title}>My Cities</h3>
            <div className={style.FavoriteCities}>
                
                {locations.map(location =>
                    <div key={location.name} onClick={() => onSelect(location)}>
                        <div className={style.CityName}>{location.name}</div>
                    </div>
                )}
            </div>
        </div>
    );
}