import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Pg12 = () => {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target: target,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["25%", "-100%"]);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      " .text ",
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        stagger :{
          amount: 1,
          from: "start",
          to: "end",
          
        },
        duration: 1,
        scrollTrigger: {
          // markers: true,
          trigger: "pg12trigger",
          scrub: 1,
          start: "top -10%",
          end: "top -340%",
        },
      }
    );
  });

  return (
    <div
      ref={target}
      className=" pg12trigger relative h-[200vh] max-w-[100vw] bg-neutral-900"
    >
      <div className=" sticky perspective2 top-0 flex max-w-[100vw] h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex gap-[40vw]">
          <h1 className=" text text-left text-[12vw] leading-[6vw] pt-[5vw] font-[anzo4] uppercase ">
            <span className=" text-zinc-700 left-[10%] ">impactfull</span>
            <br />
            <span>desgine</span>
          </h1>

          <h1 className=" text text-left text-[12vw] leading-[6vw] pt-[5vw] font-[anzo4] uppercase ">
            <span className=" text-zinc-700 left-[10%] ">impactfull</span>
            <br />
            desgine
          </h1>

          {/* <h1 className=" text text-left text-[12vw] leading-[6vw] pt-[5vw] font-[anzo4] uppercase ">
            <span className=" text-zinc-700 left-[10%] ">impactfull</span>
            <br />
            desgine
          </h1>

          <h1 className=" text text-left text-[12vw] leading-[6vw] pt-[5vw] font-[anzo4] uppercase ">
            <span className=" text-zinc-700 left-[10%] ">impactfull</span>
            <br />
            desgine
          </h1>

          <h1 className=" text text-left text-[12vw] leading-[6vw] pt-[5vw] font-[anzo4] uppercase ">
            <span className=" text-zinc-700 left-[10%] ">impactfull</span>
            <br />
            desgine
          </h1>

          <h1 className=" text text-left text-[12vw] leading-[6vw] pt-[5vw] font-[anzo4] uppercase ">
            <span className=" text-zinc-700 left-[10%] ">impactfull</span>
            <br />
            desgine
          </h1>

          <h1 className=" text text-left text-[12vw] leading-[6vw] pt-[5vw] font-[anzo4] uppercase ">
            <span className=" text-zinc-700 left-[10%] ">impactfull</span>
            <br />
            desgine
          </h1> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Pg12;
