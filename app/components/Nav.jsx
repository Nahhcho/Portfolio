"use client"
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'

const Nav = () => {

    const [openMenu, setOpenMenu] = useState(false)

    
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90 z-50'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-8 pt-8'>
            <Link href={'/'} className='text-3xl md:text-4xl text-white font-semibold font-serif'>Jimmy</Link>
            <div className='mobile-menu block md:hidden'>
                {
                    openMenu ? (
                        <button onClick={() => {setOpenMenu(false)}} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <XMarkIcon className='h-5 w-5'/>
                        </button>
                    ) : (
                        <button onClick={() => {setOpenMenu(true)}} className='flex items-center px-3 py-2 mb-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <Bars3Icon className='h-5 w-5'/>
                        </button>
                    )
                }

            </div>
            <div className='menu hidden md:block md:w-auto' id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    <li>
                        <ScrollLink className='text-white text-xl opacity-80' to='about' smooth={true} duration={500} offset={-50}>
                            About
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink className='text-white text-xl opacity-80' to='portfolio' smooth={true} duration={500} offset={-75}>
                            Projects
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink className='text-white text-xl opacity-80' to='contact' smooth={true} duration={500} offset={-50}>
                            Contact
                        </ScrollLink>
                    </li>
                </ul>
            </div>
        </div>
        {openMenu ? <MenuOverlay /> : null}
    </nav>
  )
}

export default Nav