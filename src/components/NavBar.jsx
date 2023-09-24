import { Link } from 'react-router-dom'
import { useSendLogoutMutation } from '../feature/auth/authApiSlice'
import useAuth from '../hooks/useAuth'

const NavBar = () => {
  const [sendLogout, { isLoading, isSuccess, isError, error }] =
    useSendLogoutMutation()

  const { username, roles, isAdmin } = useAuth()
  console.log('isAdmin: ', isAdmin)
  const userRoles = roles ?? []
  console.log(userRoles)
  let userInfo
  username
    ? (userInfo = <Link to='/profile'>{username}</Link>)
    : (userInfo = 'Guest')

  const imageBasePath =
    window.location.protocol + '//' + window.location.host + '/img'

  const logSection = (
    <>
      <div className='log-section'>
        <div id='language'>
          <p className='lang-changer'>Укр</p>
          <p className='lang-changer'>Eng</p>
        </div>
        {username ? (
          <div className='nav-button'>
            <Link className='nav-button-link' onClick={sendLogout} to='/'>
              вийти
            </Link>
          </div>
        ) : (
          <div className='nav-button'>
            <Link className='nav-button-link' to='/login'>
              увійти
            </Link>
          </div>
        )}
      </div>
    </>
  )

  const hamburgerLogSection = (
    <div id='languageHamburger'>
      <p className='lang-changer'>Укр</p>
      <p className='lang-changer'>Eng</p>
    </div>
  )

  return (
    <header className='nav-header'>
      <div className='logo'>
        <Link to='/'>
          <img src={`${imageBasePath}/logo-sm.png`} alt='logo' />
        </Link>
      </div>

      <nav className='hamburger'>
        {hamburgerLogSection}
        <ul>
          {userRoles.includes('Admin') ? (
            <li>
              <Link to='/adminpage'>Admin Page</Link>
            </li>
          ) : null}
          {username ? (
            <>
              <li>
                <Link className='nav-button-link' onClick={sendLogout} to='/'>
                  Вийти
                </Link>
              </li>
              <li>
                <Link className='nav-button-link' onClick={sendLogout} to='/'>
                  Профіль
                </Link>
              </li>
              <li>
                <Link to='/active-course'>Активний курс</Link>
              </li>
            </>
          ) : (
            <li>
              <Link className='nav-button-link' to='/login'>
                Увійти
              </Link>
            </li>
          )}
          <li>
            <Link to='/courses-overview'>Наші курси</Link>
          </li>
          <li>
            <Link to='/about'>Про автора</Link>
          </li>
          <li>
            <Link to='/response'>Відгуки</Link>
          </li>
          <li>
            <Link to='/partners'>Наші партнери</Link>
          </li>
          <li>
            <Link to='/contacts'>Контакти</Link>
          </li>
        </ul>
      </nav>

      <nav className='main'>
        <ul>
          {userRoles.includes('Admin') ? (
            <li>
              <Link to='/adminpage'>Admin Page</Link>
            </li>
          ) : null}
          {username ? (
            <>
              <li>
                <Link to='/profile'>Профіль</Link>
              </li>
              <li>
                <Link to='/active-course'>Активний курс</Link>
              </li>
            </>
          ) : null}
          <li>
            <Link to='/courses-overview'>Наші курси</Link>
          </li>
          <li>
            <Link to='/about'>Про автора</Link>
          </li>
          <li>
            <Link to='/response'>Відгуки</Link>
          </li>
          <li>
            <Link to='/partners'>Наші партнери</Link>
          </li>
          <li>
            <Link to='/contacts'>Контакти</Link>
          </li>
        </ul>
      </nav>
      {logSection}
      <button className='menu-button'>
        <div className='menu-icon'></div>
      </button>
    </header>
  )
}
export default NavBar
