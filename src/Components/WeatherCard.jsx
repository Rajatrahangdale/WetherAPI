/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import cloud from "../assets/icons/cloud.png";
import fog from "../assets/icons/fog.png";
import rain from "../assets/icons/rain.png";
import snow from "../assets/icons/snow.png";
import storm from "../assets/icons/storm.png";
import sun from "../assets/icons/sun.png";
import windy from "../assets/icons/windy.png";
const IconCard = ({ location, teprature, atmosphere }) => {
  const [Icon, setIcon] = useState();
  const weather = atmosphere;
  useEffect(() => {
    if (weather) {
      if (weather.toLowerCase().includes("cloud")) {
        setIcon(cloud);
      } else if (weather.toLowerCase().includes("shower")) {
        setIcon(rain);
      } else if (weather.toLowerCase().includes("rain")) {
        setIcon(rain);
      } else if (weather.toLowerCase().includes("sun")) {
        setIcon(sun);
      } else if (weather.toLowerCase().includes("thunder")) {
        setIcon(storm);
      } else if (weather.toLowerCase().includes("fog")) {
        setIcon(fog);
      } else if (weather.toLowerCase().includes("mist")) {
        setIcon(fog);
      } else if (weather.toLowerCase().includes("snow")) {
        setIcon(snow);
      } else if (weather.toLowerCase().includes("wind")) {
        setIcon(windy);
      }
    } else {
      setIcon(sun);
    }
  }, [weather]);

  function getCurrentFormattedDate() {
    const date = new Date();

    // Array of days and months for conversion
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const monthsOfYear = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "August",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Get day, date, month, and year
    const day = daysOfWeek[date.getDay()];
    const month = monthsOfYear[date.getMonth()];
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();

    // Get hours and minutes
    let hours = date.getHours();
    const minutes = date.getMinutes();

    // Determine AM or PM
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Format minutes to always show two digits
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    // Return formatted date and time
    return `${day}, ${dayOfMonth} ${month} ${year} ${hours}:${formattedMinutes} ${ampm}`;
  }

  return (
    <div className="glassCard p-10 flex flex-col items- gap-4">
      <div className="flex items-center justify-start gap-5">
        <div>
          <img src={Icon} alt="" />
          <p className="text-center text-sm -ml-4">{weather}</p>
        </div>
        <h2 className="text-4xl font-bold">
          {teprature.temp_c ? teprature.temp_c : "00.00"} °C
        </h2>
      </div>
      <p className="text-center text-lg font-semibold">
        {location.name.length > 8
          ? location.name.slice(0, 6) + "..."
          : location.name}
        ,
        {location.region.length > 11
          ? location.region.slice(0, 10) + "..."
          : location.region}
        ,
        {location.country.length > 8
          ? location.country.slice(0, 10) + "..."
          : location.country}
      </p>
      <div className="text-center">
        <span>{getCurrentFormattedDate()}</span>
      </div>
      <div className="flex justify-around items-center gap-3">
        <div className="px-4 py-1 rounded-lg bg-blue-600 flex flex-col items-center">
          <span className="text-sm font-semibold">Wind Speed</span>
          <span className="text-xs">{teprature.wind_kph} km/h</span>
        </div>
        <div className="px-4 py-2 rounded-lg bg-green-600 flex flex-col items-center">
          <span className="text-sm font-semibold">Humidity</span>
          <span className="text-xs">{teprature.humidity}%</span>
        </div>
      </div>
      <div className="flex justify-between">
        <h3>Heat Index</h3>
        <span>{teprature.heatindex_c}</span>
      </div>
      <hr className=" w-full" />
      <h4 className="text-center text-2xl ">
        {teprature.condition.text} Overcast
      </h4>
    </div>
  );
};

export default IconCard;
