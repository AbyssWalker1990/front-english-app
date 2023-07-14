import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <header className="nav-header">
      <div className="nav-header__container">
        <Link to="/">
          <h1 className="nav-header__title">techNotes</h1>
        </Link>
        <nav className="nav-header__nav">
          {/* add nav buttons later */}
        </nav>
      </div>
    </header>
  )
}
export default NavBar
