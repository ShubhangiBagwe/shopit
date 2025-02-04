


import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast';
import Axios from "../utils/Axios.js"
import SummaryApi from '../common/SummaryApi.js';
import AxiosToastError from '../utils/AxiosToastError.js'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const OtpVerification = () => {
  const [data, setData] = useState(["", "", "", "", "", ""])
  const navigate = useNavigate()
  const inputRef = useRef([])
  const location = useLocation()

  console.log(location, "location")

  useEffect(() => {
    if (!location?.state?.email) {
      navigate("/forgot-password")
    }
  }, [])

  const valideValue = data.every(el => el)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await Axios({
        ...SummaryApi.forgot_password_otp_verification,
        data: {
          otp: data.join(""),
          email: location?.state?.email
        }
      })

      if (response.data.error) {
        toast.error(response.data.message)
      }

      if (response.data.success) {
        toast.success(response.data.message)
        setData(["", "", "", "", "", ""])
        navigate("/reset-password", {
          state: {
            data: response.data,
            email: location?.state?.email
          }
        })
      }

    } catch (error) {
      AxiosToastError(error)
    }

  }

  return (
    <div>
      <section className='w-full container mx-auto px-2'>
        <div className='bg-white my-4 w-full max-w-lg mx-auto rounded p-6'>
          <p className='font-semibold text-lg mb-5'>Enter OTP</p>

          <form className='grid gap-4 mt-6' onSubmit={handleSubmit}>
            <div className='grid gap-1'>
              <label htmlFor='otp'>Enter Your OTP :</label>

              <div className='flex items-center gap-2 justify-between'>
                {
                  data.map((element, index) => {
                    return (
                      <input
                        key={"otp" + index}
                        type='text'
                        id="otp"
                        value={data[index]}
                        ref={(ref) => {
                          inputRef.current[index] = ref
                          return ref
                        }}
                        onChange={(e) => {
                          const value = e.target.value
                          console.log(value, "valuee")
                          const newData = [...data]
                          newData[index] = value
                          setData(newData)

                          if (value && index < 5) {
                            inputRef.current[index + 1].focus()
                          }
                        }}
                        maxLength={1}
                        className='bg-blue-50 max-w-14 w-full p-2 border rounded outline-none focus-within:border-[#ffbf00]'
                      />
                    )
                  })
                }
              </div>

            </div>
            <button disabled={!valideValue} className={`${valideValue ? "bg-green-800 hover:bg-green-700" : "bg-gray-500"}  text-white py-2 rounded font-semibold`}>Verify Otp</button>
          </form>

          <p>
            Already have account ? <Link to={"/login"} className="font-semibold text-green-800 hover:text-green-700">Login</Link>
          </p>
        </div>
      </section>
    </div>
  )
}

export default OtpVerification