import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Pg1Bottom = () => {
  useGSAP(() => {
    gsap.to(".rotate", {
      rotation: 360,
      duration: 10,
      ease: "linear",
      repeat: -1,
    });
  });

  return (
      <div className=" fixed z-20 bottom-[6%] right-[4%]">
        <img
          className="rotate"
          src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png"
          alt=""
        />
        <img
          className=" rotate mt-8"
          src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png"
          alt=""
        />
      </div>
  );
};

export default Pg1Bottom;
