import React from 'react'

const EditExercisesForm = ({ exercises, lessonPosition }) => {

  const exerciseContent = exercises.map(exercise => {
    const { exercisePos, exerciseType, exerciseDescription, exerciseQuizAnswers, correctAnswer } = exercise

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
          <h1>{exercisePos}. Type: {exerciseType}</h1>
          <p>Exercise description: {exerciseDescription}</p>
          < fieldset >
            <legend>Select correct Answer:</legend>
            {exerciseAnswersPromo}
          </fieldset>
        </div>
        <div id={`answer-edit-${exercise._id}`}>
          {exerciseAnswersEdit}
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
