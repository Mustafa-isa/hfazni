import React, { useState } from "react";
import Swal from "sweetalert2";
import client from "../../../api/client";
import {
  FaLocationArrow,
  FaCloud,
  FaTemperatureHigh,
  FaTint,
  FaWind,
  FaCalendarAlt,
} from "react-icons/fa";

// Helper function to format the date in Arabic
const getArabicDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("ar-EG", options);
};

const WeatherComponent: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>("");

  const getCurrentDate = () => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Intl.DateTimeFormat("ar-EG", options).format(date);
  };

  const currentDate = getCurrentDate();
  // Fetch weather data using Axios
  const fetchWeatherData = async (lat: number, lon: number) => {
    try {
      setLoading(true);
      const response = await client.get(`/api/Weather?lat=${lat}&lon=${lon}`);
      setWeatherData(response.data.data);
      setStatusMessage(response.data.message);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching weather data: ", error);
      setLoading(false);
    }
  };

  // Handle button click to request location
  const handleGetLocation = () => {
    Swal.fire({
      title: "هل تسمح لنا بالوصول إلى موقعك؟",
      text: "نحتاج إلى موقعك لعرض الطقس.",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "السماح",
      cancelButtonText: "رفض",
    }).then((result) => {
      if (result.isConfirmed) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              localStorage.setItem("latitude", latitude.toString());
              localStorage.setItem("longitude", longitude.toString());
              await fetchWeatherData(latitude, longitude);
            },
            (error) => {
              console.error("Error getting location: ", error);
              setLoading(false);
            }
          );
        } else {
          Swal.fire({
            title: "الموقع غير مدعوم",
            text: "متصفحك لا يدعم الموقع الجغرافي.",
            icon: "error",
          });
        }
      } else {
        Swal.fire({
          title: "تم رفض الإذن",
          text: "يجب عليك السماح بالوصول إلى الموقع للحصول على الطقس.",
          icon: "error",
        });
      }
    });
  };

  // Loading state
  if (loading) {
    return (
      <div
        className="flex justify-center items-center min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1530908295418-4c6c9f6c5d23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')`,
        }}
      >
        <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
          <div className="loader animate-spin mx-auto mb-4 w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
          <p className="text-gray-800 font-semibold">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  // Initial state without weather data
  if (!weatherData) {
    // Get the current date in Arabic format

    return (
      <div
        className="flex justify-center flex-wrap gap-12 my-8 items-center p-4 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1530908295418-4c6c9f6c5d23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')`,
        }}
      >
        <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-full max-w-md">
          <button
            onClick={handleGetLocation}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center gap-3 w-full"
          >
            <FaLocationArrow size={20} />
            الحصول على الطقس
          </button>
        </div>

        {/* Date Card */}
        <div className="bg-[rgba(23,23,23,1)] p-4 rounded-xl mt-4 text-white w-full max-w-md">
          <div className="flex items-center justify-between gap-3 mb-3">
            <span className="font-semibold text-lg">التاريخ الحالي</span>
            <FaCalendarAlt size={24} />
          </div>
          <p className="text-xl font-bold text-right">{currentDate}</p>{" "}
        </div>
      </div>
    );
  }

  // Weather data display
  return (
    <div className="flex justify-center flex-wrap  items-center gap-8 my-12 p-6">
      <div
        style={{
          background: "linear-gradient(180deg, #000000 0%, #666666 100%)",
        }}
        className="backdrop-blur-md relative shadow-2xl rounded-2xl p-4 "
      >
        {/* Weather information cards in a row */}
        <div className="flex flex-wrap items-center justify-center gap-6 p-5">
          <div className="flex items-center justify-between bg-blue-100/50 p-6 rounded-lg transition-all hover:shadow-lg transform hover:scale-105">
            <div className="flex items-center gap-3">
              <FaCloud className="text-blue-500" size={28} />
              <span className="font-semibold text-lg">الطقس</span>
            </div>
            <span className="text-md font-medium text-right">
              {weatherData.description}
            </span>
          </div>

          <div className="flex absolute top-[-3rem] right-0 justify-center mt-6">
            <img
              alt="Weather icon"
              className="h-16 w-16 object-contain"
              src={weatherData.iconUrl}
            />
          </div>

          <div className="flex items-center gap-6 justify-between bg-red-100/50 p-6 rounded-lg transition-all hover:shadow-lg transform hover:scale-105">
            <div className="flex items-center gap-3">
              <FaTemperatureHigh className="text-red-500" size={28} />
              <span className="font-semibold text-lg">درجة الحرارة</span>
            </div>
            <span className="text-md font-medium text-right">
              {weatherData.temperature}°C
            </span>
          </div>

          <div className="flex items-center gap-6 justify-between bg-green-100/50 p-6 rounded-lg transition-all hover:shadow-lg transform hover:scale-105">
            <div className="flex items-center gap-3">
              <FaTint className="text-green-500" size={28} />
              <span className="font-semibold text-lg">الرطوبة</span>
            </div>
            <span className="text-md font-medium text-right">
              {weatherData.humidity}%
            </span>
          </div>

          <div className="flex gap-6 items-center justify-between bg-purple-100/50 p-6 rounded-lg transition-all hover:shadow-lg transform hover:scale-105">
            <div className="flex items-center gap-3">
              <FaWind className="text-purple-500" size={28} />
              <span className="font-semibold text-lg">الضغط الجوي</span>
            </div>
            <span className="text-md font-medium text-right">
              {weatherData.windSpeed} m/s
            </span>
          </div>
        </div>

        {/* Weather icon */}
      </div>

      <div className="bg-[rgba(23,23,23,1)] p-6 rounded-xl text-white w-full max-w-md transition-all hover:shadow-lg transform hover:scale-105">
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="font-semibold text-lg">التاريخ الحالي</span>
          <FaCalendarAlt size={24} />
        </div>

        {/* Display both English and Arabic Date */}
        <div className="text-right">
          <p className="text-xl font-bold">{currentDate}</p>
          <p className="text-md font-light mt-2">
            {new Date().toLocaleDateString("ar-EG", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherComponent;
