"use client";

import { useRef } from "react";
import { wrap } from "@motionone/utils";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity?: number;
}

function Parallax({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);

  const { scrollY } = useScroll();

  const scrollVelocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="flex flex-nowrap m-0 leading-6 tracking-[-2px] overflow-hidden whitespace-nowrap">
      <motion.div
        className="font-semibold uppercase flex flex-nowrap text-9xl"
        style={{ x }}
      >
        {[...Array(4)].map((_, index) => (
          <span key={index} className="block mr-[30px]">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default Parallax;
