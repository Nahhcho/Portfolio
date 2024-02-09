import React from 'react'
import NavLink from './NavLink'

const MenuOverlay = () => {

    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
      }
  }

  return (
    <ul className='flex md:hidden flex-col pb-4 pt-0 items-center'>
        <li>
            <p onClick={() => scrollToSection('about')} className='text-white text-xl opacity-80 cursor-pointer mb-2'>About</p>
        </li>
        <li>  
            <p onClick={() => scrollToSection('portfolio')} className='text-white text-xl opacity-80 cursor-pointer mb-2'>Portfolio</p>
        </li>
        <li>
            <p onClick={() => scrollToSection('contact')} className='text-white text-xl opacity-80 cursor-pointer'>Contact</p>
        </li>
    </ul>
  )
}

export default MenuOverlay