import ExerciseList from "./ExerciseList"
import { useState, useEffect } from "react"
import { useSetBlockAnswersMutation } from "../profile/profileApiSlice"

const ExerciseBlock = ({ curLesson, block, courseId, studentAnswers }) => {

  const [answers, setAnswers] = useState([])
  const [isComplete, setIsComplete] = useState(false)

  const [setBlockAnswers] = useSetBlockAnswersMutation()

  const curBlockStudentsAnswers = studentAnswers.lessons[curLesson.lessonPosition - 1].exercisesBlocks[block.blockPosition - 1].blockExercises

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
      if (answers.every(answer => answer.studentsAnswer?.length > 0)) {
        setIsComplete(true)
      }
    }
    console.log('answers: ', answers)
  }, [answers, isComplete])

  useEffect(() => {
    const inputBlock = document.getElementById(`block-${block.blockPosition}`)
    // console.log('inputBlock: ', inputBlock)
    if (inputBlock === null) {
      console.error("The inputBlock variable is null.");
    } else {
      const inputElements = inputBlock.querySelectorAll("input");
      // console.log('inputElements: ', inputElements)
      curBlockStudentsAnswers.forEach((answer, index) => {
        // console.log('curBlockStudentsAnswers: ', curBlockStudentsAnswers)
        // console.log('index: ', index)
        // console.log('inputElements[index]: ', inputElements[index])
        inputElements[index].value = answer.studentsAnswer ?? ''
      })
      let isAllInputsDone = true
      inputElements.forEach(element => {
        if (element.value.length < 1) isAllInputsDone = false
      })
      setIsComplete(isAllInputsDone)
      const updatedExercises = curBlockStudentsAnswers.map((exercise, index) => {
        return {
          exercisePos: index + 1,
          studentsAnswer: exercise.studentsAnswer
        }
      })
      setAnswers(updatedExercises)
    }
  }, [block.blockPosition])

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
      <main id={`block-${block.blockPosition}`}>
        <ExerciseList
          key={block.blockExercises._id}
          exercises={block.blockExercises}
          setAnswers={setAnswers}
          blockPosition={block.blockPosition}
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