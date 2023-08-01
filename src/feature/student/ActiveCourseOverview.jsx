import useAuth from "../../hooks/useAuth"
import { useState, useEffect } from "react"
import { useGetProfileQuery } from '../profile/profileApiSlice'

const ActiveCourseOverview = () => {
  const { username } = useAuth()

  const [currentCourse, setCurrentCourse] = useState()

  let activeCourse = null

  useEffect(() => {
    if (activeCourse) setCurrentCourse(activeCourse)
  }, [activeCourse])

  const {
    data: profileData,
    isLoading,
    isSuccess,
    isError,
    refetch,
    error
  } = useGetProfileQuery()

  if (isSuccess) {
    console.log('Profile data fetched')
    activeCourse = profileData.activeCourse
  }

  return (
    <h1>ACTIVE COURSE: {activeCourse}</h1>
  )
}

export default ActiveCourseOverview