import { selectCourseById } from './courseApiSlice'
import { useSelector } from 'react-redux'


const CoursePromo = ({ id }) => {

  const course = useSelector(state => selectCourseById(state, id))
  console.log('COURSE from CoursePromo: ', course)
  return (
    <article key={id}>
      <h1>{course.title}</h1>
    </article>
  )
}

export default CoursePromo