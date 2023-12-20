"use client";

import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";

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
      const delay = Math.floor(Math.random() * 300) + 50;
      setTimeout(() => updateCounter(updatedCounter), delay);
    }
  };

  useEffect(() => {
    updateCounter(counter);
  }, []);

  useGSAP(() => {
    gsap.to(counterRef.current, {
      opacity: 0,
      delay: 4.5,
    });

    gsap.to(counterRef?.current?.children, {
      opacity: 0,
      delay: 5.5,
    });

    gsap.to(barsRef?.current?.children, {
      height: 0,
      stagger: 0.5,
      duration: 2.5,
      delay: 5.5,
      ease: "power4.inOut",
    });
  });

  return (
    <>
      <h1
        ref={counterRef}
        className="text-3xl text-black fixed right-5 bottom-5 w-full h-full flex justify-end items-end z-[10]"
      >
        {counter === 100 ? (
          <span className="block absolute top-[50%] left-[50%] text-black">
            lucid
          </span>
        ) : (
          `${counter}%`
        )}
      </h1>

      <div
        ref={barsRef}
        className="fixed h-screen w-screen object-cover z-[9] flex"
      >
        <div className="bar w-[20vw] h-[105vh] bg-white"></div>
        <div className="bar w-[20vw] h-[105vh] bg-white"></div>
        <div className="bar w-[20vw] h-[105vh] bg-white"></div>
        <div className="bar w-[20vw] h-[105vh] bg-white"></div>
        <div className="bar w-[20vw] h-[105vh] bg-white"></div>
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
