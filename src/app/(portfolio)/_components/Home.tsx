"use client";

import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { Icons } from "@/components/icons";

export function Home() {
  const showRef = useRef(null);

  useGSAP(() => {
    gsap.to(showRef.current, {
      height: 0,
      stagger: 0.5,
      duration: 1.5,
      delay: 8.5,
      ease: "power4.inOut",
    });
  });

  return (
    <section className="h-screen relative grid sm:grid-cols-6">
      <div className="col-span-4 relative">
        <p className="w-2/5 h-auto absolute left-56 top-36">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <span className="mb-3 block uppercase text-xs font-semibold underline decoration-2 underline-offset-8">
              bio
            </span>

            <span className="block w-60 text-xs font-medium leading-4">
              A versatile and savvy Software Engineer dedicated to delivering
              exceptional user experiences.
            </span>
          </motion.span>
        </p>
      </div>

      <div className="col-span-2 flex justify-center items-center">
        <div className="w-3/4 h-3/4 relative">
          <div
            ref={showRef}
            className="imb-bar absolute object-cover w-full h-full bg-white"
          ></div>

          <Image
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1504802318913-d3f9a487448c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIwfHxhcmNoaXRlY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            width={500}
            height={500}
            quality={100}
            alt="image"
            priority
          />

          <div className="absolute bottom-[-50px] right-0">
            <Link
              href=""
              className="text-xs uppercase font-semibold align-middle cursor-pointer [letter-spacing:-0.4px]"
            >
              get in touch <Icons.ArrowDown />
            </Link>
          </div>
        </div>
      </div>

      <div className="h-screen absolute left-[66%] top-0 border-l-0.5 border-solid border-foreground"></div>
      <div className="absolute w-[66vw] top-[50%] border-b-0.5 border-solid border-foreground"></div>
    </section>
  );
}
