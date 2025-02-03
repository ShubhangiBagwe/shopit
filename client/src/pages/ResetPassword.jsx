import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ResetPassword = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    useEffect(() => {
        if (!(location?.state?.data.success)) {
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

    console.log(data, "data reset passwordn")
    return (
        <div>ResetPassword</div>
    )
}

export default ResetPassword