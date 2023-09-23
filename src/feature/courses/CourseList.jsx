import { useGetCoursesQuery } from './courseApiSlice'
import CoursePromo from './CoursePromo'
import { useAddNewCourseMutation } from './courseApiSlice'

const CourseList = () => {
  const {
    data: courses,
    isLoading,
    isSuccess,
    isError,
    refetch,
    error,
  } = useGetCoursesQuery()

  const [addNewCourse] = useAddNewCourseMutation()

  const onCreateCourseHandle = async () => {
    console.log('Creating Course')
    await addNewCourse()
    refetch()
  }

  console.log(courses)

  let content

  if (isLoading) content = <p>Loading ...</p>

  if (isError) {
    content = <p className='errmsg'>{error?.data?.message}</p>
  }

  if (isSuccess) {
    const { ids } = courses

    const coursesContent = ids?.length
      ? ids.map((courseId) => (
          <CoursePromo key={courseId} id={courseId} refetch={refetch} />
        ))
      : null

    content = (
      <section>
        <header>
          <h1>Available Courses:</h1>
        </header>
        <hr />
        <br />
        <ul className='course-list'>{coursesContent}</ul>
        <br />
        <hr />
        <br />
        <button className='main-button' onClick={onCreateCourseHandle}>
          CREATE COURSE
        </button>
      </section>
    )
    console.log(content)
  }

  return content
}

export default CourseList
