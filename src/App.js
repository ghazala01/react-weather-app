//Importing libraries
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
//Importing Components
import City from "./Components/City";
import Weather from "./Components/Weather";

//made library for icons
export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
};

/* Styled Components */
const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 20px 10px;
    align-items: center;
    border-radius: 4px;
    width: 380px;
    box-shadow: 0 3px 6px 0 #555;
    background: whitesmoke;
    font-family: Montserrat;
`;
const AppLabel = styled.span`
    color: #555;
    font-size: 24px;
    font-weight: 500;
`;

//Content to be rendered in browser
function App() {
  const [city, updateCity] = useState();
  // const [state, setState] = useState()
  const [weather, updateWeather] = useState();

  //fetching data from OpenWeatherMap API
  const fetchWeather = async(e) => {
    e.preventDefault();
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=a2865d01d36262648cbee1ac822dcec8`
    );
    updateWeather(response.data);
  };

  // conditional rendering inside it(if weather)
  return (
    <Container>
      <AppLabel>Weather App</AppLabel>
      {city && weather ? (
        <Weather weather={weather} city={city} />
      ) : (
        <City updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
