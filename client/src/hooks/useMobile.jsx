import React,{ useEffect, useState } from "react"

export const useMobile = (breakpoint = 768) => {
    const [isMobile, setIsMMobile] = useState(window.innerWidth < breakpoint)

    const handleResize = () => {
        const checkpoint = window.innerWidth < breakpoint
        setIsMMobile(checkpoint)
    }
    useEffect(() => {
        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })
    return [isMobile]
}