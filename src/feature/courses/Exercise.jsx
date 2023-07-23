

const Exercise = ({ exercise }) => {
  return (
    <div className="exercise">
      <p>{exercise.exercisePos}. {exercise.exerciseDescription}</p>
      <div className="answers">
        {exercise.exerciseQuizAnswers.map(answer => (
          <p>{answer}</p>
        ))}
        <p>Correct Answer: {exercise.correctAnswer}</p>
      </div>
    </div>
  )
}

export default Exercise