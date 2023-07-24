import { useGetCoursesQuery } from "./courseApiSlice"
import CoursePromo from "./CoursePromo"

const CourseList = () => {
  const {
    data: courses,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetCoursesQuery()

  console.log(courses)

  let content

  if (isLoading) content = <p>Loading ...</p>

  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>
  }

  if (isSuccess) {

    const { ids } = courses

    const coursesContent = ids?.length
      ? ids.map(courseId => <CoursePromo key={courseId} id={courseId} />)
      : null

    content = (
      <section>
        <header>
          <h1>Available Courses:</h1>
        </header>
        <hr />
        <br />
        <ul>
          {coursesContent}
        </ul>
      </section>
    )
    console.log(content)
  }

  return content
}

export default CourseList