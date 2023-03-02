import React from 'react'

const newsletter = () => {
  return (
    <section className='bg-accent pt-[54px] pb-[74px]'>
        <div className='container mx-auto px-8 text-center'>
            <h3 className='font-primary text-[40px] font-extrabold leading-[1.2] text-white mb-[12px]'>
                Subscribe for lattest news
            </h3>
            <form className='max-w-[600px] mx-auto flex flex-col lg:flex-row'>
                <input className='form-control mb-4' placeholder='Your email adress' type='email'/>
                <button className='btn bg-primary-darkBlue hover:bg-primary lg:max-w-[150px] lg:ml-4'>Subscribe</button>
            </form>
        </div>

    </section>
  )
}

export default newsletter