import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);

  let getWeather = async (lat, long) => {
    let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: lat,
        lon: long,
        appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
        lang: 'pt',
        units: 'metric'
      }
    });
    setWeather(res.data);
    console.log(res.data)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, []);

  if (location == false) {
    return <>Você precisa habilitar a localização no browser</>;
  } else if (weather == false){
    return <>Carregando...</>;
  } else {
    return (
      <>
        <h3>Tempo nas suas Coordenadas ({weather['weather'][0]['description']}) </h3>
        <hr />
        <ul>
          <li>Temperatura atual: {weather['main']['temp']} graus</li>
          <li>Temperatura máxima: {weather['main']['temp_max']} graus</li>
          <li>Temperatura minima: {weather['main']['temp_min']} graus</li>
          <li>Pressão: {weather['main']['pressure']} hpa</li>
          <li>Umidade: {weather['main']['humidity']} %</li>
        </ul>
      </>
    );
  }
}

export default App;
