import EditExercisesForm from "./EditExercisesForm"

const EditExercisesBlockForm = ({ exercisesBlock }) => {

  const { blockPosition, blockDescription, blockExercises } = exercisesBlock

  const blockContent = (
    <>

      <p>Exercise Block Position: {blockPosition}</p>
      <input type="text"
        id={`block-description-${blockPosition}`}
        defaultValue={blockDescription} />
      <EditExercisesForm key={exercisesBlock._id} exercises={blockExercises} lessonPosition={blockPosition} />
    </>
  )

  return blockContent
}

export default EditExercisesBlockForm