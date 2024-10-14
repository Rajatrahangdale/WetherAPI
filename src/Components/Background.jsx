/* eslint-disable react/prop-types */
import Clear from "../assets/images/Clear.jpg";
import Cloudy from "../assets/images/Cloudy.jpg";
import Fog from "../assets/images/fog.png";
import Rainy from "../assets/images/Rainy.jpg";
import Stormy from "../assets/images/stormy.jpg";
import Snow from "../assets/images/snow.jpg";
import sunny from "../assets/images/Sunny.jpg";
import { useEffect, useState } from "react";
const Background = ({ atmosphere }) => {
  const [gradiant, setGradiant] = useState();
  const [gradiantBg, setGradiantBg] = useState();

  useEffect(() => {
    if (atmosphere) {
      if (atmosphere.toLowerCase().includes("cloud")) {
        setGradiantBg("bg-gradient-to-r from-gray-300 to-gray-500");
      } else if (atmosphere.toLowerCase().includes("shower")) {
        setGradiantBg("bg-gradient-to-r from-blue-300 to-gray-400");
      } else if (atmosphere.toLowerCase().includes("rain")) {
        setGradiantBg("bg-gradient-to-r from-blue-600 to-blue-800");
      } else if (atmosphere.toLowerCase().includes("sun")) {
        setGradiantBg("bg-gradient-to-r from-yellow-300 to-yellow-500");
      } else if (atmosphere.toLowerCase().includes("thunder")) {
        setGradiantBg("bg-gradient-to-r from-gray-800 to-purple-600");
      } else if (atmosphere.toLowerCase().includes("fog")) {
        setGradiantBg("bg-gradient-to-r from-gray-200 to-gray-400");
      } else if (atmosphere.toLowerCase().includes("mist")) {
        setGradiantBg("bg-gradient-to-r from-blue-200 to-gray-300");
      } else if (atmosphere.toLowerCase().includes("snow")) {
        setGradiantBg("bg-gradient-to-r from-white to-blue-200");
      } else if (atmosphere.toLowerCase().includes("wind")) {
        setGradiantBg("bg-gradient-to-r from-green-300 to-blue-300");
      }
    } else {
      setGradiantBg("bg-gradient-to-r from-gray-800 to-gray-900");
    }
  }, [atmosphere]);

  useEffect(() => {
    if (atmosphere) {
      if (atmosphere.toLowerCase().includes("cloud")) {
        setGradiant(Cloudy);
      } else if (atmosphere.toLowerCase().includes("shower")) {
        setGradiant(Rainy);
      } else if (atmosphere.toLowerCase().includes("rain")) {
        setGradiant(Rainy);
      } else if (atmosphere.toLowerCase().includes("sun")) {
        setGradiant(sunny);
      } else if (atmosphere.toLowerCase().includes("thunder")) {
        setGradiant(Stormy);
      } else if (atmosphere.toLowerCase().includes("fog")) {
        setGradiant(Fog);
      } else if (atmosphere.toLowerCase().includes("mist")) {
        setGradiant(Fog);
      } else if (atmosphere.toLowerCase().includes("snow")) {
        setGradiant(Snow);
      } else if (atmosphere.toLowerCase().includes("wind")) {
        setGradiant(Clear);
      }
    } else {
      setGradiant(sunny);
    }
  }, [atmosphere]);

  return (
    <>
      {gradiant && atmosphere ? (
        <div className={`h-full w-full fixed top-0 left-0 -z-10 ${gradiantBg}`}>
          <img
            src={gradiant}
            className="h-full w-full fixed top-0 left-0 -z-10 overflow-hidden object-fill"
            alt=""
          />
        </div>
      ) : (
        <div
          className={`h-screen w-screen bg-slate-300 text-[60px] flex items-center justify-center`}
        >
          Loading....
        </div>
      )}
    </>
  );
};

export default Background;
