import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [location, setLocation] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, []);

  if (location) {
    return (
      <>
        <h3>Clima nas suas Coordenadas</h3>
        <hr />
        <ul>
          <li>Temperatura atual: xº</li>
          <li>Temperatura máxima: xº</li>
          <li>Temperatura minima: xº</li>
          <li>Pressão: x hpa</li>
          <li>Umidade: x%</li>
        </ul>
      </>
    );
  } else {
    return <>Você precisa habilitar a localização no browser</>;
  }
}

export default App;
