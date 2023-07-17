import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
      <NavBar />
      <div id='main-container'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout
