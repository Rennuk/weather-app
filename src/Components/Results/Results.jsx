import React from 'react';

import { FaWind } from 'react-icons/fa6';
import { WiHumidity } from 'react-icons/wi';
import Loading from '../Loading/Loading';

const Results = ({ weatherData, loading }) => {
  console.log(loading);
  return (
    <>
      {loading && <Loading />}
      {weatherData ? (
        <main className="bg-indigo-200 text-indigo-950 p-4 rounded-lg">
          <div className="flex flex-row mb-10">
            <div className="flex-1 text-9xl flex justify-center items-center">
              {weatherData.icon}
            </div>
            <div className="mx-4 flex-1 flex flex-col items-center justify-center">
              <span className="text-5xl mb-4 items-center">
                {weatherData.location}
              </span>
              <span className="text-5xl">{weatherData.temperature}</span>
            </div>
          </div>

          <div className=" text-xl">
            <div>
              <p className="mb-5">{weatherData.description}</p>
            </div>
            <div className="flex items-center">
              {weatherData ? (
                <span className="text-5xl w-14 h-14 flex items-center justify-center">
                  <WiHumidity />
                </span>
              ) : null}

              <div className="ml-4 flex flex-row items-baseline ">
                <span className="">{weatherData.humidity}</span>
                <p className="ml-2 ">Humidity</p>
              </div>
            </div>
            <div className="flex items-center">
              {weatherData ? (
                <span className="text-4xl w-14 h-14 flex items-center justify-center">
                  <FaWind />
                </span>
              ) : null}
              <div className="ml-4 flex flex-row items-baseline ">
                <span className="">{weatherData.windSpeed}</span>
                <p className="ml-2 ">Wind speed</p>
              </div>
            </div>
          </div>
        </main>
      ) : null}
    </>
  );
};

export default Results;
