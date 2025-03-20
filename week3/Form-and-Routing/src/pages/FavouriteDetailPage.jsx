import React from 'react'
import { useParams, useSearchParams } from "react-router-dom";


const FavouriteDetailPage = () => {
  const { number } = useParams();
  const [searchParams] = useSearchParams();
  return (
    <>
      <div className='flex justify-center items-center bg-gray-100 w-[550px] h-[250px] my-[100px] mx-auto p-10 drop-shadow-xl'>
      <h1 className='text-5xl text-center font-medium leading-[56px]'>
        Your favorite post is <span className='text-red-600 underline'>{searchParams.get("q")}</span>. Post ID is <span className='text-red-600 underline'>{number}</span>. Size is <span className='text-red-600 underline'>{searchParams.get("size")}</span></h1>
      </div>
    </>
  )
}

export default FavouriteDetailPage