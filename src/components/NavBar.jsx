import { Link } from 'react-router-dom'
import { useSendLogoutMutation } from '../feature/auth/authApiSlice'
import useAuth from '../hooks/useAuth'

const NavBar = () => {
  const [sendLogout, {
    isLoading,
    isSuccess,
    isError,
    error
  }] = useSendLogoutMutation()

  const { username } = useAuth()
  console.log('Username from nav: ', username)
  let userInfo
  username ? userInfo = username : userInfo = 'Guest'

  return (
    <header className="nav-header">
      <div className="nav-header__container">
        <div className="logo">
          <Link to="/">
            <h1 className="nav-header__title">Navbar</h1>
          </Link>
        </div>
        <div className='user-info'>
          <p>Hello, {userInfo}</p>
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
                ProtectedBack
              </Link>
            </li>
            <li>
              <Link to="/protected">
                ProtectedFront
              </Link>
            </li>
            <li>
              <Link to="/adminpage">
                Admin Page
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  )
}
export default NavBar
