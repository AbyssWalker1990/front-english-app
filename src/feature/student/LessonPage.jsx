import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

import useAuth from "../../hooks/useAuth"
import { useGetProfileQuery, useCalculateLessonResultMutation } from "../profile/profileApiSlice"
import { useGetCoursesQuery } from "../courses/courseApiSlice"
import ExerciseBlock from "./ExerciseBlock"

const LessonPage = () => {
  const { username } = useAuth()
  const { courseId, lessonPos } = useParams()

  const [lesson, setLesson] = useState()
  const [results, setResults] = useState()

  const navigate = useNavigate()

  let curLesson
  let content

  console.log('courseId: ', courseId)
  console.log('lessonPos: ', lessonPos)

  const {
    data: profileData,
    isSuccess: profileIsSuccess,
    refetch: refetchProfile
  } = useGetProfileQuery()

  const [calculateLessonResult, { isError: isCalcError }] = useCalculateLessonResultMutation()

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

  const handleCalcResult = async () => {
    const lessonData = { courseId, lessonPos }
    const result = await calculateLessonResult(lessonData)
    if (result.error) {
      console.log(error)
    } else {
      console.log('Lesson result: ', result)
      navigate(`/lesson-result/${courseId}/${lessonPos}`, { relative: "path" })
    }
  }

  if (isCoursesSuccess && profileIsSuccess) {
    const curCourse = courses.entities[courseId]
    const studentAnswers = profileData.coursesAnswers.find(answer => answer.courseId === courseId)
    console.log('studentAnswers: ', studentAnswers)
    console.log('profileData: ', profileData)
    console.log('curCourse: ', curCourse)
    curLesson = curCourse.lessons.find(lesson => lesson.lessonPosition === Number(lessonPos))
    console.log('curLesson: ', curLesson)

    content = curLesson.exercisesBlocks.map(block => (
      <ExerciseBlock
        key={block._id}
        curLesson={curLesson}
        block={block}
        courseId={courseId}
        studentAnswers={studentAnswers}
      />
    ))
  }

  return (
    <section>
      {content}
      <button onClick={handleCalcResult}>Calculate Result</button>
    </section>
  )


}

export default LessonPage