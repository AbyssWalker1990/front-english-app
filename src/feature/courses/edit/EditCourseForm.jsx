import { useState, useEffect } from 'react'
import EditLessonForm from './EditLessonForm'
import { useUpdateCourseMutation } from '../courseApiSlice'
import { SaveButton } from './buttons/SaveButton'


const EditCourseForm = ({ course }) => {

  const [curCourse, setCurCourse] = useState('')

  const [updateCourse, {
    isLoading,
    isSuccess,
    isError,
    error
  }] = useUpdateCourseMutation()

  useEffect(() => {
    setCurCourse(course)
  }, [course])


  const { title, description, lessons } = course

  const onSaveChanges = async (e) => {
    console.log('saved')
    console.log('curCourse: ', curCourse)
    await updateCourse({ ...curCourse })
    console.log('updated')
  }

  const onChangeCourseHeaders = (e) => {
    const splittedId = e.target.id.split('-')
    const key = splittedId[splittedId.length - 1]
    console.log('key: ', key)
    setCurCourse(prevState => ({
      ...prevState,
      [key]: e.target.value
    }))
  }

  const lessonsContent = lessons.map(lesson => (
    <EditLessonForm
      key={lesson._id}
      lesson={lesson}
      setCurCourse={setCurCourse}
      curCourse={curCourse}
      updateCourse={updateCourse}
    />
  ))

  return (
    <section>
      <header>
        <article>
          <label htmlFor="course-title">Title: </label>
          <input
            type="text"
            id="course-title"
            onChange={onChangeCourseHeaders}
            defaultValue={title}
          />
        </article>
        <article>
          <label htmlFor="course-description">Description: </label>
          <textarea
            onChange={onChangeCourseHeaders}
            id="course-description"
            defaultValue={description}
          />
        </article>
        <SaveButton curCourse={curCourse} updateCourse={updateCourse} />
      </header>
      <br />
      <hr />
      <br />
      <article id="course-lessons">
        <h1>Lessons List: </h1>
        <br />
        {lessonsContent}
      </article>

    </section>
  )
}

export default EditCourseForm