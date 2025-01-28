import { createBrowserRouter } from 'react-router-dom'
import App from '../App.jsx';
import Home from '../pages/Home.jsx';
import Searchpages from '../pages/Searchpages.jsx';

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
            }
        ]
    }
])

export default router