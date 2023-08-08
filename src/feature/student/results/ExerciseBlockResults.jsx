import SingleExerciseResult from "./SingleExerciseResult"

const ExerciseBlockResults = ({ block }) => {

  const exercisesList = block.blockExercises.map(exercise => (
    <SingleExerciseResult key={exercise._id} exercise={exercise} />
  ))

  const exerciseBlock = (
    <article id={`block-${block._id}`}>
      <h1>
        {block.blockPosition}. Exercise Block | Right Answers: {block.blockResultRight} |
        Wrong Answers: {block.blockResultWrong} | Total: {block.blockResultPercent}%
      </h1>

      {exercisesList}

    </article>
  )

  return exerciseBlock
}

export default ExerciseBlockResults