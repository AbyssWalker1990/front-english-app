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

  if (isSuccess) {
    console.log('success!!!')
    // const content = courses.ids.map(id => <CoursePromo key={id} id={id} />)
    const { ids } = courses

    console.log('ids: ', ids)

    return ids
  }



}

export default CourseList