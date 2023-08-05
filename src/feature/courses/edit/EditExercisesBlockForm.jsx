import EditExercisesForm from "./EditExercisesForm"
import newExercise from "../data/newExercise"
import { useGetCoursesQuery, useUpdateCourseMutation } from '../courseApiSlice'

const EditExercisesBlockForm = ({ exercisesBlock, lessonPosition, curCourse, setCurCourse }) => {

  const {
    refetch
  } = useGetCoursesQuery()

  const [updateCourse, {
    isLoading,
    isSuccess,
    isError,
    error
  }] = useUpdateCourseMutation()

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

  const handleAddExerciseButton = async () => {
    const blockIndex = blockPosition - 1
    const lessonIndex = lessonPosition - 1
    const duplicate = JSON.parse(JSON.stringify(curCourse))
    const exercisePosition = blockExercises.length + 1
    const formattedNewExercise = { ...newExercise, exercisePos: exercisePosition }
    console.log('formattedNewExercise: ', formattedNewExercise)
    const newExercises = [...blockExercises, formattedNewExercise]
    duplicate.lessons[lessonIndex].exercisesBlocks[blockIndex].blockExercises = newExercises
    await updateCourse({ ...duplicate })
    refetch()
  }

  const handleDeleteExerciseButton = async () => {
    const blockIndex = blockPosition - 1
    const lessonIndex = lessonPosition - 1
    const duplicate = JSON.parse(JSON.stringify(curCourse))
    const exercisesAfterDelete = blockExercises.slice(0, blockExercises.length - 1)
    duplicate.lessons[lessonIndex].exercisesBlocks[blockIndex].blockExercises = exercisesAfterDelete
    await updateCourse({ ...duplicate })
    refetch()
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
          setCurCourse={setCurCourse}
          updateCourse={updateCourse}
          curCourse={curCourse} />
        <button onClick={handleAddExerciseButton}>Add Exercise</button>
        <button onClick={handleDeleteExerciseButton}>Delete Exercise</button>
      </div>
    </div>
  )

  return blockContent
}

export default EditExercisesBlockForm