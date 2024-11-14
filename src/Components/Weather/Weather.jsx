import { useState } from 'react';

import { IoSearch } from 'react-icons/io5';
import { FaRegSun } from 'react-icons/fa6';
import { LuMoon } from 'react-icons/lu';
import { LuCloudSun } from 'react-icons/lu';
import { LuCloudMoon } from 'react-icons/lu';
import { MdOutlineCloudQueue } from 'react-icons/md';
import { FaCloudMoon } from 'react-icons/fa6';
import { BsClouds } from 'react-icons/bs';
import { IoRainyOutline } from 'react-icons/io5';
import { LiaCloudSunRainSolid } from 'react-icons/lia';
import { LiaCloudMoonRainSolid } from 'react-icons/lia';
import { IoIosThunderstorm } from 'react-icons/io';
import { BsSnow } from 'react-icons/bs';
import { RiMistFill } from 'react-icons/ri';
import { FaWind } from 'react-icons/fa6';
import { WiHumidity } from 'react-icons/wi';

const API_KEY = import.meta.env.VITE_APP_ID;

const Weather = () => {
  const [weatherData, setWeatherData] = useState('');
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const allIcons = {
    '01d': <FaRegSun />,
    '01n': <LuMoon />,
    '02d': <LuCloudSun />,
    '02n': <LuCloudMoon />,
    '03d': <MdOutlineCloudQueue />,
    '03n': <FaCloudMoon />,
    '04d': <BsClouds />,
    '04n': <BsClouds />,
    '09d': <IoRainyOutline />,
    '09n': <IoRainyOutline />,
    '10d': <LiaCloudSunRainSolid />,
    '10n': <LiaCloudMoonRainSolid />,
    '11d': <IoIosThunderstorm />,
    '11n': <IoIosThunderstorm />,
    '13d': <BsSnow />,
    '13n': <BsSnow />,
    '50d': <RiMistFill />,
    '50n': <RiMistFill />,
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=${API_KEY}`;
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      const icon = allIcons[result.weather[0].icon] || 'Clear';

      setWeatherData({
        humidity: result.main.humidity,
        windSpeed: result.wind.speed,
        temperature: Math.floor(result.main.temp),
        location: result.name,
        icon: icon,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
    setInputValue('');
  };

  return (
    <div className="flex h-full justify-center">
      <div className="bg-indigo-300 shadow-md text-slate-800 font-medium h-full w-full p-4 md:p-10 rounded max-w-screen-sm">
        {weatherData ? null : (
          <p className="text-lg text-center font-medium mb-5">
            Please enter location
          </p>
        )}
        <div className="w-full flex items-center">
          <input
            type="text"
            className="text-slate-900 bg-zinc-200 shadow-sm border-solid w-full p-4 rounded-full bg-"
            placeholder="city.."
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button
            className=" rounded-full bg-slate-800 text-zinc-200 flex items-center justify-center ml-3 w-14 h-12 bg-"
            onClick={fetchData}
          >
            <IoSearch />
          </button>
        </div>
        {loading ? (
          <p className="text-lg text-center font-medium mt-5">Loading...</p>
        ) : (
          <div>
            {weatherData ? (
              <>
                <div className="flex flex-col items-center md:flex-row justify-evenly my-14">
                  <div className=" text-9xl">{weatherData.icon}</div>
                  <div className="mt-10 md:mt-0 flex flex-col items-center">
                    <p className="text-6xl">{weatherData.temperature}</p>
                    <p className="text-5xl font-semibold">
                      {weatherData.location}
                    </p>
                  </div>
                </div>

                <div className="flex flex-row justify-between mt-5">
                  <div className=" flex items-center flex-col">
                    <div className="flex flex-row items-center">
                      <span className="text-5xl">
                        {weatherData ? <WiHumidity /> : null}
                      </span>
                      <span className="text-4xl">{weatherData.humidity}</span>
                    </div>
                    <p className="text-3xl">Humidity</p>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex flex-row items-center">
                      <span className="text-5xl">
                        {weatherData ? <FaWind /> : null}
                      </span>
                      <span className=" ml-2 text-4xl">
                        {weatherData.windSpeed}
                      </span>
                    </div>
                    <p className="text-3xl">Wind Speed</p>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
