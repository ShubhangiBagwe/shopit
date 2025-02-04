import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { FaEyeSlash, FaEye } from "react-icons/fa";
import SummaryApi from '../common/SummaryApi';
import toast from 'react-hot-toast';
import AxiosToastError from '../utils/AxiosToastError';
import Axios from '../utils/Axios';

const ResetPassword = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: "",
        newPassword: "",
        confirmPassword: ""
    })
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)


    const valideValue = Object.values(data).every(el => el)


    useEffect(() => {
        if (!(location?.state?.data?.success)) {
            navigate("/")
        }

        if (location?.state?.email) {
            setData((preve) => {
                return {
                    ...preve,
                    email: location?.state?.email
                }
            })
        }
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(data.newPassword !== data.confirmPassword){
            toast.error("New password and confirm password must be same")
        }

        try {
            const response = await Axios({
                ...SummaryApi.reset_password,
                data: data
            })

            if (response.data.error) {
                toast.error(response.data.message)
            }

            if (response.data.success) {
                toast.success(response.data.message)
                navigate("/login")
                setData({
                    email: "",
                    newPassword: "",
                    confirmPassword: ""
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
                    <p className='font-semibold text-lg mb-5'>Enter Your Password</p>

                    <form className='grid gap-4 mt-6' onSubmit={handleSubmit}>
                        <div className='grid gap-1'>
                            <label htmlFor='newPassword'>New assword:</label>
                            <div className='bg-blue-50 p-2 border rounded flex items-center focus-within:border-[#ffbf00]'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='Enter your password'
                                    autoFocus
                                    className='w-full outline-none'
                                    id='password'
                                    name='newPassword'
                                    value={data.newPassword}
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
                                    placeholder='Enter your confirm password'
                                    autoFocus
                                    className='w-full outline-none'
                                    name='confirmPassword'
                                    value={data.confirmPassword}
                                    onChange={handleChange}
                                />
                                <div onClick={() => setShowConfirmPassword(preve => !preve)} className=' cursor-pointer '>
                                    {
                                        showConfirmPassword ? <FaEye /> : <FaEyeSlash />
                                    }
                                </div>
                            </div>
                        </div>
                        <button disabled={!valideValue} className={`${valideValue ? "bg-green-800 hover:bg-green-700" : "bg-gray-500"}  text-white py-2 rounded font-semibold`}>Change Password</button>
                    </form>

                    <p>
                        Already have account ? <Link to={"/login"} className="font-semibold text-green-800 hover:text-green-700">Login</Link>
                    </p>
                </div>
            </section>
        </div>
    )
}

export default ResetPassword