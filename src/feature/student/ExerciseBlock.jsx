import ExerciseList from "./ExerciseList"
import { useState, useEffect } from "react"

const ExerciseBlock = ({ curLesson, block }) => {
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    let exercises
    if (block) {
      exercises = block.blockExercises.map(exercise => {
        return {
          exercisePos: exercise.exercisePos,
          studentsAnswer: null
        }
      })
      setAnswers([...exercises])
    }
  }, block)

  const content = (
    <article key={`${curLesson._id}-block-${block.blockPosition}`} className="border-green vert-margin">
      <header>
        <h1>{block.blockPosition}. {block.blockDescription}</h1>
      </header>
      <main>
        <ExerciseList key={block.blockExercises._id} exercises={block.blockExercises} />
      </main>
      <button>Save Answers</button>
    </article>
  )

  return (
    content
  )
}

export default ExerciseBlock