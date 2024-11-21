import React from 'react'

const Pg6 = () => {
  return (
    <div className=" relative h-screen w-full px-8 py-6">
    <div className="place-items-end flex relative overflow-hidden h-full w-full drop-shadow-sm
     shadow-gray-800 shadow-md rounded-[5vw] ">
        <video autoPlay muted loop className='h-fill w-full object-cover' src="https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/480p/mp4/file.mp4"></video>
        <h1 className=" absolute left-24 opacity-95 text-white text-[40vw] pt-[5vw] leading-[32vw] font-[anzo4]">
          ABOUT
        </h1>
    </div>
  </div>
  )
}

export default Pg6