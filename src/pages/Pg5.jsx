import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/all";

const Pg5 = () => {

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(" .pg5Text ", {
      transform: "rotateX(-90deg)",
      transformOrigin: "-70% -70% -100%",
      opacity: 0,
      stagger: 1,
      duration: 1,
      scrollTrigger: {
        // markers: true,
        trigger: ".textrotatepg5",
        scrub: 2,
        start: "top 50%",
        end: "top -340%",
      },
    });
  });


  return (
    <div className=" relative textrotatepg5 h-full w-full text-center bg-white">
        <h1 className=" pg5Text text-black text-[40vw] pt-[5vw] leading-[32vw] font-[anzo4]">HELPING</h1>
        <h1 className=" pg5Text text-zinc-500 opacity-95 text-[40vw] pt-[5vw] leading-[32vw] font-[anzo4]">MY</h1>
        <h1 className=" pg5Text text-black text-[40vw] pt-[5vw] leading-[32vw] font-[anzo4]">CLIENTS</h1>
        <h1 className=" pg5Text text-black text-[40vw] pt-[5vw] leading-[32vw] font-[anzo4]">TO ACHIVE</h1>
        <h1 className=" pg5Text text-zinc-500 opacity-95 text-[40vw] pt-[5vw] leading-[32vw] font-[anzo4]">THEIR</h1>
        <h1 className=" pg5Text text-black text-[40vw] pt-[5vw] leading-[32vw] font-[anzo4]">DREAMS</h1>
    </div>
  )
}

export default Pg5