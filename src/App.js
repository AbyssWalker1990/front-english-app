import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Main from './components/Main'
import AboutPage from './components/AboutPage'
import CoursesPage from './components/CoursesPage'
import PoliticsPage from './components/PoliticsPage'
import Login from './feature/auth/Login'
import Register from './feature/auth/Register'
import ProtectedRoute from './feature/auth/ProtectedRoute'
import AdminPage from './feature/admin/AdminPage'
import ResponsePage from './components/ResponsePage'
import PartnerPage from './components/PartnerPage'
import CourseList from './feature/courses/CourseList'
import ContactPage from './components/ContactPage'
import OfertaPage from './components/OfertaPage'
import RequireAuth from './feature/auth/RequireAuth'
import PersistLogin from './feature/auth/PersistLogin'
import CreateProfile from './feature/profile/CreateProfile'
import Profile from './feature/profile/Profile'
import Achievments from './feature/profile/Achievments'
import LessonPage from './feature/student/LessonPage'
import LessonCards from './feature/student/LessonCards'
import LessonResults from './feature/student/results/LessonResults'
import ActiveCourseOverview from './feature/student/ActiveCourseOverview'
import MemoizedSingleCourseAdmin from './feature/courses/SingleCourseAdmin'
import AdventureMap from './feature/profile/AdventureMap'
import EditCourse from './feature/courses/edit/EditCourse'
import { ROLES } from './config/roles'
import Prefetch from './feature/auth/Prefetch'
import Standard from './components/Standard'
import PurchaseFinal from './components/PurchaseFinal'
import SuccessPaymentPage from './components/SuccessPaymentPage'
import DictionaryPage from './feature/profile/DictionaryPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Main />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='standard' element={<Standard />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='courses-overview' element={<CoursesPage />} />
        <Route path='contacts' element={<ContactPage />} />
        <Route path='response' element={<ResponsePage />} />
        <Route path='partners' element={<PartnerPage />} />
        <Route path='oferta' element={<OfertaPage />} />
        <Route path='policy' element={<PoliticsPage />} />
        <Route path='success_payment' element={<SuccessPaymentPage />} />

        <Route element={<PersistLogin />}>
          <Route path='create-profile' element={<CreateProfile />} />

          <Route element={<Prefetch />}>
            <Route
              element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}
            >
              <Route path='purchase' element={<PurchaseFinal />} />
              <Route path='protected' element={<ProtectedRoute />} />
              <Route path='profile' element={<Profile />} />
              <Route path='profile/map' element={<AdventureMap />} />
              <Route path='profile/achievments' element={<Achievments />} />
              <Route path='profile/dictionary' element={<DictionaryPage />} />
              <Route path='active-course' element={<ActiveCourseOverview />} />
              <Route
                path='active-course/:courseId/:lessonPos'
                element={<LessonPage />}
              />
              <Route
                path='lesson-result/:courseId/:lessonPos'
                element={<LessonResults />}
              />
              <Route
                path='lesson-cards/:courseId/:lessonPos'
                element={<LessonCards />}
              />

              <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                <Route path='adminpage' element={<AdminPage />} />

                <Route path='courses'>
                  <Route index element={<CourseList />} />

                  <Route path=':id' element={<MemoizedSingleCourseAdmin />} />
                  <Route path=':id/edit' element={<EditCourse />} />
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
