import React from 'react'
import Avatar2 from '../image/Avatar2.png'

const AboutMe = () => {
  return (
    <>
    <section className='flex justify-evenly items-center h-150
    lg:max-xl:h-125
    md:max-lg:h-100
    sm:max-md:flex-col sm:max-md:h-225
    max-sm:flex-col max-sm:h-175'>
        <div>
            <img src={Avatar2} alt="" className='w-100 drop-shadow-2xl opacity-75
            lg:max-xl:w-75
            md:max-lg:w-50
            sm:max-md:w-75
            max-sm:w-50'/>
        </div>
        <div>
            <h1 className='text-5xl font-bold leading-12
            lg:max-xl:text-4xl
            md:max-lg:text-3xl
            sm:max-md:text-4xl
            max-sm:text-2xl max-sm:leading-2'>About Me</h1>
            <p className='mt-5 text-3xl font-medium
            lg:max-xl:text-2xl
            md:max-lg:text-xl
            sm:max-md:text-2xl
            max-sm:text-lg'>Knight</p>
            <p className='mt-5 text-lg font-medium w-175 my-10
            lg:max-xl:text-base lg:max-xl:w-125
            md:max-lg:text-sm md:max-lg:font-normal md:max-lg:w-100
            sm:max-md:text-base sm:max-md:w-125
            max-sm:text-xs max-sm:font-normal max-sm:w-85'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perspiciatis distinctio iste accusamus doloribus laudantium id ut provident temporibus velit deserunt nobis reprehenderit quasi voluptatem, 
                explicabo labore pariatur adipisci laboriosam ipsum?</p>
            <button className='w-50 bg-stone-500 py-3 rounded-3xl text-white font-bold drop-shadow-2xl hover:bg-amber-900
            md:max-lg:w-40
            sm:max-md:w-40
            max-sm:w-30 max-sm:text-xs'>Read More</button>
        </div>
    </section>
    </>
  )
}

export default AboutMe