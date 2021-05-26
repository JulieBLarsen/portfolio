import React from 'react';

function Button({ children }) {
  return (
    <a
      className="cursor-pointer transition mr-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 shadow leading-loose hover:bg-purple-500 hover:text-white hover:shadow-lg focus:outline-none active:bg-purple-700 active:shadow-none
">
      {children}
    </a>
  );
}

export default Button;
