import React, { useState } from 'react'
import toast from 'react-hot-toast';
import Axios from "../utils/Axios.js"
import SummaryApi from '../common/SummaryApi.js';
import AxiosToastError from '../utils/AxiosToastError.js'
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [data, setData] = useState({
    email: "",
  })
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

    try {
      const response = await Axios({
        ...SummaryApi.forgot_password,
        data: data
      })

      if (response.data.error) {
        toast.error(response.data.message)
      }

      if (response.data.success) {
        toast.success(response.data.message)
        navigate("/verification-otp", {
          state: data
        })
        setData({
          email: "",
        })
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
          <p className='font-semibold text-lg mb-5'>Forgot Password</p>

          <form className='grid gap-4 mt-6' onSubmit={handleSubmit}>
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
            <button disabled={!valideValue} className={`${valideValue ? "bg-green-800 hover:bg-green-700" : "bg-gray-500"}  text-white py-2 rounded font-semibold`}>Send Otp</button>
          </form>

          <p>
            Already have account ? <Link to={"/login"} className="font-semibold text-green-800 hover:text-green-700">Login</Link>
          </p>
        </div>
      </section>
    </div>
  )
}

export default ForgotPassword