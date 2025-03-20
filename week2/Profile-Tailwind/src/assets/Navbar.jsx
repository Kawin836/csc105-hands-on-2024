import React from 'react'

const Navbar = () => {
  return (
    <>
    <header className='flex justify-between items-center h-20'>
        <h1 className='ml-15 text-3xl font-bold
        md:max-lg:text-2xl
        sm:max-md:text-xl
        max-sm:text-xs'>Jing Yuan</h1>
        <nav className='w-100 flex justify-evenly
        sm:max-md:w-80
        max-sm:w-40'>
            <a href="" className='px-7 py-2 bg-amber-900 text-white rounded-2xl font-bold drop-shadow-2xl
            md:max-lg:px-5
            sm:max-md:px-3 sm:max-md:font-medium
            max-sm:px-0 max-sm:bg-white max-sm:text-black max-sm:text-xs max-sm:font-normal'>Home</a>
            <a href="" className='px-7 py-2 font-bold hover:bg-stone-500 hover:text-white hover:rounded-2xl hover:drop-shadow-2xl
            md:max-lg:px-5
            sm:max-md:px-3 sm:max-md:font-medium
            max-sm:px-0 max-sm:text-xs max-sm:font-normal'>About Me</a>
            <a href="" className='px-7 py-2 font-bold hover:bg-stone-500 hover:text-white hover:rounded-2xl hover:drop-shadow-2xl
            md:max-lg:px-5
            sm:max-md:px-3 sm:max-md:font-medium
            max-sm:px-0 max-sm:text-xs max-sm:font-normal'>Gallery</a>
        </nav>
        <button className='mr-15 px-10 py-3 bg-stone-500 text-white rounded-2xl font-bold drop-shadow-2xl hover:bg-amber-900
        md:max-lg:px-7
        sm:max-md:px-4 sm:max-md:font-medium
        max-sm:px-1 max-sm:rounded-lg max-sm:text-xs max-sm:py-2 max-sm:font-normal'>Contact</button>
    </header>
    </>
  )
}

export default Navbar