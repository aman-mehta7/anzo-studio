import React from 'react'
import { CgMenuGridO } from "react-icons/cg";

const Header = () => {
  return (
    <div className=" fixed z-20 pr-12 pt-12 flex content-center items-center gap-3 h-[10vw] w-full px-[.9vw] place-items-end place-content-end">
          <button className="bg-black shadow-2xl p-[.5vw] px-[2.3vw] rounded-full border-[0.3vw] border-gray-200">
            Hire Me
          </button>
          <div className="text-5xl shadow-inner">
            <CgMenuGridO />
          </div>
        </div>
  )
}

export default Header