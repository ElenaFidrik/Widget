import style from './style.module.css';

export const BtnGeolocation = () => {
    
    return (
        <div>
            <button className={style.btnGeolocation} onClick={() => {
                if (navigator.geolocation) {
                    
                    navigator.geolocation.watchPosition(async position => {
                        const { latitude, longitude } = position.coords;
                        const geolocation = await fetch(`https://api.openweathermap.org/data/2.5//forecast?lat=${latitude}&lon=${longitude}&cnt=5&appid=c6ec416eeecda5131e358a8af1c11b1e`);
    
                        if (geolocation.status !== 200) throw new Error('Failed to read location data.');
    
                        return await geolocation.json();
                    })   
                    
                } else {
                    alert('Geolocation is not supported by this browser.');
                }
                }}>
            </button>
        </div>
    )
}