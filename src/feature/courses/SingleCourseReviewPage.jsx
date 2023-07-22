import { useSelector } from 'react-redux'
import { selectCourseById } from '../courses/courseApiSlice'
import { useParams } from 'react-router-dom'

const SingleCourseReviewPage = () => {
  const { id } = useParams()
  const course = useSelector(state => selectCourseById(state, id))
  const { lessons } = course

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
          <p>{JSON.stringify(lessons)}</p>
        </div>
      </section>
    </>
  )
}

export default SingleCourseReviewPage