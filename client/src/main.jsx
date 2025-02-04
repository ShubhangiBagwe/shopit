import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/index.jsx'
import { store } from './app/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // </StrictMode>,
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
