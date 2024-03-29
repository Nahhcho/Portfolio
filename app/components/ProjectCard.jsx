"use client"
import React, { useState } from 'react'
import { CodeBracketIcon, EyeIcon, VideoCameraIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import ProjectModal from './ProjectModal'

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewURL}) => {
    
    const [showModal, setShowModal] = useState(false)

  return (
    <>
    <div>
    <div className='h-52 md:h-72 xl:h-96 rounded-t-xl relative group' style={{ background: `url(${imgUrl})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: '100% 100%', '@media (min-width: 640px)': { backgroundSize: '60% 100%' }, '@media (min-width: 768px)': { backgroundSize: '70% 100%' }, '@media (min-width: 1024px)': { backgroundSize: '80% 100%' }, '@media (min-width: 1280px)': { backgroundSize: '90% 100%' }, '@media (min-width: 1536px)': { backgroundSize: '100% 100%' } }}>
            <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
                <Link href={gitUrl} className='h-14 w-14 border-2 relative rounded-full border-[#ADBE7BE] hover:border-white group/link'>
                    <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
                </Link>
                <Link href={previewURL} className='h-14 w-14 ml-4 border-2 relative rounded-full border-[#ADBE7BE] hover:border-white group/link'>
                    <EyeIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
                </Link>
                <div onClick={() => {setShowModal(true)}} href={null} className='h-14 w-14 ml-4 border-2 relative rounded-full border-[#ADBE7BE] hover:border-white group/link'>
                    <VideoCameraIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
                </div>
            </div>
        </div>
        <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'>
            <h5 className='font-xl font-semibold mb-2'>{title}</h5>
            <p className='text-[#ADB7BE]'>{description}</p>
        </div>
    </div>
    {
        showModal ? <ProjectModal isVisible={showModal} onClose={() => setShowModal(false)}/> : null
    }
    </>
  )
}

export default ProjectCard