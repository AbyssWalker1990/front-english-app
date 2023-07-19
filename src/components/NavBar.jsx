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
        <div className="logo">
          <Link to="/">
            <h1 className="nav-header__title">Navbar</h1>
          </Link>
        </div>
        <nav className="nav-header__nav">
          <ul>

            <li>
              <Link onClick={sendLogout} to="/">
                Logout
              </Link>
            </li>
            <li>
              <Link to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                Register
              </Link>
            </li>
            <li>
              <Link to="/test">
                Protected
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  )
}
export default NavBar
