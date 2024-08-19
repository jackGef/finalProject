import React, { useEffect, useState } from 'react'

const Weather = (props) => {


    const [weatherData, setWeatherData] = useState(null);

    const apiKey = "b7ef7ac604e49b946d8d02619672318e";
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.place}&appid=${apiKey}&units=metric`;

    useEffect(() => {
     
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                setWeatherData(data);
            })
            .catch(error => {
         
            });
    }, [apiUrl]);

  return (
    <>
    {weatherData && (
        <div className='text-center'>
            <p>Temperature: {weatherData.main.temp} °C</p>
            
            
        </div>
    )}
    </>
  )
}

export default Weather