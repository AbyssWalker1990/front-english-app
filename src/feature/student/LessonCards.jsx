import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useGetCoursesQuery } from '../courses/courseApiSlice'
import SingleWordCard from './SingleWordCard'

const LessonCards = () => {
  const { courseId, lessonPos } = useParams()

  const {
    data: courses,
    isLoading,
    isSuccess: isCoursesSuccess,
    isError,
    refetch,
    error,
  } = useGetCoursesQuery()

  let cardsContent

  if (isCoursesSuccess) {
    const curentCourse = courses.entities[courseId]
    const currentLesson = curentCourse.lessons.find(
      (lesson) => lesson.lessonPosition === Number(lessonPos)
    )

    const cards = currentLesson.wordCards

    cardsContent = cards.map((card, index) => (
      <SingleWordCard card={card} key={`${currentLesson._id}-${index}`} />
    ))
  }

  return <section id='cards'>{cardsContent}</section>
}

export default LessonCards
