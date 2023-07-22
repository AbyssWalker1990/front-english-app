import { useSelector } from 'react-redux'
import { selectCourseById } from '../courses/courseApiSlice'
import { Link } from 'react-router-dom'


const CoursePromo = ({ id }) => {
  const course = useSelector((state) => selectCourseById(state, id))
  console.log('Course from CoursePromo: ', course)

  if (course) {
    return <li>
      <Link to={`/courses/${id}`}><h2>{course.title}</h2></Link>
      <p>{course.description.substr(0, 150) + ' ...'}</p>
      <br />
    </li>
  } else return null

}

export default CoursePromo