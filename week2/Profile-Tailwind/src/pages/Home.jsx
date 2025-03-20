import React from 'react'
import FacebookIcon from '../icons/Facebook_icon.png'
import IGIcon from '../icons/IG_icon.png'
import EmailIcon from '../icons/Email_icon.png'
import Avatar from '../image/Avatar.png'

const Home = () => {
  return (
    <>
    <section className='flex justify-evenly items-center h-150
    lg:max-xl:h-125
    md:max-lg:h-100
    sm:max-md:flex-col-reverse sm:max-md:h-225
    max-sm:flex-col-reverse'>
        <div className='max-sm:px-2'>
            <h1 className='text-3xl font-medium leading-12
            lg:max-xl:text-2xl
            md:max-lg:text-xl
            sm:max-md:text-2xl
            max-sm:text-lg'>Hello, it's me<br />
            <span className='text-5xl
            lg:max-xl:text-4xl
            md:max-lg:text-3xl
            sm:max-md:text-4xl
            max-sm:text-2xl'>General Jing Yuan</span></h1>
            <p className='mt-5 text-3xl font-medium
            lg:max-xl:text-2xl
            md:max-lg:text-xl md:max-lg:mt-0
            sm:max-md:text-2xl
            max-sm:text-lg max-sm:mt-0'>I'm a General</p>
            <p className='mt-5 text-lg font-medium
            lg:max-xl:text-base
            md:max-lg:text-sm md:max-lg:font-normal
            sm:max-md:text-base
            max-sm:text-xs max-sm:font-normal'>One of the Seven Arbiter-Generals of the Xianzhou Alliance's Cloud Knights and <br />One of the Six Charioteers of the Xianzhou Luofu</p>
            <div className='flex items-center my-10'>
                <a href="https://www.facebook.com/kawin.kanjanapattana.3?locale=th_TH" target="_blank"><img src={FacebookIcon} alt="" width={50} className='
                max-sm:w-8'/></a>
                <a href="https://www.instagram.com/get_maeng/" target="_blank"><img src={IGIcon} alt="" width={75} className='
                max-sm:w-13'/></a>
                <a href=""><img src={EmailIcon} alt="" width={50} className='
                max-sm:w-8'/></a>
            </div>
            <button className='w-75 bg-stone-500 py-3 rounded-3xl text-white font-bold drop-shadow-2xl hover:bg-amber-900
            md:max-lg:w-60
            sm:max-md:w-60
            max-sm:w-30 max-sm:text-xs'>My Portfolio</button>
        </div>
        <div>
            <img src={Avatar} alt="" className='w-100 drop-shadow-2xl
            lg:max-xl:w-75
            md:max-lg:w-50
            sm:max-md:w-75
            max-sm:w-50'/>
        </div>
    </section>
    </>
  )
}

export default Home