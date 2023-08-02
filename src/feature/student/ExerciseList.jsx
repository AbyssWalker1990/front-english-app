

const ExerciseList = ({ exercises }) => {

  let content = null

  if (exercises) {
    content = exercises.map(exercise => (
      <div key={exercise._id} className="exercise-content-student border vert-margin padding-all">
        <p>{exercise.exercisePos}. {exercise.exerciseDescription}</p>
        <div className="exercise-answer-input">
          <label htmlFor={`${exercise._id}-answer`}>Answer: </label>
          <input type="text" id={`${exercise._id}-answer`} />
        </div>
      </div>
    ))
  }

  return content
}

export default ExerciseList