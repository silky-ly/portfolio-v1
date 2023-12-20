"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export function Cursor() {
  const cursorRef = useRef(null);
  const circleRef = useRef(null);

  const setCursorPos = (event: any) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    gsap.set(cursorRef.current, {
      x: mouseX,
      y: mouseY,
    });

    gsap.to(circleRef.current, {
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
      <div
        ref={circleRef}
        className="circles__item circles__item--1 mix-blend-difference z-[10000] fixed top-0 left-0 rounded-full will-change-transform w-8 h-8 bg-white"
      ></div>

      <div
        ref={cursorRef}
        className="fixed top-3.5 left-3.5 w-1 h-1 rounded-full bg-blue-700 z-[10000] will-change-transform pointer-events-none select-none"
      ></div>
    </>
  );
}
