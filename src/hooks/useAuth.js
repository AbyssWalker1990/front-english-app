import { useSelector } from 'react-redux'
import { selectCurrentToken } from "../feature/auth/authSlice"
import jwtDecode from 'jwt-decode'

const useAuth = () => {
  const token = useSelector(selectCurrentToken)
  let isManager = false
  let isAdmin = false
  let status = "User"

  if (token) {
    const decoded = jwtDecode(token)
    console.log('decoded: ', decoded)
    const { username, roles } = decoded.UserInfo
    console.log('FROM useAuth: ', username, roles)

    isManager = roles.includes('Manager')
    isAdmin = roles.includes('Admin')

    if (isManager) status = "Manager"
    if (isAdmin) status = "Admin"

    return { username, roles, status, isManager, isAdmin }
  }

  return { username: '', roles: [], isManager, isAdmin, status }
}
export default useAuth