import React, { useEffect, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { useLocation, useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';


const Search = () => {
    console.log(React) 
    const navigate = useNavigate()
    const location = useLocation()
    const [isSearchPage, setIsSearchPage] = useState(false)

    useEffect(() => {
        const isSearch = location.pathname === '/search'
        setIsSearchPage(isSearch)
    }, [location])


    // const isSearchPage = location.pathname === '/seacrh'
    console.log("search", isSearchPage)


    const redirectToSearchPage = () => {
        navigate("/search")
    }

    return (
        <div className='w-full min-w-[300px] lg:min-w-[450px]  h-11 lg:h-12 rounded-lg border border-gray-200 overflow-hidden flex items-center text-neutral-500 bg-slate-50 group focus-within:border-[#ffbf00]'>
            <button className='flex justify-center items-center h-full p-3 group-focus-within:text-[#ffbf00]'>
                <IoSearch size={22} />
            </button>

            <div className='w-full h-full'>
                {!isSearchPage ? (
                    <div onClick={redirectToSearchPage} className='w-full h-full flex items-center'>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Search Milk',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Search Sugar',
                                1000,
                                'Search bread',
                                1000,
                                'Search coffee',
                                1000,
                                'Search panner',
                                1000,
                                'Search chocolate',
                                1000,
                                'Search curd',
                                1000,
                                'Search curd',
                                1000,
                                'Search rice',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            // style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </div>
                ) : (
                    <div className='w-full h-full'>
                        <input type='text'
                            placeholder='Search for aata,daal and mode'
                            autoFocus={true}
                            className='w-full h-full  bg-transparent outline-none '></input>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Search