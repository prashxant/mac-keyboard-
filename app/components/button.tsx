
import React from "react";

const macFirstRowKeys = [
  { key: '`', shift: '~' },
  { key: '1', shift: '!' },
  { key: '2', shift: '@' },
  { key: '3', shift: '#' },
  { key: '4', shift: '$' },
  { key: '5', shift: '%' },
  { key: '6', shift: '^' },
  { key: '7', shift: '&' },
  { key: '8', shift: '*' },
  { key: '9', shift: '(' },
  { key: '0', shift: ')' },
  { key: '-', shift: '_' },
  { key: '=', shift: '+' }
];

export const Button = () => {
  return (
    <div className="">
      {macFirstRowKeys.map(({ key, shift }, index) => (
        <button
          key={index}
          className="bg-[#0A090D] m-1 w-18 h-18 hover:scale-100 rounded-2xl text-white"
        >
          <span className="text-sky-600 text-xs">{shift}</span>
          <span className="text-sky-600 text-base">{key}</span>
        </button>
      ))}
    </div>
  );
};


