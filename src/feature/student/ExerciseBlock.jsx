import ExerciseList from './ExerciseList'
import { useState, useEffect } from 'react'
import { useSetBlockAnswersMutation } from '../profile/profileApiSlice'
import { toast } from 'react-toastify'

const ExerciseBlock = ({ curLesson, block, courseId, studentAnswers }) => {
  const [answers, setAnswers] = useState([])
  const [isComplete, setIsComplete] = useState(false)
  let curBlockStudentsAnswers

  const [setBlockAnswers] = useSetBlockAnswersMutation()
  // console.log('damaged: ', studentAnswers.lessons[curLesson.lessonPosition - 1].exercisesBlocks[block.blockPosition - 1].blockExercises)
  try {
    curBlockStudentsAnswers =
      studentAnswers.lessons[curLesson.lessonPosition - 1].exercisesBlocks[
        block.blockPosition - 1
      ].blockExercises
  } catch (error) {
    curBlockStudentsAnswers = [{ exercisePos: 1, studentsAnswer: '' }]
  }

  // useEffect(() => {
  //   let exercises
  //   if (curLesson) {
  //     const currentBlock = curLesson.exercisesBlocks.find(curBlock => curBlock.blockPosition === block.blockPosition)
  //     console.log('currentBlock: ', currentBlock)
  //     console.log('block.blockPosition: ', block.blockPosition)
  //     exercises = currentBlock.blockExercises.map(exercise => {
  //       return {
  //         exercisePos: exercise.exercisePos,
  //         studentsAnswer: ''
  //       }
  //     })
  //     setAnswers(exercises)
  //   }
  // }, [block])

  useEffect(() => {
    if (answers.length > 0) {
      if (answers.every((answer) => answer.studentsAnswer?.length > 0)) {
        setIsComplete(true)
      }
    }
  }, [answers, isComplete])

  useEffect(() => {
    let exercises
    if (curLesson) {
      const currentBlock = curLesson.exercisesBlocks.find(
        (curBlock) => curBlock.blockPosition === block.blockPosition
      )
      exercises = currentBlock.blockExercises.map((exercise) => {
        return {
          exercisePos: exercise.exercisePos,
          studentsAnswer: '',
        }
      })
      setAnswers(exercises)
    }

    const inputBlock = document.getElementById(`block-${block.blockPosition}`)
    // console.log('inputBlock: ', inputBlock)
    if (inputBlock === null) {
      console.error('The inputBlock variable is null.')
    } else {
      const inputElements = inputBlock.querySelectorAll('input')
      // console.log('inputElements: ', inputElements)
      curBlockStudentsAnswers.forEach((answer, index) => {
        // console.log('curBlockStudentsAnswers: ', curBlockStudentsAnswers)
        // console.log('index: ', index)
        // console.log('inputElements[index]: ', inputElements[index])
        inputElements[index].value = answer.studentsAnswer ?? ''
      })
      let isAllInputsDone = true
      inputElements.forEach((element) => {
        if (element.value.length < 1) isAllInputsDone = false
      })
      setIsComplete(isAllInputsDone)
      const updatedExercises = curBlockStudentsAnswers.map(
        (exercise, index) => {
          return {
            exercisePos: index + 1,
            studentsAnswer: exercise.studentsAnswer,
          }
        }
      )
      console.log('updatedExercises: ', updatedExercises)
      console.log('exercises: ', exercises)
      if (updatedExercises.length < exercises.length) {
        const answersRemains = exercises.slice(updatedExercises.length)
        console.log('answersRemains: ', answersRemains)
        updatedExercises.push(...answersRemains)
      }
      setAnswers(updatedExercises)
    }
  }, [block.blockPosition])

  const onClickSaveAnswers = async () => {
    const exerciseBlockData = {
      courseId,
      lessonPosition: curLesson.lessonPosition,
      blockPosition: block.blockPosition,
      exerciseAnswers: answers,
    }
    const result = await setBlockAnswers(exerciseBlockData)
    console.log('result: ', result)
    if (result.error) {
      toast.error(`Error!!`, {
        position: toast.POSITION.TOP_RIGHT,
      })
    } else {
      toast.success(`Answers Updated!!!`, {
        position: toast.POSITION.TOP_RIGHT,
      })
    }
  }

  const content = (
    <article
      key={`${curLesson._id}-block-${block.blockPosition}`}
      className='border-green vert-margin'
    >
      <header>
        <h1>
          {block.blockPosition}. {block.blockDescription}
        </h1>
      </header>
      <main id={`block-${block.blockPosition}`}>
        <ExerciseList
          key={block.blockExercises._id}
          exercises={block.blockExercises}
          setAnswers={setAnswers}
          blockPosition={block.blockPosition}
        />
      </main>
      <button
        className='main-button'
        onClick={onClickSaveAnswers}
        disabled={!isComplete}
      >
        Save Answers
      </button>
    </article>
  )

  return content
}

export default ExerciseBlock
