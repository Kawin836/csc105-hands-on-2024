import React from 'react'
import JingYuanImage from '../image/JingYuan_image.jpg'
import JingYuanImage2 from '../image/JingYuan_image2.jpg'
import JingYuanImage3 from '../image/JingYuan_image3.jpg'
import JingYuanImage4 from '../image/JingYuan_image4.png'
import JingYuanImage5 from '../image/JingYuan_image5.png'
import JingYuanImage6 from '../image/JingYuan_image6.jpg'

const Gallery = () => {
  return (
    <>
    <section className='flex flex-col items-center h-225
    lg:max-xl:h-200
    md:max-lg:h-175
    sm:max-md:h-250
    max-sm:h-150'>
        <h1 className='text-5xl font-bold
        lg:max-xl:text-4xl
        md:max-lg:text-3xl
        sm:max-md:text-4xl
        max-sm:text-2xl'>Gallery</h1>
        <div className='grid grid-cols-3 gap-10 mt-10
        lg:max-xl:gap-8
        md:max-lg:gap-6
        sm:max-md:grid-cols-2 sm:max-md:gap-6
        max-sm:grid-cols-2 max-sm:gap-3'>
            <img src={JingYuanImage} alt="" className='w-80 h-80 drop-shadow-2xl
            lg:max-xl:w-65 lg:max-xl:h-65
            md:max-lg:w-50 md:max-lg:h-50
            sm:max-md:w-65 sm:max-md:h-65
            max-sm:w-35 max-sm:h-35'/>
            <img src={JingYuanImage2} alt="" className='w-80 h-80 drop-shadow-2xl
            lg:max-xl:w-65 lg:max-xl:h-65
            md:max-lg:w-50 md:max-lg:h-50
            sm:max-md:w-65 sm:max-md:h-65
            max-sm:w-35 max-sm:h-35'/>
            <img src={JingYuanImage3} alt="" className='w-80 h-80 drop-shadow-2xl
            lg:max-xl:w-65 lg:max-xl:h-65
            md:max-lg:w-50 md:max-lg:h-50
            sm:max-md:w-65 sm:max-md:h-65
            max-sm:w-35 max-sm:h-35'/>
            <img src={JingYuanImage4} alt="" className='w-80 h-80 drop-shadow-2xl
            lg:max-xl:w-65 lg:max-xl:h-65
            md:max-lg:w-50 md:max-lg:h-50
            sm:max-md:w-65 sm:max-md:h-65
            max-sm:w-35 max-sm:h-35'/>
            <img src={JingYuanImage5} alt="" className='w-80 h-80 drop-shadow-2xl
            lg:max-xl:w-65 lg:max-xl:h-65
            md:max-lg:w-50 md:max-lg:h-50
            sm:max-md:w-65 sm:max-md:h-65
            max-sm:w-35 max-sm:h-35'/>
            <img src={JingYuanImage6} alt="" className='w-80 h-80 drop-shadow-2xl
            lg:max-xl:w-65 lg:max-xl:h-65
            md:max-lg:w-50 md:max-lg:h-50
            sm:max-md:w-65 sm:max-md:h-65
            max-sm:w-35 max-sm:h-35'/>
        </div>
    </section>
    </>
  )
}

export default Gallery