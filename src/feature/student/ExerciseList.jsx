
const ExerciseList = ({ exercises, setAnswers }) => {



  let content = null

  const handleAnswerChange = (e, position) => {
    setAnswers(prevState => {
      console.log('prevState: ', prevState)
      const duplicate = JSON.parse(JSON.stringify(prevState))
      duplicate[position - 1].studentsAnswer = e.target.value
      return duplicate
    })
  }


  if (exercises) {
    content = exercises.map(exercise => (
      <div key={exercise._id} className="exercise-content-student border vert-margin padding-all">
        <p>{exercise.exercisePos}. {exercise.exerciseDescription}</p>
        <div className="exercise-answer-input">
          <label htmlFor={`${exercise._id}-answer`}>Answer: </label>
          <input
            type="text"
            onChange={(e) => handleAnswerChange(e, exercise.exercisePos)}
            id={`${exercise._id}-answer`}
          />
        </div>
      </div>
    ))
  }

  return content
}

export default ExerciseList