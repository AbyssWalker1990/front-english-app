import { Link } from 'react-router-dom'
import { useSendLogoutMutation } from '../feature/auth/authApiSlice'

const NavBar = () => {
  const [sendLogout, {
    isLoading,
    isSuccess,
    isError,
    error
  }] = useSendLogoutMutation()

  return (
    <header className="nav-header">
      <div className="nav-header__container">
        <Link to="/">
          <h1 className="nav-header__title">Navbar</h1>
        </Link>
        <nav className="nav-header__nav">
          <button onClick={sendLogout}>Logout</button>
        </nav>
      </div>
    </header>
  )
}
export default NavBar
