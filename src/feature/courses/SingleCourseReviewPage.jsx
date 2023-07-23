import { useSelector } from 'react-redux'
import { selectCourseById } from '../courses/courseApiSlice'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Lesson from './Lesson'

const SingleCourseReviewPage = () => {
  const [currentCourse, setCurrentCourse] = useState({})
  const { id } = useParams()
  const course = useSelector(state => selectCourseById(state, id))

  useEffect(() => {
    setCurrentCourse(course)
    console.log('From state: ', currentCourse)
  }, [course, currentCourse])

  const formattedLessons = course.lessons.map(lesson => (
    <Lesson key={lesson._id} lesson={lesson} />
  ))

  return (
    <>
      <section>
        <header>
          <h1>Single Course Review</h1>
        </header>
        <div>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <hr />
          {formattedLessons}
        </div>
      </section>
    </>
  )
}

export default SingleCourseReviewPage