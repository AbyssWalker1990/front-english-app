import { useGetCoursesQuery } from "./courseApiSlice"
import { selectCourseById } from "./courseApiSlice"
import { useParams } from "react-router-dom"
import Lesson from './Lesson'
import { memo, useEffect, useState } from 'react'


const SingleCourseAdmin = () => {
  const [currentCourse, setCurrentCourse] = useState(null)
  const { id } = useParams()
  console.log(id)
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

    const course = courses.entities[id]

    content = (
      <h1>{course.title}</h1>
    )
    console.log(content)
  }
  return content
}

const MemoizedSingleCourseAdmin = memo(SingleCourseAdmin)


export default MemoizedSingleCourseAdmin

