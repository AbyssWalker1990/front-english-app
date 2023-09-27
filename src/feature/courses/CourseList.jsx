import { useGetCoursesQuery } from './courseApiSlice'
import CoursePromo from './CoursePromo'
import { useAddNewCourseMutation } from './courseApiSlice'
import { useAddAndSetActiveCourseMutation } from '../profile/profileApiSlice'
import { useRef } from 'react'

const CourseList = () => {
  const {
    data: courses,
    isLoading,
    isSuccess,
    isError,
    refetch,
    error,
  } = useGetCoursesQuery()

  const selectRef = useRef()

  const [addNewCourse] = useAddNewCourseMutation()
  const [addAndSetActiveCourse] = useAddAndSetActiveCourseMutation()

  const onCreateCourseHandle = async () => {
    console.log('Creating Course')
    await addNewCourse()
    refetch()
  }

  const selectActiveCourse = async () => {
    console.log(selectRef.current.value)
    const data = {
      courseTitle: selectRef.current.value,
      username: 'admin',
    }
    await addAndSetActiveCourse(data)
  }

  console.log(courses)

  let content
  let coursesSelect

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

    coursesSelect = courses.ids.map((courseId) => {
      const curCourse = courses.entities[courseId]
      return (
        <option key={curCourse._id} value={curCourse.title}>
          {curCourse.title}
        </option>
      )
    })

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
        <br />
        <hr />
        <br />
        <header>
          <h1>Select Active Course:</h1>
          <label htmlFor='active-course'> Choose type:</label>
          <select
            ref={selectRef}
            id='active-course'
            name='active-course'
            onChange={selectActiveCourse}
          >
            <option value=''></option>
            {coursesSelect}
          </select>
        </header>
      </section>
    )
    console.log(content)
  }

  return content
}

export default CourseList
