import React from 'react'
import ProjectCard from './ProjectCard'

const projectData = [
    {
        id: 1,
        title: "Progressive Fitness",
        description: `Built using Django, Python, React, and Javascript, Progressive Fitness is an application that allows
        users to create, save, and track their workouts. My goal in developing Progressive Fitness was so that my friends and
        I could easliy track our workouts to promote consistency and progress. By also integreating a gpt personal trainer ai, my app takes out
        the guess work in having to constantly create new workouts and set new goals. My current test base of users including myself,
        have all seen tremendous progress in our fitness goals.`,
        previewURL: 'https://pro-fit-rust.vercel.app/',
        gitURL: 'https://github.com/Nahhcho/Dogstagram_backend.git',
        image: 'images/profit_img.png'
    },
    
]

const ProjectsSection = () => {
  return (
    <>
    <h2 id='portfolio' className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
    </h2>
    <div className='grid md:grid-cols-1 gap-8 md:gap-12'>
    {
    projectData.map((project) => 
    <div key={project.id} className='grid md:grid-cols-2 gap-8 md:gap-20'>
    <ProjectCard 
    key={project.id} 
    title={project.title}  
    imgUrl={project.image} 
    gitUrl={project.gitURL}
    previewURL={project.previewURL}
    />
    <div className='text-white'>
      <h1 className='text-xl font-bold mb-5'>{project.title}</h1>
      <p>{project.description}</p>
    </div>
    </div>
    )
    
    }
    </div>
    </>
  )
}

export default ProjectsSection