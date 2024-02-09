'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const TAB_DATA = [
    {
        title: "Skills",
        id: 'skills',
        content: (
            <ol className='list-disc text-white'>
                <li>JavaScript</li>
                <li>React</li>
                <li>Python</li>
                <li>Django</li>
                <li>PostgreSQl</li>
            </ol>
        )
    },
    {
        title: "Education",
        id: 'education',
        content: (
            <ol className='list-disc text-white'>
                <li>College of the Canyons</li>
                <li>California State University Northridge</li>
            </ol>
        )
    }
]

const About = () => {

    const [tab, setTab] = useState(TAB_DATA[0].id)

  return (
    
    <div id='about' className='text-white'>
        <div className='lg:grid lg:grid-cols-2 gap-8 mt-10 py-8 px-2 xl:gap-16 sm:py-16 xl:px-12'>
            <Image src='/images/innovation.jpg' width={500} height={500} className='lg:pt-[100px] pt-0'/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='xl:text-4xl lg:text-3xl text-2xl mt-5 lg:mt-0 font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                   Hello, I'm Jimmy Bonilla, a computer science college student based in Santa Clarita. I love learning and applying my academic knowledge to designing and creating software that solves problems while also utilizing modern technologys.
                   I spend my time outside of school and work on learning full stack development with technologies and frameworks such as React and Django. I am fueled by the desire to create and design applications that provide value to the lives
                   of myself and others. I have certifications in machine learning and CS50 Web Development, and will recieve my bachelors in computer science in June 2025. I believe that working with other engineers as a team is what allows for real 
                   innovation and creativity. I approach every project as an opportunity to not only learn techinal skills, but also the cooperation and leadership skills that allows for a team to bond and thrive. I am very excited to work with experienced
                   engineers who I can learn from quickly so that I can soon provide my own value as well. 
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