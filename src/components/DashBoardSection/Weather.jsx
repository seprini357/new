import React from "react";
import useWeather from '../../hooks/useWeather';
import "./Weather.css";

const CITY = "Gyeongsan";

const Weather = () => {
  const { weather } = useWeather(CITY);

  const temp = weather?.main?.temp != null ? `${Math.round(weather.main.temp)}°C` : "-";
  const tempMin = weather?.main?.temp_min != null ? `${Math.round(weather.main.temp_min)}°C` : "-";
  const tempMax = weather?.main?.temp_max != null ? `${Math.round(weather.main.temp_max)}°C` : "-";
  const humidity = weather?.main?.humidity != null ? `${weather.main.humidity}%` : "-";
  const pressure = weather?.main?.pressure != null ? `${weather.main.pressure} hPa` : "-";

  const windSpeed = weather?.wind?.speed != null ? `${weather.wind.speed} m/s` : "-";
  const windDir = weather?.wind?.deg != null ? `${weather.wind.deg}°` : "-";

  const cloudiness = weather?.clouds?.all != null ? `${weather.clouds.all}%` : "-";
  const sunrise = weather?.sys?.sunrise ? new Date(weather.sys.sunrise * 1000).toLocaleTimeString() : "-";
  const sunset = weather?.sys?.sunset ? new Date(weather.sys.sunset * 1000).toLocaleTimeString() : "-";

  const description = weather?.weather?.[0]?.description ?? "-";
  const iconCode = weather?.weather?.[0]?.icon;
  const iconUrl = iconCode ? `https://openweathermap.org/img/wn/${iconCode}@2x.png` : "";

  return (
    <div className="weather">
      <div className="overlap-5">
        <div className="overlap-6">
          <div className="weather-topic">날씨 정보</div>
          <div className="weather-info">
            <div className="city-temp-row">
              <span className="city-name">{CITY}</span>
              <span className="temperature">{temp}</span>
            </div>
            {iconUrl && <img src={iconUrl} alt={description} />}
            <div>설명: {description}</div>
            <div>최고 기온: {tempMax}</div>
            <div>최저 기온: {tempMin}</div>
            <div>습도: {humidity}</div>
            <div>풍속: {windSpeed}</div>
            <div>풍향: {windDir}</div>
            <div>기압: {pressure}</div>
            <div>구름량: {cloudiness}</div>
            <div>일출: {sunrise}</div>
            <div>일몰: {sunset}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;





/*import React from "react";
import useWeather from '../../hooks/useWeather';
import "./Weather.css";

const CITY = "Gyeongsan"; 

const Weather = () => {
  const { weather } = useWeather(CITY);
  const temp = weather && weather.main ? `${Math.round(weather.main.temp)}°C` : "-";
  const wind = weather && weather.wind ? `${weather.wind.speed} m/s` : "-";

  return (
    <div className="weather">
    <div className="overlap-5">
      <div className="overlap-6">
        <div className="weather-topic">현재기온</div>
        <div className="weather-info">
            <div className="city-temp-row">
              <span className="city-name">{CITY}</span>
              <span className="temperature">{temp}</span>
            </div>
            <span className="wind-speed-inline">풍속: {wind}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;*/