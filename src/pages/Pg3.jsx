import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Pg3 = () => {
  gsap.registerPlugin(ScrollTrigger);

  function lines() {
    useGSAP(() => {
      gsap.to(" .line1 ", {
        width: "70%",
        duration: 0.2,
        stagger: 1,
        scrollTrigger: {
          // markers: true,
          trigger: ".line1",
          scrub: 2,
          start: "top 100%",
          end: "top 10%",
        },
      });
    });

    useGSAP(() => {
      gsap.to(" .line2 ", {
        width: "85%",
        duration: 0.2,
        stagger: 1,
        scrollTrigger: {
          // markers: true,
          trigger: ".line2",
          start: "top 90%",
          end: "top 50%",
          scrub: 2,
        },
      });
    });

    useGSAP(() => {
      gsap.to(" .line3 ", {
        width: "100%",
        duration: 1,
        stagger: 1,
        scrollTrigger: {
          // markers: true,
          trigger: ".line3",
          scrub: 2,
          start: "top 90%",
          end: "top 70%",
        },
      });
    });
  }
  lines();

  return (
    <div className=" relative h-screen">
      <div className=" relative flex items-center justify-center">
        <img
          className="absolute z-20 mt-[10vw] "
          src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_1256,h_722,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/try.png"
          alt=""
        />
        <video
          className=" z-10 w-[52vw] h-[32vw] mt-[8vw] object-cover"
          autoPlay
          loop
          muted
          src="https://video.wixstatic.com/video/f1c650_ec0546cb7b10485c8753983f298c6ea4/360p/mp4/file.mp4"
        ></video>
      </div>
      <div>
        <div className=" line1 absolute top-[35%] bg-black h-[2px] w-[55vw] left-1/2 -translate-x-1/2 mt-[3vw] "></div>
        <div className=" line2 absolute top-[52.5%] bg-black h-[2px] w-[55vw] left-1/2 -translate-x-1/2 mt-[3vw] "></div>
        <div className=" line3 absolute top-[70%] bg-black h-[2px] w-[55vw] left-1/2 -translate-x-1/2 mt-[3vw] "></div>
      </div>
    </div>
  );
};

export default Pg3;
