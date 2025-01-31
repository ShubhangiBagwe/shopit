import React from 'react'
import logo from '../assets/logo.png'
import { FaRegCircleUser } from "react-icons/fa6";
import Search from './search';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BsCart4 } from "react-icons/bs";


import useMobile from '../hooks/useMobile'

const Header = () => {
    const [isMobile] = useMobile()
    const location = useLocation()
    const navigate = useNavigate()

    const isSearchPage = location.pathname === "/search"

    console.log("isSearchPage", isSearchPage)
    // console.log(location)
    // console.log(isMobile)

    const redirectToLoginPage = () => {
        navigate("/login")
    }

    return (
        <header className='h-24 lg:h-20 lg:shadow-md sticky top-0 flex flex-col justify-center gap-1 bg-white'>

            {!(isSearchPage && isMobile) && (
                <div className='container mx-auto flex items-center px-2 justify-between'>
                    {/* logo */}
                    <Link to={'/'} className='h-full flex justify-center items-center'>
                        <img src={logo}
                            width={170}
                            height={60}
                            alt='logo'
                            className='hidden lg:block' />
                        <img src={logo}
                            width={120}
                            height={60}
                            alt='logo'
                            className='lg:hidden' />
                    </Link>

                    {/* Search */}
                    <div className='hidden lg:block' >
                        <Search />
                    </div>

                    <div>
                        {/* display only in mobile version */}
                        <button className='text-neutral-600 lg:hidden'>
                            <FaRegCircleUser size={26} />
                        </button>

                        {/* desktop */}
                        <div className='hidden lg:flex items-center gap-10'>
                            <button onClick={redirectToLoginPage} className='text-2xl px-2'>Login</button>
                            <button className='flex items-center gap-2 bg-green-800 hover:bg-green-700 p-3 text-white rounded-sm'>
                                <div className=' animate-bounce '>
                                    <BsCart4 size={25} />
                                </div>
                                <div className='font-semibold'>
                                    <p>My Cart</p>
                                </div>
                            </button>
                        </div>
                    </div>

                </div>
            )}


            <div className='container mx-auto px-2 lg:hidden'>
                <Search />
            </div>
        </header>
    )
}

export default Header