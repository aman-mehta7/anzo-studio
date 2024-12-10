import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
// import ScrollTrigger from 'gsap-trial/ScrollTrigger'
import React from 'react'

const Pg9 = () => {
  
//  gsap.registerPlugin(ScrollTrigger)

//  useGSAP(() => {
  
//  })

 
  return (
    <div className=" relative min-h-[117vh] w-full ">
      <div className=" bg-fixed bg-no-repeat bg-cover w-full min-h-screen bg-[url(https://img.freepik.com/free-photo/digital-art-dark-cosmic-night-sky_23-2151700745.jpg?t=st=1733491830~exp=1733495430~hmac=f77517094c7b9530ce34aaae6209dd3c8b4095d1360d74e8fc0a94e1083dcb9f&w=1380)]"></div>
      <img
        className=" absolute z-10 top-0 "
        src="https://static.wixstatic.com/media/f1c650_a15cf84ef5d546bd980d228833ef2f8e~mv2.png/v1/fill/w_1903,h_1075,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/Subtract%20(1).png"
        alt=""
      />
    </div>
  );
};

export default Pg9;
