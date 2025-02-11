import { createBrowserRouter } from 'react-router-dom'
import App from '../App.jsx';
import Home from '../pages/Home.jsx';
import Searchpages from '../pages/Searchpages.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx'
import ForgotPassword from '../pages/ForgotPassword.jsx';
import OtpVerification from '../pages/OtpVerification.jsx'
import ResetPassword from '../pages/ResetPassword.jsx';
import UserMenuMMobile from '../pages/UserMenuMobile.jsx';
import Dashboard from "../layout/Dashboard.jsx"
import Profile from "../pages/Profile.jsx"
import MyOrder from "../pages/MyOrder.jsx"
import Address from '../pages/Address.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/search",
                element: <Searchpages />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/forgot-password",
                element: <ForgotPassword />
            },
            {
                path: "/verification-otp",
                element: <OtpVerification />
            },
            {
                path: "/reset-password",
                element: <ResetPassword />
            },
            {
                path: "/user",
                element: <UserMenuMMobile />
            },
            {
                path: "dashboard",
                element: <Dashboard />,
                children: [
                    {
                        path: "profile",
                        element: <Profile />
                    },
                    {
                        path: "myorder",
                        element: <MyOrder />
                    },
                    {
                        path: "address",
                        element: <Address />
                    },
                ]
            },

        ]
    }
])

export default router