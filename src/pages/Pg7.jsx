  import React, { useRef } from "react";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { useGSAP } from "@gsap/react";

  const Pg7 = () => {
    gsap.registerPlugin(ScrollTrigger);

    const text = useRef(null)

    useGSAP(() => {
      gsap.fromTo(
        ".pg7text",
        { opacity: .3},
        {
          duration: .5,
          stagger: 1,
          opacity: 2,
          scrollTrigger: {
            trigger: text.current,
            start: "top 65%",
            end: "top 110%",
            scrub: 1,
          },
        }
      );
    })

    useGSAP(() => {
      gsap.fromTo(
        ".img",
        { opacity: .3,rotate: -90, x: -150},
        {
          duration: 10,
          x: 0,
          rotate: 0,
          scrollTrigger: {
            trigger: text.current,
            start: "top 65%",
            end: "top 20%",
            scrub: 2,
          },
        }
      );
    })

    return (
      <div>
        <div className=" relative h-[130vh] w-full px-8 py-6 bg-white ">
          <div className=" relative h-full w-full  drop-shadow-sm shadow-gray-800 shadow-md  bg-black rounded-[5vw]">
            <div className=" flex items-center justify-between">
              <h1 className="text-[20vw] font-[anzo4] leading-[13.5vw] pl-[5vw] pt-[8vw] text-white">
                <span className="opacity-50">HOW</span> <br /> CAN
              </h1>
              <h1 className="text-[20vw] text-right font-[anzo4] leading-[13.5vw] pr-[5vw] pt-[8vw] text-white">
                <span className="opacity-50">I HELP</span> <br /> YOU
              </h1>
            </div>
            <div ref={text} className=" px-[5vw] pt-[7vw] flex items-center justify-between gap-[5vw]">
              <div className=" w-[150vw] pt-5">
                <h1 className=" pg7text text-[1.3vw] font-[anzo1] leading-[1.5vw] text-white">
                  I am a self-taught web and brand designer with a passion for
                  creating unique and timeless masterpieces for ambitious
                  professionals, entrepreneurs, artists, and boutique businesses.
                  ​<br />
                  <br />
                  Bespoke Freelance for agencies.
                </h1>
              </div>
              <div>
                <h1 className=" pg7text text-[1.3vw] font-[anzo1] leading-[1.5vw] text-white">
                  With a background in strategic marketing and acknowledged
                  expertise in web development, I aim to minimize my client's
                  resources spent on macro and micro-management, marketing
                  research, and hiring a whole team of a larger agency.
                </h1>
              </div>
              <div>
                <h1 className=" pg7text text-[1.3vw] font-[anzo1] leading-[1.5vw] text-white">
                  My mission is to drive exceptional growth for my clients by
                  increasing their brand appearance, defining their identity, and
                  engaging customers through captivating black-and-white
                  aesthetics with a modern, luxurious, and minimalistic touch.
                </h1>
              </div>
            </div>
            <img
              className=" img top-[15%] left-[19.5%] absolute object-contain h-[70%] opacity-60 "
              src="https://static.wixstatic.com/media/f1c650_e5c1c4b281ea418a8663a17e66f283f1~mv2.png/v1/fill/w_777,h_668,al_c,q_90,enc_avif,quality_auto/triangle%203.png"
              alt=""
            />
          </div>
          <div></div>
        </div>
      </div>
    );
  };

  export default Pg7;
