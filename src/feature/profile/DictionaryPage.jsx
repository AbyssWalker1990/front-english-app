import { useGetCoursesQuery } from '../courses/courseApiSlice'
import { useGetProfileQuery } from './profileApiSlice'
import SingleWordCard from '../student/SingleWordCard'

const DictionaryPage = () => {
  const { data: courses, isSuccess: isCoursesSuccess } = useGetCoursesQuery()
  const {
    data: profileData,

    isSuccess: isProfileSuccess,
  } = useGetProfileQuery()

  let lessonCardsContent
  let nav

  if (isCoursesSuccess && isProfileSuccess) {
    const activeCourseTitle = profileData.activeCourse

    let currentCourseId

    for (const courseId of courses.ids) {
      if (courses.entities[courseId].title === activeCourseTitle) {
        currentCourseId = courseId
        break
      }
    }

    const currentCourse = courses.entities[currentCourseId]
    const lessons = currentCourse.lessons

    nav = lessons.map((lesson) => (
      <a href={`#${lesson._id}`}>{lesson.lessonTitle}</a>
    ))

    lessonCardsContent = lessons.map((lesson) => (
      <article key={`${lesson._id}-lesson-words`} id={lesson._id}>
        <h1>{lesson.lessonTitle}</h1>
        <section id='cards'>
          {lesson.wordCards.map((card, index) => (
            <SingleWordCard card={card} key={`${lesson._id}-${index}`} />
          ))}
        </section>
      </article>
    ))
  }

  return (
    <>
      <section id='cards'>
        <article className='navCards'>{nav}</article>

        {lessonCardsContent}
        <a className='dictionaryUpArrow' href='#root'>
          <img src='../img/arrow-up.png' alt='up' />
        </a>
      </section>
    </>
  )
}

export default DictionaryPage
