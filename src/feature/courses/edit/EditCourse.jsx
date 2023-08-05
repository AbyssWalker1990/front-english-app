import { useGetCoursesQuery } from '../courseApiSlice'
import { useParams } from 'react-router-dom'
import EditCourseForm from './EditCourseForm'

const EditCourse = () => {

  const { id } = useParams()


  const {
    data: courses,
    isLoading,
    isSuccess,
    isError,
    refetch,
    error
  } = useGetCoursesQuery()
  let content


  if (isLoading) content = <p>Loading ...</p>
  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>
  }

  if (isSuccess) {
    const curCourse = courses.entities[id]
    console.log(content)


    content = (
      <section>
        <header>
          <h1>Course Edit: {curCourse.title}</h1>
        </header>
        <hr />
        <br />
        <EditCourseForm course={curCourse} />
      </section>
    )
  }

  return content
}

export default EditCourse