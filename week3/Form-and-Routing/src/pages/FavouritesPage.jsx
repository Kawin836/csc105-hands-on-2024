import React from 'react'
import { z } from "zod";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const FavouritesPage = () => {
  const navigate = useNavigate();

  const numberSchema = z.number().int().min(1).max(100);
  const querySchema = z.enum(["love", "like"], { message: "Select either 'love' or 'like'." });
  const sizeSchema =  z.enum(["small", "medium", "large"], { message: "Select a valid size." });


  const [number, setNumber] = useState();
  const [query, setQuery] = useState();
  const [size, setSize] = useState();
  const [errors, setErrors] = useState({});
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const favoriteSchema = z.object({
      number: numberSchema,
      query: querySchema,
      size: sizeSchema,
    });
  
    const user = {
      number: Number(number),
      query: query,
      size: size,
    };

    const result = favoriteSchema.safeParse(user);
    if (result.success) {
      setErrors({});
      navigate(`/fav/${number}?q=${query}&size=${size}`);
    } else {
      const errorMap = {};
      result.error.errors.forEach((err) => {
      errorMap[err.path[0]] = err.message;
    });
       setErrors(errorMap);
    }
    };
  return (
    <>
      <div className='flex justify-center'>
      <div className='bg-gray-100 w-[400px] h-[525px] p-[24px] flex flex-col justify-between drop-shadow-xl mt-[50px]'>
        <h1 className='text-center text-4xl font-medium '>Favourites Page</h1>
        <form onSubmit={handleSubmit} className='mb-10 h-[350px]'>
            <label htmlFor="" className='text-lg font-medium'>Number</label>
            <br />
            <input className='w-[100%] border-1 p-[6px] rounded-lg my-[8px]'
              type="number"
              name="number"
              onChange={e => setNumber(Number(e.target.value))}
            /> <br />
            {errors.number && <span className='text-red-600'>{errors.number}</span>} 
            <br />
            <label htmlFor="" className='text-lg font-medium'>Q:</label>
            <br />
            <select name="query" id="query" onChange={(e) => setQuery(e.target.value)} className='w-[100%] border-1 p-[6px] rounded-lg my-[8px]'>
              <option value="">Select</option>
              <option value="love">love</option>
              <option value="like">like</option>
            </select>
            <br />
            {errors.query && <p className="text-red-600">{errors.query}</p>}
            <label htmlFor="" className='text-lg font-medium'>Size:</label>
            <br />
            <select name="size" id="size" onChange={(e) => setSize(e.target.value)} className='w-[100%] border-1 p-[6px] rounded-lg my-[8px]'>
              <option value="">Select</option>
              <option value="small">small</option>
              <option value="medium">medium</option>
              <option value="large">large</option>
            </select>
            <br />
            {errors.size && <p className="text-red-600">{errors.size}</p>}
            <button type='submit' className='w-[100%] bg-black text-white py-[10px] mt-5 rounded-lg cursor-pointer'>Submit</button>
        </form>
        </div>
      </div>
    </>
  )
}

export default FavouritesPage