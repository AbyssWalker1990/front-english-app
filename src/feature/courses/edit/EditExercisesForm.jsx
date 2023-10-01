import { onSelectType } from '../utils/utils'
import { useState, useEffect } from 'react'
import { SaveButton } from './buttons/SaveButton'

const EditExercisesForm = ({
  exercises,
  lessonPosition,
  blockPosition,
  setCurCourse,
  updateCourse,
  curCourse,
}) => {
  const [key, setKey] = useState(0)

  useEffect(() => {
    setKey((prevKey) => prevKey + 1)
  }, [setCurCourse])

  const exerciseContent = exercises.map((exercise) => {
    const {
      exercisePos,
      exerciseType,
      exerciseDescription,
      exerciseQuizAnswers,
      correctAnswer,
    } = exercise

    const onAnswerEdit = (e) => {
      const answersBlock = document.getElementById(
        `answer-edit-${exercise._id}`
      )
      const answers = answersBlock.getElementsByTagName('input')
      const splittedId = e.target.id.split('-')
      const lessonIndex = lessonPosition - 1
      const blockIndex = blockPosition - 1
      const key = splittedId[splittedId.length - 1]
      const answersArray = Array.from(answers).map((answer) => answer.value)
      setCurCourse((prevState) => {
        const duplicate = JSON.parse(JSON.stringify(prevState))
        duplicate.lessons[lessonIndex].exercisesBlocks[
          blockIndex
        ].blockExercises[key - 1].exerciseQuizAnswers = answersArray
        return duplicate
      })
    }

    const onExerciseChange = (e) => {
      const splittedId = e.target.id.split('-')
      const curExercisePosition = Number(splittedId[splittedId.length - 2]) - 1
      const key = splittedId[splittedId.length - 1]
      const lessonIndex = lessonPosition - 1
      const blockIndex = blockPosition - 1
      setCurCourse((prevState) => {
        const duplicate = JSON.parse(JSON.stringify(prevState))
        duplicate.lessons[lessonIndex].exercisesBlocks[
          blockIndex
        ].blockExercises[curExercisePosition][key] = e.target.value
        return duplicate
      })
    }

    const exerciseAnswersPromo = exerciseQuizAnswers.map((answer) => (
      <div key={`radio-${answer}`}>
        <input
          type='radio'
          id={answer.id}
          name={`exercise-${exercisePos}`}
          value={answer}
        />
        <label htmlFor={answer}>{answer}</label>
      </div>
    ))

    const exerciseAnswersEdit = exerciseQuizAnswers.map((answer) => (
      <div key={`edit-answer-${answer}-${Math.random()}`}>
        <p>Answer Position: {exerciseQuizAnswers.indexOf(answer) + 1}</p>
        <input
          type='text'
          id={`answer-${exerciseQuizAnswers.indexOf(answer)}`}
          defaultValue={answer}
        />
        <button
          className='save-button'
          id={`answers-${exercise._id}-${exercisePos}`}
          onClick={onAnswerEdit}
        >
          Save Answers
        </button>
      </div>
    ))

    return (
      <div
        key={`key-exercise-${exercise._id}-${lessonPosition}`}
        id={`exercise-${exercise._id}-${lessonPosition}`}
        className='border padding-all vert-margin border-orange'
      >
        <div>
          <label htmlFor='exercise-type'> Choose type:</label>
          <select
            id={`exercise-type-${exercise._id}`}
            onChange={(e) =>
              onSelectType(
                e,
                exercise._id,
                setCurCourse,
                lessonPosition,
                blockPosition,
                exercisePos
              )
            }
          >
            <option value={exerciseType}>{exerciseType}</option>
            <option value='quiz'>quiz</option>
            <option value='not-quiz'>not-quiz</option>
          </select>
          <div>
            <label htmlFor={`edit-${exercisePos}-exerciseDescription`}>
              Exercise Description:{' '}
            </label>
          </div>
          <textarea
            id={`edit-${exercisePos}-exerciseDescription`}
            rows='4'
            cols='50'
            onChange={onExerciseChange}
            defaultValue={exerciseDescription}
          />
        </div>
        <div id={`quiz-options-${exercise._id}`} className='hidden'>
          {/* < fieldset >
            <legend>Select correct Answer:</legend>
            {exerciseAnswersPromo}
          </fieldset> */}
          <div id={`answer-edit-${exercise._id}`}>{exerciseAnswersEdit}</div>
        </div>

        <div id={`correct-answer-edit-${exercise._id}`}>
          <p>Correct answer: </p>
          <input
            type='text'
            id={`edit-${exercisePos}-correctAnswer`}
            onChange={onExerciseChange}
            defaultValue={correctAnswer}
          />
        </div>
        <SaveButton curCourse={curCourse} updateCourse={updateCourse} />
      </div>
    )
  })

  return <>{exerciseContent}</>
}

export default EditExercisesForm
