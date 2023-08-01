import useAuth from "../../hooks/useAuth"
import { useState, useEffect } from "react"
import { useGetProfileQuery } from '../profile/profileApiSlice'
import { useGetCoursesQuery } from "../courses/courseApiSlice"

const ActiveCourseOverview = () => {
  const { username } = useAuth()

  const [currentCourse, setCurrentCourse] = useState()

  let activeCourse = null
  let courseData
  let curCourse

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
  }

  return (
    <section>
      <h1>ACTIVE COURSE: {activeCourse}</h1>
      {JSON.stringify(curCourse)}
    </section >
  )
}

export default ActiveCourseOverview