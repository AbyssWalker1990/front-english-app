import { Link } from "react-router-dom";
import { useSendLogoutMutation } from "../feature/auth/authApiSlice";
import useAuth from "../hooks/useAuth";

const NavBar = () => {
  const [sendLogout, { isLoading, isSuccess, isError, error }] =
    useSendLogoutMutation();

  const { username, roles, isAdmin } = useAuth();
  console.log("isAdmin: ", isAdmin);
  const userRoles = roles ?? [];
  console.log(userRoles);
  let userInfo;
  username
    ? (userInfo = <Link to="/profile">{username}</Link>)
    : (userInfo = "Guest");

  const logSection = (
    <div>
      {username ? (
        <div className="nav-button">
          <Link className="nav-button-link" onClick={sendLogout} to="/">
            вийти
          </Link>
        </div>
      ) : (
        <div className="nav-button">
          <Link className="nav-button-link" to="/login">
            увійти
          </Link>
        </div>
      )}
    </div>
  );
  return (
    <header className="nav-header">
      <div className="logo">
        <Link to="/">
          <img src="img/logo-sm.png" alt="logo" />
        </Link>
      </div>
      <nav>
        <ul>
          {userRoles.includes("Admin") ? (
            <li>
              <Link to="/adminpage">Admin Page</Link>
            </li>
          ) : null}

          <li>
            <Link to="/active-course">Курси</Link>
          </li>
          <li>
            <Link to="/active-course">Про нас</Link>
          </li>
          <li>
            <Link to="/active-course">Відгуки</Link>
          </li>
          <li>
            <Link to="/active-course">Наші партнери</Link>
          </li>
          <li>
            <Link to="/active-course">Контакти</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
      {logSection}
    </header>
  );
};
export default NavBar;
