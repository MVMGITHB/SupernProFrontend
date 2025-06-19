'use client';
import BlinkingButton from './BlinkingButton';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function AnimatedLink1({text,link,apply}) {
  const textColors = ['text-blue-300', 'text-violet-950', 'text-red-900'];
  const borderColors = ['border-blue-300', 'border-violet-950', 'border-red-900'];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % textColors.length);
    }, 1000); // Change color every 1 second
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`text-center p-1 border rounded-[10px] transition-colors duration-500 ${borderColors[colorIndex]}`}>

 <a
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  className={`${textColors[colorIndex]} font-bold text-xl transition-colors duration-500`}
>
  {text?.map((item, index) => (
        <div key={index}>{item}</div>
      ))} <br />
  {/* {apply} */}
  <BlinkingButton/>
  
</a>


    </div>
  );
}
