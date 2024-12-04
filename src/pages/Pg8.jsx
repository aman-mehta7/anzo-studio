import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Pg8 = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      ".text",
      {
        rotate: 5,
        transformOrigin: "left bottom",
        opacity: 0,
        y: 20,
      },
      {
        y: 0,
        rotate: 0,
        duration: .7,
        stagger : 1,
        opacity: 5,
        scrollTrigger: {
          trigger: ".text",
          start: "top 90%",
          end: "top -45%",
          scrub: 2,
          markers: true,
        },
      }
    );
  });

  return (
    <div>
      <div className=" h-[143vh] w-full px-8 py-6 bg-white ">
        <div className=" relative h-full w-full drop-shadow-2xl shadow-gray-800 shadow-2xl bg-black rounded-[5vw]">
          <div className=" flex justify-between">
            <h1 className=" text-[20vw] font-[anzo4] leading-[15vw] pl-[5vw] pt-[8vw] text-white">
              RIGHT <br />
              <span className="opacity-50"> FIT</span>
            </h1>
            <div className="w-[50vw]">
              <div className="">
                <h1 className=" text text-[1.2vw] font-[anzo1] pr-[5vw] pt-[7vw] text-white">
                  <span className="opacity-50 font-[anzo2]">
                    {" "}
                    PERSONALITY <br />
                  </span>
                  Business relationships build on trust and compassion vs how
                  can I get more for less +/-
                </h1>
              </div>
              <div>
                <h1 className=" text text-[1.2vw] font-[anzo1] pr-[5vw] pt-[3vw] text-white">
                  <span className="opacity-50 font-[anzo2]">
                    {" "}
                    APPROACH <br />
                  </span>
                  Full dive into personality, goals and objectives with
                  transparency of worq process vs template and unmanageable
                  office routine +/-
                </h1>
              </div>
              <div>
                <h1 className=" text text-[1.2vw] font-[anzo1] pr-[5vw] pt-[3vw] text-white">
                  <span className="opacity-50 font-[anzo2]">
                    DESIGN
                    <br />
                  </span>
                  Design that is actually functional and helps to achieve
                  results is design that works +/-
                </h1>
              </div>
              <div>
                <h1 className=" text text-[1.2vw] font-[anzo1] pr-[5vw] pt-[3vw] text-white">
                  <span className="opacity-50 font-[anzo2]">
                    TO CONSIDER <br />
                  </span>
                  Your brand, your personal identity is the reflection of your
                  passion and goals on your future; your first online impression
                  matters +/-
                </h1>
              </div>
              <div>
                <h1 className=" text text-[1.2vw] font-[anzo1] pr-[5vw] pt-[3vw] text-white">
                  <span className="opacity-50 font-[anzo2]">
                    {" "}
                    CORE VALUES <br />
                  </span>
                  Time, trust and experience are resources we can not buy, yet
                  we are sharing them and exchange +/-
                </h1>
              </div>
              <div>
                <h1 className=" text text-[1.2vw] font-[anzo1] pr-[5vw] pt-[3vw] text-white">
                  <span className="opacity-50 font-[anzo2]">
                    {" "}
                    FIT <br />
                  </span>
                  The perfect suit is the one fits you vs the one you can fit
                  in. Choose wisely you are investing in yourself! +/-
                </h1>
              </div>
              <div>
                <h1 className=" text text-[1.2vw] font-[anzo1] pr-[5vw] pt-[3vw] text-white">
                  <span className="opacity-50 font-[anzo2]">
                    {" "}
                    FOCUS <br />
                  </span>
                  How can I help and what can I do solve your problem or
                  objective vs how can I sell you more +/-
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pg8;
