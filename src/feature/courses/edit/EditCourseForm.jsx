import { useState, useEffect } from 'react'
import EditLessonForm from './EditLessonForm'
import { useUpdateCourseMutation, useGetCoursesQuery } from '../courseApiSlice'
import { SaveButton } from './buttons/SaveButton'
import newLesson from '../data/newLesson'

const EditCourseForm = ({ course }) => {
  const [curCourse, setCurCourse] = useState('')

  const {
    data: courses,
    isLoading,
    isSuccess,
    isError,
    refetch,
    error,
  } = useGetCoursesQuery()

  const [updateCourse] = useUpdateCourseMutation()

  useEffect(() => {
    if (isSuccess) {
      const curCourse = courses.entities[course._id]
      setCurCourse(curCourse)
    }
  }, [isSuccess, courses.entities])

  if (curCourse) {
    const { title, description, lessons } = curCourse

    const onSaveChanges = async (e) => {
      console.log('saved')
      const result = await updateCourse({ ...curCourse })
      console.log('Result: ', result)
    }

    const onChangeCourseHeaders = (e) => {
      const splittedId = e.target.id.split('-')
      const key = splittedId[splittedId.length - 1]
      console.log('key: ', key)
      setCurCourse((prevState) => ({
        ...prevState,
        [key]: e.target.value,
      }))
    }

    const handleCreateLessonButton = async () => {
      const position = curCourse.lessons.length + 1
      const formattedLesson = { ...newLesson, lessonPosition: position }
      const updatedLessons = [...curCourse.lessons, formattedLesson]
      const updatedCourse = { ...curCourse, lessons: updatedLessons }
      await updateCourse({ ...updatedCourse })
      console.log('Lesson Added!')
      refetch()
    }

    const handleDeleteLessonButton = async () => {
      const duplicateCourse = JSON.parse(JSON.stringify(curCourse))
      duplicateCourse.lessons.splice(duplicateCourse.lessons.length - 1, 1)
      await updateCourse({ ...duplicateCourse })
      console.log('Lesson Deleted!')
      refetch()
    }

    const lessonsContent = lessons.map((lesson) => (
      <EditLessonForm
        key={lesson._id}
        lesson={lesson}
        setCurCourse={setCurCourse}
        curCourse={curCourse}
        updateCourse={updateCourse}
        refetch={refetch}
      />
    ))

    return (
      <section>
        <header>
          <article>
            <label htmlFor='course-title'>Title: </label>
            <input
              type='text'
              id='course-title'
              onChange={onChangeCourseHeaders}
              defaultValue={title}
            />
          </article>
          <article>
            <label htmlFor='course-description'>Description: </label>
            <textarea
              onChange={onChangeCourseHeaders}
              id='course-description'
              defaultValue={description}
            />
          </article>
          <SaveButton curCourse={curCourse} updateCourse={updateCourse} />
        </header>
        <br />
        <hr />
        <br />
        <article id='course-lessons'>
          <h1>Lessons List: </h1>
          <br />
          {lessonsContent}
          <div id='lesson-buttons' className='createDeleteBlock'>
            <button className='main-button' onClick={handleCreateLessonButton}>
              CREATE LESSON
            </button>
            <button className='main-button' onClick={handleDeleteLessonButton}>
              DELETE LESSON
            </button>
          </div>
        </article>
      </section>
    )
  } else {
    return <p>Loading...</p>
  }
}

export default EditCourseForm
