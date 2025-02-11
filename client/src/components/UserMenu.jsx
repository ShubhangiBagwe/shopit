import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Divider from './Divider'
import Axios from '../utils/Axios'
import SummryApi from '../common/SummaryApi'
import { logout } from '../store/userSlice'
import toast from 'react-hot-toast'
import AxiosToastError from '../utils/AxiosToastError'
import { HiOutlineExternalLink } from "react-icons/hi";

const UserMenu = ({ close }) => {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleLogout = async () => {
        console.log("first")
        try {
            const response = await Axios({
                ...SummryApi.logout
            })
            console.log("logout", response)

            if (response.data.success) {
                if (close) {
                    close()
                }
                dispatch(logout())
                localStorage.clear()
                toast.success(response.data.message)
                // window.history.back()
                navigate("/")
            }
        } catch (error) {
            AxiosToastError(error)
            console.log(error)
        }
    }

    const handleClose = () => {
        if (close) {
            close()
        }
    }
    
    return (
        <>
            <div className='text-semibold'>My Account</div>
            <div className='text-sm flex items-center gap-2'>
                <span className='max-w-52 text-ellipsis line-clamp-1'>{user.name || user.mobile} <span className='text-medium text-red-600'>{user.role === "ADMIN" ? "(Admin)" : ""}</span></span>
                <Link onClick={handleClose} to={"/dashboard/profile"} className='hover:text-[#ffbf00]'>
                    <HiOutlineExternalLink size={15} />
                </Link>
            </div>
            <Divider />

            <div className='text-sm grid gap-2'>
                <Link to={"/dashboard/myorder"} className='p-2 hover:bg-orange-200'>My Orders</Link>
                <Link to={"/dashboard/address"} className='p-2 hover:bg-orange-200'>Save Address</Link>
                <button onClick={handleLogout} className='text-left px-2 hover:bg-orange-200 py-1'>Log Out</button>
            </div>
        </>
    )
}

export default UserMenu