import React from "react";

const Pg10 = () => {
  return (
    <div className=" relative h-screen w-full px-8 py-6">
      <div
        className=" relative flex items-baseline justify-center overflow-hidden h-full w-full drop-shadow-sm
     shadow-gray-800 shadow-md rounded-[5vw] "
      >
        <video className="absolute object-cover" src=""></video>
        <video
          autoPlay
          muted
          loop
          className="h-fill w-full object-cover"
          src="https://video.wixstatic.com/video/11062b_cb0c4d13153f4008920bb26beda8de0f/480p/mp4/file.mp4"
        ></video>
        <h1 className=" absolute text-center opacity-95 text-white text-[13vw] leading-[15vw] font-[anzo4]">
          PERSONAL <br />
          PROFESSIONAL <br />
          ADDITIONAL
          <h5 className=" absolute -z-30 ml-[5vw] top-[12.5%] opacity-60 text-[1.3vw] leading-[15vw] font-[anzo1]">
            Intuition, Imagination, Discipline <br />
            Time Management, Multitasking, Creativity
          </h5>
        </h1>
      </div>
    </div>
  );
};

export default Pg10;
