/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import Background from "../Components/Background";
import MiniCard from "../Components/MiniCard";
import WeatherCard from "../Components/WeatherCard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import tempdata from "./data.json";
const Home = () => {
  const navigate = useNavigate();
  const [place, setPlace] = useState("Nagpur");
  const [input, setInput] = useState("");
  const [weatherData, setWeatherData] = useState();
  const [weatherInDay, setWeatherInDay] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const weatherAPI = async () => {
      const url = `http://api.weatherapi.com/v1/forecast.json?key=cba1c3ab816a49faa4d223057240310&q=${place}&days=7`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data);
        console.log(weatherData);
        setWeatherInDay(data.forecast.forecastday);
        setIsLoading(false);
      } catch (error) {
        console.log("An error occurred", error);
      }
    };
    weatherAPI();
  }, [place]);

  const handleSearch = (event) => {
    setInput(event.target.value);
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      if (input.trim() === "") return;
      setPlace(input);
      setInput("");
    }
  };

  function getDayFromTimestamp(timestamp) {
    const date = new Date(timestamp * 1000);
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return daysOfWeek[date.getDay()];
  }

  return (
    <>
      {isLoading ? (
        <div
          className={`h-screen w-screen bg-slate-300 text-[60px] flex items-center justify-center from-indigo-400 to-blue-500`}
        >
          Loading....
        </div>
      ) : (
        <>
          <Background atmosphere={weatherInDay[0].day.condition.text} />
          <div className="mx-10 h-screen">
            <div>
              <nav className="flex justify-between py-5">
                <h2 className="text-4xl font-bold font-serif stroke-emerald-600 text-[#FFD700]">
                  Weather App
                </h2>

                <input
                  className="glassCard w-[600px] px-4 py-6 items-center h-8"
                  type="text"
                  onKeyUp={handleEnter}
                  onChange={handleSearch}
                  placeholder="Search City"
                  value={input}
                />

                <button
                  onClick={() => navigate("/login")}
                  className="text-2xl font-bold text-red-300"
                >
                  Logout
                </button>
              </nav>
            </div>
            {weatherData.error ? (
              <div className="h-[80vh] w-full flex items-center justify-center">
                <h1 className="text-[60px] font-serif font-semibold">
                  {weatherData.error.message}..
                </h1>
              </div>
            ) : (
              <div className="flex items-center justify-center h-[80%] my-auto">
                <div className="h-2/3 w-1/3 flex items-center justify-center">
                  <WeatherCard
                    location={weatherData.location}
                    teprature={weatherData.current}
                    atmosphere={weatherInDay[0].day.condition.text}
                  />
                </div>
                <div className="w-[44%] flex items-center justify-center bg- h-2/3 flex-wrap gap-5">
                  {weatherInDay &&
                    weatherInDay.map((item, index) => {
                      const futureDay = getDayFromTimestamp(item.date_epoch);
                      return (
                        index > 0 && (
                          <MiniCard
                            key={index}
                            day={futureDay}
                            temperature={item.day.avgtemp_c}
                            weather={item.day.condition.text}
                          />
                        )
                      );
                    })}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
