'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [dot1Color, setDot1Color] = useState('#000000');
  const [dot2Color, setDot2Color] = useState('#000000');
  const [dot3Color, setDot3Color] = useState('#000000');

  useEffect(() => {
    const colors = ['#000000', '#2b00ff', '#ff0000'];
    let index = 0;
    const interval = setInterval(() => {
      setDot1Color(colors[index % colors.length]);
      setDot2Color(colors[(index + 1) % colors.length]);
      setDot3Color(colors[(index + 2) % colors.length]);
      index++;
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
        Abstract Tezkunda
        <span className="dot" style={{ color: dot1Color }}>.</span>
        <span className="dot" style={{ color: dot2Color }}>.</span>
        <span className="dot" style={{ color: dot3Color }}>.</span>
      </h1>
      <div className="flex items-center justify-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={160} // Width of the logo
          height={160} // Height of the logo
          className="rounded-full w-40 h-40 border-4 border-gray-900 shadow-lg wave-effect"
        />
      </div>
    </div>
  );
}
