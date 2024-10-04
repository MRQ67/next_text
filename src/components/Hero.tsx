"use client";

import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'




const handleClick = () => {
      window.open('https://www.notequran.com/#/t1/ar-allah');
    };

    const handlebadClick = () => {
        window.open('https://youtu.be/GPXkjtpGCFI?si=JYQ8y0P9kx-YLDlP');
      };

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
       <div>
        <Spotlight  className='-top-40 -left-10 'fill='white'/>
        <Spotlight  className='top-10 left-full h-[80vh] w-[50vw]'fill='blue'/>
        <Spotlight  className='top-28 left-80 h-[80vh] w-[50vw]'fill='purple'/>
       </div>
       <div className="h-screen w-full dark:bg-slate-900 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-slate-900 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"> 
            </div>
                <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                    
                </p>
        </div>
        <div className='flex justify-center relative my-10 z-5'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-4xl flex flex-col items-center justify-center'>
                <h2 className='text-center uppercase text-blue-100 text-xs max-w-80'>
                    Welcome to Sicko
                </h2>
                <TextGenerateEffect 
                className='text-center text-[100px] md:text-2xl lg:text-3xl'
                words='A world of possibilities and opportunities for you'/>

                <p className=' text-center text-sm md:tracking-wider '>
                    and all of your sicko needs
                </p>
                <span>
                <button onClick={handlebadClick} className="my-10 mx-4 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                   Do Bad
                </button>
                or
                <button onClick={handleClick} className="my-10 mx-4 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                   Do Good
                </button>
                </span>

            </div>
        </div>
    </div>

  )
}

export default Hero