const ExerciseList = ({ exercises, setAnswers, blockPosition }) => {
  let content = null

  const handleAnswerChange = (e, position) => {
    setAnswers((prevState) => {
      console.log('prevState: ', prevState)
      const duplicate = JSON.parse(JSON.stringify(prevState))
      duplicate[position - 1].studentsAnswer = e.target.value
      return duplicate
    })
  }

  if (exercises) {
    content = exercises.map((exercise) => (
      <div
        key={exercise._id}
        className='exercise-content-student border vert-margin padding-all'
      >
        <p>
          {exercise.exercisePos}. {exercise.exerciseDescription}
        </p>
        {exercise.exerciseType === 'quiz' ? (
          <div className='exercise-answer-input'>
            {exercise.exerciseQuizAnswers.map((quizAnswer, index) => (
              <p>
                {index + 1}. {quizAnswer}
              </p>
            ))}
            <label htmlFor={`${exercise._id}-answer`}>Answer: </label>
            <input
              type='text'
              onInput={(e) => handleAnswerChange(e, exercise.exercisePos)}
              onChange={(e) => handleAnswerChange(e, exercise.exercisePos)}
              id={`${exercise._id}-answer-block-${blockPosition}`}
            />
          </div>
        ) : (
          <div className='exercise-answer-input'>
            <label htmlFor={`${exercise._id}-answer`}>Answer: </label>
            <input
              type='text'
              onInput={(e) => handleAnswerChange(e, exercise.exercisePos)}
              onChange={(e) => handleAnswerChange(e, exercise.exercisePos)}
              id={`${exercise._id}-answer-block-${blockPosition}`}
            />
          </div>
        )}
      </div>
    ))
  }

  return content
}

export default ExerciseList
