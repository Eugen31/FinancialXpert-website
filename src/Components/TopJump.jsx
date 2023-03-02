import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import topArrow from '../assets/arrow.png'


const TopJump = () => {
    const [onTop, setOnTop] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 100) {
                setOnTop(true)
            }else{
                setOnTop(false)
            }
        });
    });

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

  return (
    onTop && (
        <button onClick={()=> scrollToTop ()} className = 'flex justify-center items-center fixed bottom-12 lg: right-4 w-10 h-10  bg-primary-darkBlue  rounded-md cursor-pointer border-2 border-white z-10'>
            <img className='invert' src={topArrow} alt='go top' />
        </button>
    )
  )
}

export default TopJump