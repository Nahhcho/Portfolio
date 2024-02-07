'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const TAB_DATA = [
    {
        title: "Skills",
        id: 'skills',
        content: (
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Python</li>
                <li>Django</li>
                <li>PostgreSQl</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: 'education',
        content: (
            <ul>
                <li>College of the Canyons</li>
                <li>California State University Northridge</li>
            </ul>
        )
    }
]

const About = () => {

    const [tab, setTab] = useState(TAB_DATA[0].id)

  return (
    
    <div className='text-white'>
        <div className='lg:grid lg:grid-cols-2 gap-8 mt-10 py-8 px-2 xl:gap-16 sm:py-16 xl:px-12'>
            <Image src='/images/innovation.jpg' width={500} height={500} className='lg:pt-[100px] pt-0'/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='xl:text-4xl lg:text-3xl text-2xl mt-5 lg:mt-0 font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, veniam totam? Consequuntur quaerat autem, nam totam sunt debitis dicta numquam cum iure incidunt quam tenetur corrupti quos temporibus aspernatur dolore.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex consequuntur sapiente voluptate. Odio aspernatur tempora porro distinctio totam, fugiat, neque officiis repudiandae dignissimos maiores id ratione sint quod vero expedita.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos doloremque maiores dolorum necessitatibus! Nesciunt voluptas asperiores eligendi consectetur voluptatibus ea, culpa soluta magni sunt possimus perspiciatis dolorem beatae ducimus facilis?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci in dolore expedita laborum quos dolorum fuga nulla! At ex porro aspernatur distinctio expedita amet, blanditiis facilis perspiciatis, enim ea beatae?
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <span className={
                        tab == 'skills' ?
                        ('mr-3 font-semibold text-white cursor-pointer border-b border-purple-500') :
                        ('mr-3 font-semibold hover:text-white text-[#ADB7BE] cursor-pointer')
                    
                    } onClick={() => {setTab('skills')}}>Skills</span>
                    <span className={
                        tab == 'education' ?
                        ('mr-3 font-semibold text-white cursor-pointer border-b border-purple-500 ') :
                        ('mr-3 font-semibold hover:text-white text-[#ADB7BE] cursor-pointer')
                    
                    } onClick={() => {
                        setTab('education')}}>Education</span>
                </div>
                <div className='mt-8'>
                        {TAB_DATA.find((t) => t.id == tab).content}
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default About