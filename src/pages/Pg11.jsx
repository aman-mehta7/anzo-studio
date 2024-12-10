import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";

const Pg11 = () => {
  // gsap.registerPlugin(ScrollTrigger);

  // useGSAP(() => {
  //   gsap.fromTo(
  //     ".img",
  //     { scale: 0, opacity: 0 },
  //     {
  //       ScrollTrigger: {
  //         trigger: ".pg11trigger",
  //         start: "top 80%",
  //       },
  //     }
  //   );
  // }); 

  return (
    <div className=" relative overflow-hidden min-h-[117vh] w-full ">
      <div className=" bg-fixed bg-no-repeat bg-cover bg-right h-[150vh] bg-[url(./public/rocket.png)]"></div>
      <img
        className="absolute z-10 top-0 w-full "
        src="https://static.wixstatic.com/media/f1c650_360814da288f418991547fa9d5e08904~mv2.png/v1/fill/w_1348,h_1037,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Subtract.png"
        alt=""
      />
    </div>
  );
};

export default Pg11;
