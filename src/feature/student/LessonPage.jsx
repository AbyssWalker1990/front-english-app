import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import useAuth from "../../hooks/useAuth"
import { useGetProfileQuery } from "../profile/profileApiSlice"
import { useGetCoursesQuery } from "../courses/courseApiSlice"
import ExerciseList from "./ExerciseList"

const LessonPage = () => {
  const { username } = useAuth()
  const { courseId, lessonPos } = useParams()

  const [lesson, setLesson] = useState()
  let curLesson

  console.log('courseId: ', courseId)
  console.log('lessonPos: ', lessonPos)

  let content

  const {
    data: profileData,
    isSuccess,
  } = useGetProfileQuery()

  const {
    data: courses,
    isLoading,
    isSuccess: isCoursesSuccess,
    isError,
    refetch,
    error
  } = useGetCoursesQuery()

  useEffect(() => {
    if (curLesson) {
      setLesson(curLesson)
    }
  }, [isCoursesSuccess, curLesson])

  if (isCoursesSuccess) {
    const curCourse = courses.entities[courseId]
    console.log('curCourse: ', curCourse)
    curLesson = curCourse.lessons.find(lesson => lesson.lessonPosition === Number(lessonPos))
    console.log('curLesson: ', curLesson)

    content = curLesson.exercisesBlocks.map(block => (
      <article key={`${curLesson._id}-block-${block.blockPosition}`}>
        <header>
          <h1>{block.blockPosition}. {block.blockDescription}</h1>
        </header>
        <main>
          <ExerciseList key={block.blockExercises._id} exercises={block.blockExercises} />
        </main>
      </article>
    ))
  }

  return (
    <section>
      {content}
    </section>
  )


}

export default LessonPage