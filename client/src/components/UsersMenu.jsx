import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Divider from './Divider'
import Axios from '../utils/Axios'
import SummryApi from '../common/SummaryApi'
import { logout } from '../store/userSlice'
import toast from 'react-hot-toast'
import AxiosToastError from '../utils/AxiosToastError'

const UsersMenu = ({close}) => {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleLogout = async () => {
        console.log("first")
        try {
            const response = await Axios({
                ...SummryApi.logout
            })
            console.log("logout",response)

            if (response.data.success) {
                close()
                dispatch(logout())
                localStorage.clear()
                toast.success(response.data.message)
                navigate("/")
            }
        } catch (error) {
            AxiosToastError(error)
            console.log(error)
        }
    }
    return (
        <>
            <div className='text-semibold'>My Account</div>
            <div className='text-sm'>{user.name || user.mobile}</div>

            <Divider />

            <div className='text-sm grid gap-2'>
                <Link to={""} className='p-2 hover:bg-orange-200'>My Orders</Link>
                <Link to={""} className='p-2 hover:bg-orange-200'>Save Address</Link>
                <button onClick={handleLogout} className='text-left px-2 hover:bg-orange-200 py-1'>Log Out</button>
                </div>
        </>
    )
}

export default UsersMenu