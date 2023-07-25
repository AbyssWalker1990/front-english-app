import { useState, useEffect } from 'react'
import EditLessonForm from './EditLessonForm'


const EditCourseForm = ({ course }) => {

  const [curTitle, setCurTitle] = useState('')

  useEffect(() => {
    setCurTitle(course)
  }, [course])


  const { title, description, lessons } = course

  const lessonsContent = lessons.map(lesson => (
    <EditLessonForm key={lesson._id} lesson={lesson} />
  ))

  return (
    <section>
      <header>
        <article>
          <label htmlFor="course-title">Title: </label>
          <input
            type="text"
            id="course-title"
            defaultValue={title}
          />
        </article>
        <article>
          <label htmlFor="course-description">Description: </label>
          <textarea
            id="course-description"
            defaultValue={description}
          />
        </article>
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