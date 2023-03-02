import React from 'react';
import { services } from '../data';

const Services = () => {
    return (
        <section id='services' className='section bg-primary-darkBlue text-white pb-32'>
          <div className='container mx-auto text-center'>
            <h2 className='text-5xl font-primary font-extrabold mb-4'>
              What we do
            </h2>
            <p className='max-w-[540px] mx-auto px-6 lg:px-0 mb-[60px]'>
            A financial advisor helps people create long-term strategies for building wealth and managing risk. They can help you track, manage and balance your investment portfolio. They can also provide helpful advice on lots of other financial issues and decisions.
            </p>
            <div className='lg:grid lg:grid-cols-3 gap-12'>
              {services.map((x, index) => {
                const { icon, title, description } = x;
                return (
                  <div className='flex flex-col items-center justify-center mb-16 last:mb-0 lg:mb-0'
                    key={index}>

                    <div className=' w-80 h-[200px] '> 
                      <img className='w-full object-cover max-w-full max-h-full' src={icon} alt={title} width={300} />
                    </div>
                    
                    <h4 className='text-2xl mb-2 mt-4 font-primary font-bold'>
                      {title}
                    </h4>
                    <p className='max-w-[332px] lg:max-w-[350px]'>{description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      );
}

export default Services