import React from 'react';
import LogoImg from '../assets/logo.jpg';
import { Link } from 'react-scroll';

const Logo = () => {
  return (
    <div className='py-4'>
        <Link to='home' activeClass='active' spy={true} offset={-200} className='cursor-pointer'>
          <img className='rounded-full' src={LogoImg} alt='logo' width={70} />
        </Link>
    </div>
  )
}

export default Logo