import useAuth from "../../hooks/useAuth"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useGetProfileQuery } from '../profile/profileApiSlice'
import { useGetCoursesQuery } from "../courses/courseApiSlice"

const ActiveCourseOverview = () => {
  const { username } = useAuth()

  const [currentCourse, setCurrentCourse] = useState()

  let activeCourse = null
  let curCourse
  let lessons = []

  useEffect(() => {
    if (activeCourse) setCurrentCourse(activeCourse)
  }, [activeCourse])

  const {
    data: profileData,
    isSuccess,
  } = useGetProfileQuery()

  const {
    data: courses,
    isLoading,
    isSuccess: isCoursesSuccess,
    isError,
    refetch,
    error
  } = useGetCoursesQuery()



  if (isSuccess) {
    console.log('Profile data fetched')
    activeCourse = profileData.activeCourse
  }

  if (isCoursesSuccess) {
    console.log('Courses Loaded')
    const courseId = courses.ids.filter(id => courses.entities[id].title === activeCourse)
    curCourse = courses.entities[courseId]
    console.log('curCourse: ', curCourse)
    if (curCourse) {
      lessons = curCourse.lessons.map(lesson => (
        <li key={lesson._id}>
          {lesson.lessonPosition}. <Link to={`${curCourse._id}/${lesson.lessonPosition}`}>{lesson.lessonTitle}</Link>
        </li>
      ))
    }
  }


  return (
    <section>
      <h1>ACTIVE COURSE: {activeCourse}</h1>
      <ul id="lesson-list-studen">
        {lessons}
      </ul>
    </section >
  )
}

export default ActiveCourseOverview