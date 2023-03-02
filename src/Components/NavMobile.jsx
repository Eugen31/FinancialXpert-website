import React, { useState } from 'react';
import openMenu from '../assets/mobileMenu/menu.png';
import closeMenu from '../assets/mobileMenu/close_menu.png'
import { navigation } from '../Data';
import { Link } from 'react-scroll';

const NavMobile = () => {
  const [mobileMenu, setMobileMenu] = useState(false);



  return (
    
    <nav className='lg:hidden relative z-20'>
         {/* menu */}
      <button onClick={()=>setMobileMenu(true)}>
        <img src={openMenu} alt='open menu'/>
      </button>

      {/* nav list */}
      <ul className={`${mobileMenu? 'right-0' : '-right-full'} bg-primary-darkBlue fixed top-0 w-full h-screen text-white transition-all flex flex-col justify-center items-center space-y-8 `}> 

      {/* close menu */}
        <button className='absolute top-6 left-6' onClick={()=> setMobileMenu(false)}>
          <img className='backdrop-invert rounded-md' src={closeMenu} alt='close menu' width={35} />
        </button>

        {/*display nav links */}
        {navigation.map((x, index) => {
          return (
            <li key={index}>
              <Link onClick={()=> setMobileMenu(false)} to={x.href} activeClass='active' spy={true} offset={-200} className='cursor-pointer hover:text-accent-hover transition-all duration-300'>{x.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavMobile