import React from 'react';

function Highlight({ children }) {
  return (
    <>
      {' '}
      <span className=" text-purple-600 px-1 bg-purple-200">
        {children}
      </span>{' '}
    </>
  );
}

export default Highlight;
