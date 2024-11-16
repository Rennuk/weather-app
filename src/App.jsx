import { useState } from 'react';

import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import Results from './Components/Results/Results';
import Footer from './Components/Footer/Footer';

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

// new icons
import { IoSunnyOutline } from 'react-icons/io5';
import { IoMoonOutline } from 'react-icons/io5';
import { IoIosCloudOutline } from 'react-icons/io';
import { BsCloudSun } from 'react-icons/bs';
import { BsCloudMoon } from 'react-icons/bs';

const API_KEY = import.meta.env.VITE_APP_ID;

const App = () => {
  const [weatherData, setWeatherData] = useState('');
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const allIcons = {
    '01d': <IoSunnyOutline />,
    '01n': <IoMoonOutline />,
    '02d': <BsCloudSun />,
    '02n': <BsCloudMoon />,
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

  const fetchData = async (inputValue) => {
    setLoading(true);
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=${API_KEY}`;
      const response = await fetch(url);
      const result = await response.json();
      const icon = allIcons[result.weather[0].icon] || 'Clear';

      setWeatherData({
        humidity: result.main.humidity,
        windSpeed: result.wind.speed,
        temperature: Math.floor(result.main.temp),
        location: result.name,
        icon: icon,
        description: result.weather[0].description,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
    setInputValue('');
  };

  return (
    <div className="app flex flex-col md:flex-row flex-wrap h-full max-w-screen-lg">
      <div className=" md:flex-1">
        <Header />
        <Search onButtonClick={fetchData} />
      </div>
      <div className="mb-4 md:flex-1 md:ml-10 lg:ml-20">
        <Results loading={loading} weatherData={weatherData} />
        {/* <Weather /> */}
      </div>
      <div className="flex w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default App;
