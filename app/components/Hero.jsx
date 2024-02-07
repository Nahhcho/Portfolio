"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500'>
                        Hi, I'm Jimmy
                    </span>
                    <br />
                    <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Full Stack Developer',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Software Engineer',
                        1000,
                        'Student',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                </h1>
                
                <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias labore unde veniam et aliquam, accusantium fuga. Optio aperiam provident earum explicabo rem ratione corporis quo, reprehenderit, illo voluptatem ut accusantium.
                </p>
                <div className='mt-[20px] sm:mt-0'>
                    <button className='px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-purple-500 from hover:bg-slate-200 text-white'>Hire Me</button>
                    <button className='px-6 py-3 rounded-full w-full sm:w-fit bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>Download CV</button>
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[300px] h-[300px] lg:h-[400px] lg:w-[400px] relative sm:ml-[45px]'>
                    <Image
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    src='/images/heropic1.png' 
                    alt='hero image'
                    width={500}
                    height={500}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero