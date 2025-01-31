import { createBrowserRouter } from 'react-router-dom'
import App from '../App.jsx';
import Home from '../pages/Home.jsx';
import Searchpages from '../pages/Searchpages.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx'
import ForgotPassword from '../pages/ForgotPassword.jsx';

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
                path:"/forgot-password",
                element: <ForgotPassword/>
            }
            
        ]
    }
])

export default router