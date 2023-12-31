import { useSelector } from 'react-redux'
import { selectCourseById } from '../courses/courseApiSlice'
import { Link } from 'react-router-dom'
import { useDeleteCourseMutation } from '../courses/courseApiSlice'

const CoursePromo = ({ id, refetch }) => {
  const course = useSelector((state) => selectCourseById(state, id))
  console.log('Course from CoursePromo: ', course)

  const [deleteCourse] = useDeleteCourseMutation()

  const onDeleteHandle = async () => {
    console.log('deleting course')
    await deleteCourse(id)
    refetch()
  }

  if (course) {
    return (
      <li>
        <Link to={`/courses/${id}`}>
          <h2>{course.title}</h2>
        </Link>
        <p>{course.description.substr(0, 150) + ' ...'}</p>
        <br />
        <div className='course-list-button'>
          <button className='main-button'>
            <Link to={`/courses/${id}/edit`}>EDIT COURSE</Link>
          </button>
          <button className='main-button' onClick={onDeleteHandle}>
            DELETE COURSE
          </button>
        </div>
      </li>
    )
  } else return null
}

export default CoursePromo
