import ExerciseList from "./ExerciseList"
import { useState, useEffect } from "react"
import { useSetBlockAnswersMutation } from "../profile/profileApiSlice"

const ExerciseBlock = ({ curLesson, block, courseId }) => {
  const [answers, setAnswers] = useState([])
  const [isComplete, setIsComplete] = useState(false)

  const [setBlockAnswers] = useSetBlockAnswersMutation()

  useEffect(() => {
    let exercises
    if (block) {
      exercises = block.blockExercises.map(exercise => {
        return {
          exercisePos: exercise.exercisePos,
          studentsAnswer: ''
        }
      })
      setAnswers(exercises)
    }
  }, [block])

  useEffect(() => {
    if (answers.length > 0) {
      if (answers.every(answer => answer.studentsAnswer.length > 0)) {
        setIsComplete(true)
      }
    }
  }, [answers, isComplete])

  const onClickSaveAnswers = async () => {
    const exerciseBlockData = {
      courseId,
      lessonPosition: curLesson.lessonPosition,
      blockPosition: block.blockPosition,
      exerciseAnswers: answers
    }
    await setBlockAnswers(exerciseBlockData)
  }

  const content = (
    <article key={`${curLesson._id}-block-${block.blockPosition}`} className="border-green vert-margin">
      <header>
        <h1>{block.blockPosition}. {block.blockDescription}</h1>
      </header>
      <main>
        <ExerciseList
          key={block.blockExercises._id}
          exercises={block.blockExercises}
          setAnswers={setAnswers}
        />
      </main>
      <button onClick={onClickSaveAnswers} disabled={!isComplete}>Save Answers</button>
    </article>
  )

  return (
    content
  )
}

export default ExerciseBlock