import React from 'react'
import NavLink from './NavLink'

const MenuOverlay = () => {
  return (
    <ul className='flex md:hidden flex-col pb-4 pt-0 items-center'>
        <li>
            <NavLink href={'#about'} title={'About'}/>
        </li>
        <li>  
            <NavLink href={'#portfolio'} title={'Projects'}/>
        </li>
        <li>
            <NavLink href={'#about'} title={'Contact'}/>
        </li>
    </ul>
  )
}

export default MenuOverlay