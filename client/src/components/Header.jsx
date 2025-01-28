import React from 'react'
import logo from '../assets/logo.png'
import { FaRegCircleUser } from "react-icons/fa6";
import Search from './search';
import { Link } from 'react-router-dom'
// import useMobile from '../hooks/useMobile'

const Header = () => {
    // const [isMobile]= useMobile()
    // const location = useLocation()

    // console.log(location)
    // console.log(isMobile)
    return (
        <header className='h-24 lg:h-20 lg:shadow-md sticky top-0 bg-red-500 flex flex-col justify-center gap-1'>
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
                    <button className='text-neutral-600 lg:hidden'>
                        <FaRegCircleUser size={26} />
                    </button>
                    <div className='hidden lg:block'>
                        Login and My Chart
                    </div>
                </div>

            </div>

            <div className='container mx-auto px-2 lg:hidden'>
                <Search />
            </div>
        </header>
    )
}

export default Header