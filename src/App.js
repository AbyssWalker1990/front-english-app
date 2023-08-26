import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./components/Main";
import Public from "./components/Public";
import Login from "./feature/auth/Login";
import Register from "./feature/auth/Register";
import ProtectedRoute from "./feature/auth/ProtectedRoute";
import AdminPage from "./feature/admin/AdminPage";
import CourseList from "./feature/courses/CourseList";
import RequireAuth from "./feature/auth/RequireAuth";
import PersistLogin from "./feature/auth/PersistLogin";
import CreateProfile from "./feature/profile/CreateProfile";
import Profile from "./feature/profile/Profile";
import LessonPage from "./feature/student/LessonPage";
import LessonResults from "./feature/student/results/LessonResults";
import ActiveCourseOverview from "./feature/student/ActiveCourseOverview";
import MemoizedSingleCourseAdmin from "./feature/courses/SingleCourseAdmin";
import EditCourse from "./feature/courses/edit/EditCourse";
import { ROLES } from "./config/roles";
import Prefetch from "./feature/auth/Prefetch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route element={<PersistLogin />}>
          <Route path="create-profile" element={<CreateProfile />} />

          <Route element={<Prefetch />}>
            <Route
              element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}
            >
              <Route path="protected" element={<ProtectedRoute />} />
              <Route path="profile" element={<Profile />} />
              <Route path="active-course" element={<ActiveCourseOverview />} />
              <Route
                path="active-course/:courseId/:lessonPos"
                element={<LessonPage />}
              />
              <Route
                path="lesson-result/:courseId/:lessonPos"
                element={<LessonResults />}
              />

              <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                <Route path="adminpage" element={<AdminPage />} />

                <Route path="courses">
                  <Route index element={<CourseList />} />

                  <Route path=":id" element={<MemoizedSingleCourseAdmin />} />
                  <Route path=":id/edit" element={<EditCourse />} />
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
