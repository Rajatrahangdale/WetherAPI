const weatherAPI = async () => {
  const URL = `https://yahoo-weather5.p.rapidapi.com/weather?${place}&u=c`;
  const OPTIONS = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "487614555bmsh9eb2f8ff338c965p1c1f91jsn0bbc7ac6b833",
      "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(URL, OPTIONS);
    const result = await response.text();
    console.log(result);
    setWeatherData(result);
    setWeatherData(apiData);
    console.log(weatherData.forecasts);
    setIsLoading(false);
  } catch (error) {
    console.error("issue", error);
  }
};

 const apiData = {
    location: {
      city: "Nagpur",
      woeid: 29220698,
      country: "India",
      lat: 21.1269,
      long: 79.076851,
      timezone_id: "Asia/Kolkata",
    },
    current_observation: {
      pubDate: 1727902405,
      wind: {
        chill: 86,
        direction: "NW",
        speed: 2,
      },
      atmosphere: {
        humidity: 86,
        visibility: 6.03,
        pressure: 1008.1,
      },
      astronomy: {
        sunrise: "6:05 AM",
        sunset: "5:59 PM",
      },
      condition: {
        temperature: 78,
        text: "Cloudy",
        code: 26,
      },
    },
    forecasts: [
      {
        day: "Thu",
        date: 1727884800,
        high: 95,
        low: 76,
        text: "Partly Cloudy",
        code: 30,
      },
      {
        day: "Fri",
        date: 1727971200,
        high: 95,
        low: 74,
        text: "Mostly Sunny",
        code: 34,
      },
      {
        day: "Sat",
        date: 1728057600,
        high: 93,
        low: 72,
        text: "Scattered Showers",
        code: 45,
      },
      {
        day: "Sun",
        date: 1728144000,
        high: 92,
        low: 72,
        text: "Partly Cloudy",
        code: 30,
      },
      {
        day: "Mon",
        date: 1728230400,
        high: 94,
        low: 73,
        text: "Sunny",
        code: 32,
      },
      {
        day: "Tue",
        date: 1728316800,
        high: 95,
        low: 74,
        text: "Mostly Sunny",
        code: 34,
      },
      {
        day: "Wed",
        date: 1728403200,
        high: 88,
        low: 74,
        text: "Mostly Cloudy",
        code: 28,
      },
      {
        day: "Thu",
        date: 1728489600,
        high: 87,
        low: 73,
        text: "Showers",
        code: 11,
      },
      {
        day: "Fri",
        date: 1728576000,
        high: 87,
        low: 74,
        text: "Partly Cloudy",
        code: 30,
      },
      {
        day: "Sat",
        date: 1728662400,
        high: 91,
        low: 73,
        text: "Mostly Cloudy",
        code: 28,
      },
      {
        day: "Sun",
        date: 1728748800,
        high: 92,
        low: 72,
        text: "Partly Cloudy",
        code: 30,
      },
    ],
  };


      // if (response.ok) {
    //   setWeatherData(data);
    //   setWeatherInDay(weatherData.forecasts.forecastday);
    //   setIsLoading(false);
    //   // console.log(weatherData);
    // }

        setTimeout(() => {
      // console.log(weatherData);
      // console.log(weatherData);
      // console.log(weatherInDay);
    }, 3000); // Fetch data after 3 seconds