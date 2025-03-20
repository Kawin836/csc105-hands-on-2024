import React from 'react'
import { z } from "zod";
import { useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const emailSchema = z.string().email("Invalid email address");
  const passwordSchema = z.string().min(6, "Password must be at least 6 characters long");

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errors, setErrors] = useState({});
      
      const handleSubmit = (e) => {
        e.preventDefault();

        const loginSchema = z.object({
          email: emailSchema,
          password: passwordSchema,
        });

        const user = {
          email: email,
          password: password,
        };
        const result = loginSchema.safeParse(user);
        if (result.success) {
          setErrors({});
          navigate("/");
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
      <div className='bg-blue-200 h-screen flex justify-center'>
        <div className='bg-gray-100 w-[400px] h-[475px] p-[24px] flex flex-col justify-center drop-shadow-xl mt-[125px]'>
          <h1 className='text-center text-4xl font-medium mb-8'>Login</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="" className='text-lg font-medium'>Email</label>
              <br />
              <input className='w-[100%] border-1 p-[6px] rounded-lg my-[8px]'
                type="text"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
              />
              <br />
              {errors.email && <span className='text-red-600'>{errors.email}</span>}
              <br />
              <label htmlFor="" className='text-lg font-medium'>Password</label>
              <br />
              <input className='w-[100%] border-1 p-[6px] rounded-lg my-[8px]'
                type="text"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
              />
              <br />
              {errors.password && <span className='text-red-600'>{errors.password}</span>}
              <br />
              <button type="submit" className='w-[100%] bg-black text-white py-[10px] mt-2 rounded-lg cursor-pointer'>Login</button>
            </form>
          <p className='text-center mt-10'>Don't have an account?<Link to="/signup" className='ml-[10px] font-bold underline'>Sign up</Link></p>
        </div>
      </div>
    </>
  )
}

export default LoginPage