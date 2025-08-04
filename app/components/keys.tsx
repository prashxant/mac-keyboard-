import React from 'react';

export const Keys = () => {
  const use1 = "w-20 h-14 flex items-center justify-center bg-gray-200 rounded text-sm font-medium hover:bg-gray-300 transition"
  const wKey = [
    { text: "esc", symbol: " ", size:use1},
    { text: "tab", symbol: " ", size: " " },
    { text: "caps", symbol: " ", size: " " },
    { text: "shift", symbol: " ", size: " " },
    { text: "ctrl", symbol: " ", size: " " },
    { text: "alt", symbol: " ", size: " " },
    { text: "cmd", symbol: " ", size: " " },
    { text: "space", symbol: " ", size: " " },
    { text: "enter", symbol: " ", size: " " },
    { text: "backspace", symbol: " ", size: " " },
    { text: "delete", symbol: " ", size: " " },
    { text: "fn", symbol: " ", size: " " },
    { text: "home", symbol: " ", size: " " },
    { text: "end", symbol: " ", size: " " }
  ];

  return (
    <div className="flex flex-wrap gap-2 p-4">
      {wKey.map((keyData, idx) => (
        <button
          key={idx}
          className={keyData.size}
        >
          {keyData.text}
        </button>
      ))}
    </div>
  );
};

