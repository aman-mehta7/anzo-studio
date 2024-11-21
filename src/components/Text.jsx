import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const text = (props) => {

  
  useGSAP(()=>{
    gsap.from(".darkMode",{
      opacity: 0,
      duration: 4,
      
    })
  })


  return (
    <div
        ref = {props.a}
        className=' tiltref absolute w-fit top-[40%] left-[6%] font-[anzo5] leading-[5.4vw]'>
        <h1 className='text-[4vw]'>I AM<span className=' darkMode text-[4vw] ml-4 text-black '>DARK MODE</span>™</h1>
        <h1 className='text-[7.5vw]'>DESIGNER</h1>
        <h1 className='text-[4vw]'>TO HIRE</h1>
    </div>
  )
}

export default text