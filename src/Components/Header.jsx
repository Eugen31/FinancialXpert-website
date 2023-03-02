import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import Nav from './Nav';
import NavMobile from './NavMobile';

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if (window.scrollY > 80) {
        setBg(true)
      } else {
        setBg(false)
      }
    })
  });

  return (
    <header className={`${bg && 'bg-primary-lightYellow shadow-md'} lg:px-0 w-full fixed z-10 transition-all duration-300`}>

      <div className='container  mx-auto flex items-center justify-between text-lg'>
      {/* logo here */}
        <Logo />
        
        {/* nav here */}
        <Nav />

        {/* nav mobile */}
        <NavMobile />

      </div>
      
    </header>
  )
}

export default Header