import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import toast, { Toaster } from 'react-hot-toast';
import fetchUserDetails from './utils/fetchUserDetails';
import { useEffect } from 'react';
import { setUserDetails } from './store/userSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()

  const fetchUser = async () => {
    const userData = await fetchUserDetails()
    // console.log("userData",userData.data.data)
    dispatch(setUserDetails(userData.data.data))
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <>
      <Header />
      <main className='min-h-[80vh]'>
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </>
  )
}

export default App
