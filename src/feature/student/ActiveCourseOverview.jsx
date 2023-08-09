import useAuth from "../../hooks/useAuth"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useGetProfileQuery, useSetInitAnswersMutation } from '../profile/profileApiSlice'
import { useGetCoursesQuery } from "../courses/courseApiSlice"

const ActiveCourseOverview = () => {
  const { username } = useAuth()

  const [currentCourse, setCurrentCourse] = useState()

  let activeCourse = null
  let curCourse
  let lessons = []
  let courseId
  let progress = 0

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

  const [setInitAnswers] = useSetInitAnswersMutation()

  useEffect(() => {
    if (activeCourse) setCurrentCourse(activeCourse)
  }, [activeCourse])

  if (isCoursesSuccess && isSuccess) {
    console.log('Profile data fetched')
    console.log('Courses Loaded')
    activeCourse = profileData.activeCourse

    courseId = courses.ids.find(id => courses.entities[id].title === activeCourse)
    curCourse = courses.entities[courseId]
    console.log('curCourse: ', curCourse)
    console.log('profileData: ', profileData)
    if (curCourse) {
      progress = `${profileData.coursesAnswers.find(answer => answer.courseId === courseId).courseResults.length}/${curCourse.lessons.length}`


      lessons = curCourse.lessons.map(lesson => {
        console.log('courseId: ', courseId)
        const results = profileData.coursesAnswers.find(answer => answer.courseId === courseId)
          .courseResults.find(result => result.lessonPosition === lesson.lessonPosition)


        console.log('results: ', results)
        return (
          <>
            <li key={lesson._id}>
              {lesson.lessonPosition}. <Link to={`${curCourse._id}/${lesson.lessonPosition}`}>{lesson.lessonTitle}</Link> &nbsp;&nbsp;&nbsp; |
              {results ? <Link to={`../lesson-result/${courseId}/${lesson.lessonPosition}`} relative="path">&nbsp;&nbsp;&nbsp; Results</Link> : ''}
            </li>
          </>
        )
      })
    }
  }


  return (
    <section>
      <h1>ACTIVE COURSE: {activeCourse}</h1>
      <ul id="lesson-list-studen">
        {lessons}
        <br />
        <hr />
        <br />
        <p>Progress: {progress}</p>
      </ul>
    </section >
  )
}

export default ActiveCourseOverview