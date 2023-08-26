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

  const { username, roles, isAdmin } = useAuth()
  console.log('isAdmin: ', isAdmin)
  const userRoles = roles ?? []
  console.log(userRoles)
  let userInfo
  username ? userInfo = <Link to='/profile'>{username}</Link> : userInfo = 'Guest'

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

            {username ? (
              <li>
                <Link onClick={sendLogout} to="/">
                  Logout
                </Link>
              </li>
            ): (
              <>
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
              </>
            )}

            {userRoles.includes('Admin') ? (
              <li>
                <Link to="/adminpage">
                  Admin Page
                </Link>
              </li>
            ): null}

            <li>
              <Link to="/active-course">
                Active Course
              </Link>
            </li>


          </ul>
        </nav>
      </div>
    </header>
  )
}
export default NavBar
