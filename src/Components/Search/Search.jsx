import React, { useState } from 'react';

import { IoSearch } from 'react-icons/io5';

const Search = ({ onButtonClick }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className=" bg-slate-400 relative mb-5 h-10 rounded-lg">
      <input
        type="text"
        className="text-slate-900 bg-zinc-50 w-full h-full rounded-lg drop-shadow-md p-4"
        placeholder="city.."
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button
        onClick={() => onButtonClick(inputValue)}
        className=" text-indigo-950 flex items-center justify-center absolute right-0 z-10 top-0 bg-indigo-400 h-full rounded-lg w-10 font-bold"
      >
        <IoSearch />
      </button>
    </div>
  );
};

export default Search;
