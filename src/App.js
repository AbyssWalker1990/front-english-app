import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './feature/auth/Login'
import Welcome from './feature/auth/Welcome'
import Register from './feature/auth/Register'
import ProtectedRoute from './feature/auth/ProtectedRoute'
import Test from './feature/auth/Test'
import OnlyAdmin from './feature/auth/OnlyAdmin'
import AdminPage from './feature/admin/AdminPage'
import CourseList from './feature/courses/CourseList'
import RequireAuth from './feature/auth/RequireAuth'
import SingleCourseReviewPage from './feature/courses/SingleCourseReviewPage'
import { ROLES } from './config/roles'

function App () {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="test" element={<Test />} />

        <Route element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}>
          <Route path='protected' element={<ProtectedRoute />} />

          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path='onlyadmin' element={<OnlyAdmin />} />
            <Route path='adminpage' element={<AdminPage />} />

            <Route path='courses'>
              <Route index element={<CourseList />} />
              <Route path=':id' element={<SingleCourseReviewPage />} />
            </Route>

          </Route>
        </Route>

      </Route>
    </Routes>
  )
}

export default App
