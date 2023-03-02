import React from 'react';
import { team } from '../Data';

const Team = () => {
  return (
    <section id='team' className='section'>
        <div className='container mx-auto text-center'>
        <h2 className='text-5xl font-primary font-extrabold mb-4'>
          Meet the team
        </h2>

        <p className='max-w-[540px] mx-auto px-6 lg:px-0 mb-[60px]'>
          Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.
        </p>

        <div className='lg:grid lg:grid-cols-3 lg:gap-x-[10rem]'>
          {team.map((x, index) => {
            const { image, name, position, description } = x;
            return (
              <div className='flex justify-center items-center flex-col text-center lg:text-left mb-12' key={index}>
                <div className='w-80 h-[13rem]'>
                  <img className='w-full object-fill max-w-full max-h-full mx-auto lg:mx-0 mb-6' src={image} alt={name} />
                </div>
                <h4 className='text-2xl mt-6 mb-2 font-primary font-bold'>{name}</h4>
                <p className='text-sm uppercase tracking-[0.3px] mb-4 opacity-[0.8]'>
                  {position}
                </p>
                <p className='max-w-[332px] lg:max-w-[350px] mx-auto lg:mx-0'>
                  {description}
                </p>
              </div>
            );
          })}
        </div>
        </div>
    </section>
  )
}

export default Team