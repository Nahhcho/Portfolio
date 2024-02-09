import React from 'react'

const ProjectModal = ({ isVisible, onClose }) => {

    if (!isVisible) return null 

    const handleClose = (e) => {
        if(e.target.id === 'wrapper') onClose();
    }

  return (
    <div className='fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id='wrapper' onClick={handleClose}>
        <div className='w-[600px] flex flex-col '>
            <button onClick={() => onClose()} className='text-white text-xl place-self-end'>x</button>
            <div className='bg-[#212021] rounded flex justify-center p-6'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/nwJK-jo91vA?si=HpnGsqKwVrHUVVru" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>

        </div>
    </div>
  )
}

export default ProjectModal