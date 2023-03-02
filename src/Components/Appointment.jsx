import React from 'react'

const Appointment = () => {
    return (
      <div className='bg-accent w-full p-8 rounded-sm max-w-[22rem] md:max-w-md mx-auto'>
        <h3 className='text-primary-darkBlue text-[28px] font-bold tracking-[0.3px] text-center'>
          Get a free consultation
        </h3>
        {/* bar */}
        <div className='w-[54px] h-[3px] bg-primary-darkBlue my-6 mx-auto'></div>
        {/* input group */}
        <form className='space-y-[24px]'>
          <input className='form-control' placeholder='Full name' type='text' />
          <input className='form-control' placeholder='Phone number' type='text' />
          <input className='form-control' placeholder='Email address' type='email' />
          <textarea className='resize-none w-full h-[132px] outline-none rounded-sm p-4 font-body text-sm text-primary focus:ring-1 focus:ring-primary'placeholder='Add a comment'></textarea>
          {/* Button */}
          <button className='btn bg-primary-lightBlue hover:bg-primary transition-all'>
            Send message
          </button>
        </form>
      </div>
    );
  };

export default Appointment