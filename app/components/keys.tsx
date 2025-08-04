import React from 'react';

type KeyProps = {
  children?: React.ReactNode;
  width?: string;
  className?: string;
};

const Key = ({ children, width = "w-12", className = "" }: KeyProps) => (
  <div
    className={`h-12 ${width} bg-gray-900 border border-gray-700 rounded-md
    flex items-center justify-center text-white text-sm font-medium hover:bg-gray-800 transition-colors ${className}`}
  >
    {children}
  </div>
);

const DualSymbolKey = ({ top, bottom }: { top: string; bottom: string }) => (
  <Key>
    <div className="flex flex-col items-center text-xs leading-tight">
      <div>{top}</div>
      <div className="text-base">{bottom}</div>
    </div>
  </Key>
);

const MacBookKeyboard = () => {
  const rows = [
    {
      keys: [
        <Key key="esc">esc</Key>,
        <div key="space1" className="w-8" />,
        ...["☀️", "☀️", "⊞", "🔍", "🎤", "🌙", "⏮", "⏯", "⏭", "🔇", "🔉", "🔊"].map((icon, i) => (
          <Key key={`f${i + 1}`} className="text-xs">
            <div className="flex flex-col items-center">
              <div className="text-xs mb-1">{icon}</div>
              <div>F{i + 1}</div>
            </div>
          </Key>
        )),
        <div key="space2" className="w-8" />,
        <Key key="eject" width="w-16" className="bg-gray-700">⏏</Key>
      ]
    },
    {
      keys: [
        <DualSymbolKey key="~" top="~" bottom="`" />,
        ...["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"].map((top, i) => (
          <DualSymbolKey key={top} top={top} bottom={`${i + 1}`} />
        )),
        <DualSymbolKey key="=" top="+" bottom="=" />,
        <Key key="delete" width="w-20">delete</Key>
      ]
    },
    {
      keys: [
        <Key key="tab" width="w-16">tab</Key>,
        ...Array.from("QWERTYUIOP").map(char => <Key key={char}>{char}</Key>),
        <DualSymbolKey key="[" top="{" bottom="[" />,
        <DualSymbolKey key="]" top="}" bottom="]" />,
        <DualSymbolKey key="\\" top="|" bottom="\\" />
      ]
    },
    {
      keys: [
        <Key key="caps" width="w-20">caps lock</Key>,
        ...Array.from("ASDFGHJKL").map(char => <Key key={char}>{char}</Key>),
        <DualSymbolKey key=";" top=":" bottom=";" />,
        <DualSymbolKey key="'" top={'"'} bottom={'\''} />,
        <Key key="return" width="w-24">return</Key>
      ]
    },
    {
      keys: [
        <Key key="shift-left" width="w-28">shift</Key>,
        ...Array.from("ZXCVBNM").map(char => <Key key={char}>{char}</Key>),
        <DualSymbolKey key="," top="<" bottom="," />,
        <DualSymbolKey key="." top=">" bottom="." />,
        <DualSymbolKey key="/" top="?" bottom="/" />,
        <Key key="shift-right" width="w-28">shift</Key>
      ]
    },
    {
      keys: [
        <Key key="fn" width="w-12"><div className="text-xs">🌐<br />fn</div></Key>,
        <Key key="control" width="w-12"><div className="text-xs">^<br />control</div></Key>,
        <Key key="option-left" width="w-12"><div className="text-xs">⌥<br />option</div></Key>,
        <Key key="command-left" width="w-16"><div className="text-xs">⌘<br />command</div></Key>,
        <Key key="space" width="w-96" />,
        <Key key="command-right" width="w-16"><div className="text-xs">⌘<br />command</div></Key>,
        <Key key="option-right" width="w-12"><div className="text-xs">⌥<br />option</div></Key>,
        <div key="arrows" className="flex flex-col gap-1">
          <Key width="w-12 h-6">▲</Key>
          <div className="flex gap-1">
            <Key width="w-12 h-6">◄</Key>
            <Key width="w-12 h-6">▼</Key>
            <Key width="w-12 h-6">►</Key>
          </div>
        </div>
      ]
    }
  ];

  return (
    <div className="bg-gray-800 p-4 rounded-2xl shadow-2xl max-w-6xl mx-auto">
      {rows.map((row, idx) => (
        <div key={idx} className="flex gap-1 mb-1">
          {row.keys}
        </div>
      ))}
    </div>
  );
};

export default MacBookKeyboard;
