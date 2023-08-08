const SingleExerciseResult = ({ exercise }) => {


  return (
    <p>{exercise.exercisePos}. Your Answer: {exercise.studentsAnswer} | Result: {exercise.exerciseResult ? 'Right' : 'Wrong'}</p>
  )
}

export default SingleExerciseResult