import { onSelectType } from "../utils/utils"

const EditExercisesForm = ({ exercises, lessonPosition, blockPosition, setCurCourse }) => {

  const exerciseContent = exercises.map(exercise => {
    const { exercisePos, exerciseType, exerciseDescription, exerciseQuizAnswers, correctAnswer } = exercise

    const onAnswerEdit = (e) => {
      const answersBlock = document.getElementById(`answer-edit-${exercise._id}`)
      const answers = answersBlock.getElementsByTagName('input')
      console.log(answers)
      const answersArray = Array.from(answers).map(answer => answer.value)
      console.log(answersArray)
      setCurCourse(prevState => {
        const duplicate = JSON.parse(JSON.stringify(prevState))
        return duplicate
      })
    }

    const onExerciseChange = (e) => {
      const splittedId = e.target.id.split('-')
      const curExercisePosition = (Number(splittedId[splittedId.length - 2]) - 1)
      const key = splittedId[splittedId.length - 1]

      console.log('curExercisePosition: ', curExercisePosition)
      const lessonIndex = lessonPosition - 1
      const blockIndex = blockPosition - 1
      setCurCourse(prevState => {
        const duplicate = JSON.parse(JSON.stringify(prevState))
        const result = duplicate.lessons[lessonIndex].exercisesBlocks[blockIndex].blockExercises[curExercisePosition][key] = e.target.value
        console.log('result Now: ', result)
        return duplicate
      })
    }

    const exerciseAnswersPromo = exerciseQuizAnswers.map(answer => (
      <div key={`radio-${answer}`}>
        <input type="radio" id={answer.id} name={`exercise-${exercisePos}`} value={answer} />
        <label htmlFor={answer}>{answer}</label>
      </div>
    ))

    const exerciseAnswersEdit = exerciseQuizAnswers.map(answer => (
      <div key={`edit-answer-${answer}`}>
        <p>Answer Position: {exerciseQuizAnswers.indexOf(answer) + 1}</p>
        <input type="text"
          id={`answer-${exerciseQuizAnswers.indexOf(answer)}`}
          defaultValue={answer} />
        <button id={`answers-${exercise._id}-${exercisePos}`} onClick={onAnswerEdit}>
          Save Answers
        </button>
      </div>
    ))


    return (
      <div key={`key-exercise-${exercise._id}-${lessonPosition}`} id={`exercise-${exercise._id}-${lessonPosition}`} className='border padding-all'>
        <div>
          <label htmlFor="exercise-type"> Choose type:</label>
          <select
            id={`exercise-type-${exercise._id}`}
            onChange={(e) => onSelectType(e, exercise._id, setCurCourse, lessonPosition, blockPosition, exercisePos)}
          >
            <option value={exerciseType}>{exerciseType}</option>
            <option value="quiz">quiz</option>
            <option value="not-quiz">not-quiz</option>
          </select>
          <div>
            <label htmlFor={`edit-${exercisePos}-exerciseDescription`}>Exercise Description: </label>
          </div>
          <textarea
            id={`edit-${exercisePos}-exerciseDescription`}
            rows="4"
            cols="50"
            onChange={onExerciseChange}
            defaultValue={exerciseDescription}
          />

        </div>
        <div id={`quiz-options-${exercise._id}`} className='hidden'>
          < fieldset >
            <legend>Select correct Answer:</legend>
            {exerciseAnswersPromo}
          </fieldset>
          <div id={`answer-edit-${exercise._id}`}>
            {exerciseAnswersEdit}
          </div>
        </div>

        <div id={`correct-answer-edit-${exercise._id}`}>
          <p>Correct answer: </p>
          <input type="text"
            id={`edit-${exercisePos}-correctAnswer`}
            onChange={onExerciseChange}
            defaultValue={correctAnswer} />
        </div>
      </div>
    )
  })

  console.log('exerciseContent: ', typeof exerciseContent)


  return (
    <>
      {exerciseContent}
    </>
  )
}

export default EditExercisesForm
