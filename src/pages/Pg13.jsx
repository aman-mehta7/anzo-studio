import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Pg13 = () => {
    gsap.registerPlugin(ScrollTrigger);

    // useGSAP(() => {
    //   gsap.fromTo(
    //     ".img",
    //     { scale: 0, opacity: 0 },
    //     {
    //       ScrollTrigger: {
    //         trigger: ".pg12trigger",
    //         start: "top 80%",
    //       },
    //     }
    //   );
    // });

    return (
      <div className=" relative min-h-[120vh] w-full ">
        <div className=" bg-scroll bg-no-repeat bg-cover bg-right h-[140vh] bg-[url(./public/space2.png)]"></div>
      </div>
  )
}

export default Pg13