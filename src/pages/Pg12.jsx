import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { motion, useScroll, useTransform } from "framer-motion";
import { use } from "react";
import { div } from "motion/react-client";

const Pg12 = () => {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target: target,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["25%", "-100%"]);

  // gsap.registerPlugin(ScrollTrigger);

    
  // useGSAP(() => {
  //   gsap.fromTo(
  //     ".text",
  //     {opacity: 1,},
  //     {
  //       opacity: 0,
  //       duration: 0.1,
  //       easeInOut: "linear",
  //       stagger: 0.5,
  //       scrollTrigger: {
  //         markers: true,
  //         trigger: ".pg12trigger",
  //         start: "top -0%",
  //         end: "top -340%",
  //         scrub: 2,
  //       },
  //     }
  //   );
  // });
  

  return (
      <div ref={target} className=" pg12trigger relative h-[500vh] bg-neutral-900">
        <div className="sticky top-0 flex h-screen overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-[40vw]"
        >
          
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
          </h1>
          
          

          <h1 className=" text text-left text-[12vw] leading-[6vw] pt-[5vw] font-[anzo4] uppercase ">
            <span className=" text-zinc-700 left-[10%] ">impactfull</span>
            <br />
            desgine
          </h1>
          
        </motion.div>
      </div>
      </div>
  );
};

export default Pg12;
