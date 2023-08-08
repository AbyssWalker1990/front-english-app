import { useParams } from "react-router-dom"
import { useGetProfileQuery } from '../../profile/profileApiSlice'
import ExerciseBlockResults from "./ExerciseBlockResults"

const LessonResults = () => {

  const { courseId, lessonPos } = useParams()

  const {
    data: profileData,
    isSuccess: profileIsSuccess,
    refetch: refetchProfile
  } = useGetProfileQuery()



  let content

  if (profileIsSuccess) {
    console.log(profileData)
    console.log('courseId: ', courseId)
    console.log('lessonPos: ', lessonPos)
    const curCourse = profileData.coursesAnswers.find(answer => answer.courseId === courseId)
    const curLesson = curCourse.courseResults.find(lesson => lesson.lessonPosition === Number(lessonPos))

    console.log('curLesson: ', curLesson)

    const exerciseBlocks = curLesson.exercisesBlocks.map(block => (
      <ExerciseBlockResults key={`${block._id}`} block={block} />
    ))

    console.log(content)

    content = (
      <main>
        {exerciseBlocks}
        <hr />
        <h1>Lesson: </h1>
        <p>Right Answers: {curLesson.lessonResultRight}</p>
        <p>Wrong Answers: {curLesson.lessonResultWrong}</p>
        <p>Total: {curLesson.lessonResultPercent}</p>
      </main>
    )
    // const curLesson = profileData. 
  }

  return (
    <section>
      {content}
    </section>
  )
}

export default LessonResults