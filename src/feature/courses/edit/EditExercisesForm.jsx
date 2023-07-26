import { onSelectType } from "../utils/utils"

const EditExercisesForm = ({ exercises, lessonPosition }) => {

  const exerciseContent = exercises.map(exercise => {
    const { exercisePos, exerciseType, exerciseDescription, exerciseQuizAnswers, correctAnswer } = exercise

    const onSelect = (e) => {
      const splittedTargetId = e.target.id.split('-')
      const exerciseId = splittedTargetId[splittedTargetId.length - 1]
      const quizDataElement = document.getElementById(`quiz-options-${exercise._id}`)
      console.log('quizDataElement: ', quizDataElement)
      if (e.target.value !== 'quiz') {
        quizDataElement.classList.add('hidden')
      } else {
        quizDataElement.classList.remove('hidden')
      }
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
      </div>
    ))

    return (
      <div key={`key-exercise-${exercise._id}-${lessonPosition}`} id={`exercise-${exercise._id}-${lessonPosition}`} className='border padding-all'>
        <div>
          <label htmlFor="exercise-type"> Choose type:</label>
          <select id={`exercise-type-${exercise._id}`} onChange={(e) => onSelectType(e, exercise._id)}>
            <option value={exerciseType}>{exerciseType}</option>
            <option value="quiz">quiz</option>
            <option value="not-quiz">not-quiz</option>
          </select>
          <p>Exercise description: {exerciseDescription}</p>
        </div>
        <div id={`quiz-options-${exercise._id}`}>
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
            id={`correct-answer-input-${exercise._id}`}
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
