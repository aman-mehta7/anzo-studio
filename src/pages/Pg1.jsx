import React, { useRef, useState } from "react";
import Text from "../components/Text";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Pg1 = () => {
  const tiltRef = useRef(null);
  const [xVal, setxVal] = useState(0);
  const [yVal, setyVal] = useState(0);

  const mouseMove = (e) => {
    setxVal(
      (e.clientX -
        tiltRef.current.getBoundingClientRect().x -
        tiltRef.current.getBoundingClientRect().width / 2) /
        40
    );
    setyVal(
      -(
        e.clientY -
        tiltRef.current.getBoundingClientRect().y -
        tiltRef.current.getBoundingClientRect().height / 2
      ) / 20
    );
  };

  useGSAP(
    function () {
      gsap.to(tiltRef.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg) `,
        duration: 2,
        ease: "power3.out",
      });
    },
    [xVal, yVal]
  );

  return (
    <div
      onMouseMove={(e) => {
        mouseMove(e);
      }}
      className=" relative h-full w-full px-8 py-6 "
    >
      <div className=" perspective lg:bg-center md:bg-center sm:bg-center  h-[95vh] w-full drop-shadow-2xl shadow-gray-800 shadow-md  bg-no-repeat bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1865,h_907,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)] rounded-[5vw]">
        <img
          className="absolute px-[4.7vw] py-[3.3vw] "
          src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png"
          alt=""
        />

        <Text a={tiltRef} />

        <div className="absolute flex justify-between items-center px-[3.5vw] w-full h-[18vw] bottom-0">
          <div className="pt-[10vw] pl-[3vw]">
            <h1 className="font-[anzo3] text-[1.2vw]">
              BRAND DESIGN | WEBSITE DESIGN
            </h1>
            <h1 className="font-[anzo2] text-[1.2vw] opacity-50">
              BESPOKE FREELANCE
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pg1;
