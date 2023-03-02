import React from 'react';
import { navigation } from '../Data'
import { Link } from 'react-scroll' ;

const Nav = () => {
  return (
    <nav className='hidden lg:flex mr-4'>
      <ul className=' lg:flex space-x-6 font-primary font-semibold text-primary'>
        {navigation.map((x, item)=>{
          return(
            <li key={item}>
              <Link to={x.href} activeClass='active' spy={true} offset={-120} className='cursor-pointer hover:text-accent-hover transition-all duration-300'>{x.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav