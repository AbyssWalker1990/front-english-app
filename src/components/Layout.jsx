import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <>
      <NavBar />
      <div id='main-container'>
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default Layout
