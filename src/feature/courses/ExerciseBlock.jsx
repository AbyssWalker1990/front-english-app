import Exercise from "./Exercise"

const ExerciseBlock = ({ exerciseBlock }) => {

  const { blockPosition, blockDescription, blockExercises } = exerciseBlock

  const exercisesContent = blockExercises.map(exercise => (
    <Exercise key={exercise._id} exercise={exercise} />
  ))

  const blockContent = (
    <>
      <h1>{blockPosition}. {blockDescription}</h1>
      <div id={`exercise-block-${blockPosition}`}>
        {exercisesContent}
      </div>
    </>
  )

  return blockContent
}

export default ExerciseBlock
