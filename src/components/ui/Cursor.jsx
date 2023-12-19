"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);

  const setCursorPos = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    gsap.set(cursorRef.current, {
      x: mouseX,
      y: mouseY,
    });

    gsap.to(".js-circle", {
      x: mouseX,
      y: mouseY,
      duration: 1.25,
      stagger: -0.08,
      ease: "power3.out",
    });
  };

  useGSAP(() => {
    setCursorPos(cursorRef.current);
    document.body.addEventListener("mousemove", setCursorPos);
  }, []);

  return (
    <>
      <div className="circles mix-blend-screen fixed top-0 left-0">
        <div className="circles__item circles__item--1 rounded-full will-change-transform w-[50px] h-[50px] bg-purple-300 -mt-[25px] mr-0 mb-0 -ml-[25px] js-circle"></div>
      </div>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-5 h-5 -mt-[10px] mr-0 mb-0 -ml-[10px] rounded-full bg-lime-500 z-[100] will-change-transform pointer-events-none select-none"
      ></div>
    </>
  );
}
