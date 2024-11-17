import React from 'react';

const Error = ({ message }) => {
  return (
    <div className=" bg-red-200 text-indigo-950 font-medium p-4 rounded-lg">
      {message}
    </div>
  );
};

export default Error;
