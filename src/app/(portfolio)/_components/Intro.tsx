"use client";

import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

export function Intro() {
  const [counter, setCounter] = useState<number>(0);
  const counterRef = useRef<HTMLHeadingElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);

  const updateCounter = (currentCounter: number): void => {
    if (currentCounter >= 100) {
      return;
    }

    const updatedCounter = currentCounter + Math.floor(Math.random() * 10) + 1;

    if (updatedCounter > 100) {
      setCounter(100);
    } else {
      setCounter(updatedCounter);
      const delay = Math.floor(Math.random() * 200) + 50;
      setTimeout(() => updateCounter(updatedCounter), delay);
    }
  };

  useEffect(() => {
    updateCounter(counter);
  }, []);

  useEffect(() => {
    gsap.to(counterRef.current, {
      opacity: 0,
      delay: 3.5,
    });

    gsap.to(barsRef?.current?.children, {
      height: 0,
      stagger: 0.5,
      duration: 1.5,
      delay: 3.5,
      ease: "power4.inOut",
    });
  }, []);

  return (
    <>
      <h1
        ref={counterRef}
        className="text-[20vw] text-purple-400 fixed w-full h-full flex justify-end items-end z-[10]"
      >
        {counter}
      </h1>

      <div
        ref={barsRef}
        className="fixed h-screen w-screen object-cover z-[2] flex"
      >
        <div className="bar w-[25vw] h-[105vh] bg-[#060606]"></div>
        <div className="bar w-[25vw] h-[105vh] bg-[#050301]"></div>
        <div className="bar w-[25vw] h-[105vh] bg-[#040200]"></div>
        <div className="bar w-[25vw] h-[105vh] bg-[#020403]"></div>
      </div>
    </>
  );
}

// #040200 -- this is very black.
// #050301
// #060606
// #020403
// ----------------
// #010203
// #060D0D
// #060605

export default Intro;
