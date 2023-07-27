import EditExercisesForm from "./EditExercisesForm"

const EditExercisesBlockForm = ({ exercisesBlock, lessonPosition, curCourse, setCurCourse }) => {

  const { blockPosition, blockDescription, blockExercises } = exercisesBlock

  const onChangeBlockDescription = (e) => {
    setCurCourse(prevState => {
      const indexLesson = lessonPosition - 1
      const indexBlock = blockPosition - 1
      const duplicate = JSON.parse(JSON.stringify(prevState))
      duplicate.lessons[indexLesson].exercisesBlocks[indexBlock].blockDescription = e.target.value
      return duplicate
    })
  }

  const blockContent = (
    <div className="border-green">
      <p>Exercise Block Position: {blockPosition}</p>
      <div id={`exerciseBlockContent-${exercisesBlock._id}`}>
        <input type="text"
          id={`block-description-${blockPosition}`}
          onChange={onChangeBlockDescription}
          defaultValue={blockDescription} />
        <EditExercisesForm
          key={exercisesBlock._id}
          exercises={blockExercises}
          lessonPosition={lessonPosition}
          blockPosition={blockPosition}
          setCurCourse={setCurCourse} />
      </div>
    </div>
  )

  return blockContent
}

export default EditExercisesBlockForm