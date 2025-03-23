import React, { useRef, useState } from "react";
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
        duration: 0.7,
        stagger: 1,
        opacity: 5,
        scrollTrigger: {
          trigger: ".text",
          start: "top 90%",
          end: "top -45%",
          scrub: 2,
        },
      }
    );
  });

  useGSAP(() => {
    gsap.to(
      ".pg8img",
      {
        transform : `rotate(90deg)`,
        duration: 3,
        ease: "linear",
        repeat: -1,
      }
    );
  });

  return (
    <div>
      <div className=" relative h-[143vh] w-full px-8 py-6 bg-white ">
        <div className=" relative h-full w-full bg-black rounded-[5vw]">
          <div className=" flex justify-between">
            <h1 className=" text-[20vw] font-[anzo4] leading-[15vw] pl-[5vw] pt-[8vw] text-white">
              RIGHT <br />
              <span className="opacity-50"> FIT</span>
              {/* <video className="absolute top-[50%] left-[20%]" loop muted autoPlay src=" https://video.wixstatic.com/video/11062b_b42f6deed88e48509affdc02c3eb5b45/360p/mp4/file.mp4"></video> */}
                <img
                className=" pg8img ml-[5vw]"
                  src="https://static.wixstatic.com/media/11062b_b42f6deed88e48509affdc02c3eb5b45f000.png/v1/fill/w_366,h_366,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/11062b_b42f6deed88e48509affdc02c3eb5b45f000.png"
                  alt=""
                />
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
