/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import cloud from "../assets/icons/cloud.png";
import fog from "../assets/icons/fog.png";
import rain from "../assets/icons/rain.png";
import snow from "../assets/icons/snow.png";
import storm from "../assets/icons/storm.png";
import sun from "../assets/icons/sun.png";
import wind from "../assets/icons/windy.png";
const MiniCard = ({ day, temperature, weather }) => {
const [Icon, setIcon]=useState();
   useEffect(() => {
     if (weather) {
       if (weather.toLowerCase().includes("cloudy")) {
         setIcon(cloud);
       } else if (weather.toLowerCase().includes("showers")) {
         setIcon(rain);
       } else if (weather.toLowerCase().includes("thunder")) {
         setIcon(storm);
       } else if (weather.toLowerCase().includes("sunny")) {
         setIcon(sun);
       } else if (weather.toLowerCase().includes("rain")) {
         setIcon(rain);
       } else if (weather.toLowerCase().includes("fog")) {
         setIcon(fog);
       } else if (weather.toLowerCase().includes("snow")) {
         setIcon(snow);
       } else if (weather.toLowerCase().includes("wind")) {
         setIcon(wind);
       }
     }else{
      setIcon(wind);
     }
   }, [weather]);

  return (
    <div className="glassCard flex flex-col items-center justify-center px-6 py-3">
      <h3 className="mb-2">{day}</h3>
      <hr className="w-full" />
      <div>
        <img src={Icon} className="scale-75" alt="" />
        <p className="text-xs text-center mb-2">{weather}</p>
      </div>
      <p>{temperature} °C</p>
    </div>
  );
};

export default MiniCard;
