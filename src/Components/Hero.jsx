import React from 'react';
import Appointment from './Appointment';
import HeroPic from '../assets/heroPic.png';

const Hero = () => {
    return (
        <section id='home' className='lg:h-full lg:max-h-800 bg-gradient-to-t from-primary-lightBlue to-white'
        >
          {/* <Header /> */}
          <div className='container mx-auto h-full lg:flex pt-32'>
            <div className='text-center mx-auto h-full lg:text-left px-8 md:p-0'>
              <h1 className='font-primary font-black text-6xl lg:text-7xl  mb-4 lg:mt-[70px] leading-tight lg:leading-[90px]'>
                Work Smart <br /> <span className='text-accent'>Not hard.</span>
              </h1>
              <p className='max-w-sm mx-auto mb-[50px] lg:mx-0 lg:max-w-[540px]'>
              Investing can provide you with another source of income, fund your retirement or even get you out of a financial jam.
              </p>
              {/* Appointment */}
              <div className='lg:absolute mx-auto max-w-[445px] lg:mx-0'>
                <Appointment />
              </div>
            </div>
            {/* Banner Image */}
            <div className='hidden flex-1 lg:flex lg:flex-col items-end '>
              <img src={HeroPic} alt='hero pictures' width={400} />
            </div>
          </div>
        </section>
      );
}

export default Hero





