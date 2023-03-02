import React from 'react';

// import testimonials
import { testimonials } from '../data';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './testimonialSlider.css';


// import required modules
import { Autoplay, Pagination } from 'swiper';

const TestimonialsSliders = () => {
    return (
        <>
          <Swiper pagination={{ dynamicBullets: true, clickable: true }} navigation autoplay={{ delay: 4000, disableOnInteraction: false }} modules={[Autoplay, Pagination]} className='mySwiper' >
            {testimonials.map((x, index) => {
              const { text, name, image, position } = x;
              return (
                <SwiperSlide key={index}>
                  <div className='relative flex flex-col lg:mt-4 p-8'>
                      {/* text */}
                      <div>
                        <p>{text}</p>
                      </div>

                        {/* pictures, name, position */}
                      <div className='flex items-center mt-[18px] mb-8  ' >
                        <div className='w-16 h-16'>
                          <img className='w-full object-fill max-w-full max-h-full  rounded-full' src={image} alt='testimonial image'  />
                        </div>

                        <div className='ml-4'>
                          <h6 className='font-bold text-lg'>{name}</h6>
                          <p className='text-sm'>{position}</p>
                        </div>
                      </div>

                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      );
}

export default TestimonialsSliders