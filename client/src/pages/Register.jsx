import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import Axios from "../utils/Axios.js"
import SummaryApi from '../common/SummaryApi.js';
import AxiosToastError from '../utils/AxiosToastError.js'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const navigate = useNavigate()


  const handleChange = (e) => {
    const { name, value } = e.target

    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }

  const valideValue = Object.values(data).every(el => el)

  const handleSubmit = async (e) => {
    e.preventDefault()


    if (data.password !== data.confirmPassword) {
      toast.error(
        "password and confirm password must be same"
      )
      return
    }

    try {
      const response = await Axios({
        ...SummaryApi.register,
        data: data
      })

      if (response.data.error) {
        toast.error(response.data.message)
      }

      if (response.data.success) {
        toast.success(response.data.message)
        setData({
          name: "",
          email: "",
          password: "",
          confirmPassword: ""
        })
        navigate("/login")
      }

      // console.log(response, "response")
    } catch (error) {
      AxiosToastError(error)
    }



  }

  return (
    <div>
      <section className='w-full container mx-auto px-2'>
        <div className='bg-white my-4 w-full max-w-lg mx-auto rounded p-6'>
          <p>Welcome to Shopit</p>

          <form className='grid gap-4 mt-6' onSubmit={handleSubmit}>
            <div className='grid gap-1'>
              <label htmlFor='name'>Name:</label>
              <input
                type='text'
                placeholder='Enter your name'
                autoFocus
                className='bg-blue-50 p-2 border rounded outline-none focus-within:border-[#ffbf00]'
                name='name'
                value={data.name}
                onChange={handleChange}
              />
            </div>
            <div className='grid gap-1'>
              <label htmlFor='email'>Email:</label>
              <input
                type='email'
                placeholder='Enter your email'
                autoFocus
                className='bg-blue-50 p-2 border rounded outline-none focus-within:border-[#ffbf00]'
                name='email'
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div className='grid gap-1'>
              <label htmlFor='password'>Password:</label>
              <div className='bg-blue-50 p-2 border rounded flex items-center focus-within:border-[#ffbf00]'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Enter your password'
                  autoFocus
                  className='w-full outline-none'
                  name='password'
                  value={data.password}
                  onChange={handleChange}
                />
                <div onClick={() => setShowPassword(preve => !preve)} className=' cursor-pointer '>
                  {
                    showPassword ? <FaEye /> : <FaEyeSlash />
                  }
                </div>
              </div>
            </div>
            <div className='grid gap-1'>
              <label htmlFor='confirmPassword'>Confirm Password:</label>
              <div className='bg-blue-50 p-2 border rounded flex items-center focus-within:border-[#ffbf00]'>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id='confirmPassword'
                  placeholder='Enter your confirm password'
                  autoFocus
                  className='w-full outline-none'
                  name='confirmPassword'
                  value={data.confirmPassword}
                  onChange={handleChange}
                />
                <div onClick={() => setShowConfirmPassword(preve => !preve)} className=' cursor-pointer '>
                  {
                    showPassword ? <FaEye /> : <FaEyeSlash />
                  }
                </div>
              </div>

            </div>

            <button disabled={!valideValue} className={`${valideValue ? "bg-green-800 hover:bg-green-700" : "bg-gray-500"}  text-white py-2 rounded font-semibold`}>Register</button>
          </form>

          <p>
            Already have account ? <Link to={"/login"} className="font-semibold text-green-800 hover:text-green-700">Login</Link>
          </p>
        </div>
      </section>
    </div>
  )
}

export default Register