import EditExercisesBlockForm from './EditExercisesBlockForm'
import { SaveButton } from './buttons/SaveButton'
import { useGetCoursesQuery } from '../courseApiSlice'
import newExerciseBlock from '../data/newExerciseBlock'

const EditLessonForm = ({
  lesson,
  setCurCourse,
  curCourse,
  updateCourse,
  refetch,
}) => {
  const { lessonTitle, lessonPosition, lessonDescription, exercisesBlocks } =
    lesson

  const onChangeLessonHeaders = async (e) => {
    const splittedId = e.target.id.split('-')
    const curLessonPosition = Number(splittedId[splittedId.length - 2]) - 1
    const key = splittedId[splittedId.length - 1]
    setCurCourse((prevState) => {
      const duplicate = JSON.parse(JSON.stringify(prevState))
      duplicate.lessons[curLessonPosition][key] = e.target.value
      return duplicate
    })
  }

  const handleMoreButtonClick = (e) => {
    console.log(Object.entries(e.target))
    const splittedId = e.target.id.split('-')
    const id = splittedId[splittedId.length - 1]
    const homework = document.getElementById(`homework-${id}`)
    if (homework.classList.contains('hidden')) {
      homework.classList.remove('hidden')
      e.target.textContent = 'Hide'
    } else {
      homework.classList.add('hidden')
      e.target.textContent = 'More...'
    }
  }

  const handleDeleteExerciseBlock = async () => {
    const indexLesson = lessonPosition - 1
    const indexForDelete =
      curCourse.lessons[indexLesson].exercisesBlocks.length - 1
    const duplicate = JSON.parse(JSON.stringify(curCourse))
    duplicate.lessons[indexLesson].exercisesBlocks.splice(indexForDelete, 1)
    console.log('Block Deleted')
    await updateCourse({ ...duplicate })
    refetch()
  }

  const handleCreateExerciseBlock = async () => {
    const indexLesson = lessonPosition - 1
    const duplicate = JSON.parse(JSON.stringify(curCourse))
    const newBlockPosition =
      curCourse.lessons[indexLesson].exercisesBlocks.length + 1
    const oldBlocks = curCourse.lessons[indexLesson].exercisesBlocks
    const newBlock = { ...newExerciseBlock, blockPosition: newBlockPosition }
    const formattedBlocks = [...oldBlocks, newBlock]
    duplicate.lessons[indexLesson].exercisesBlocks = formattedBlocks
    console.log('New Block Created')
    await updateCourse({ ...duplicate })
    refetch()
  }

  const exerciseBlockContent = exercisesBlocks.map((block) => (
    <EditExercisesBlockForm
      key={block._id}
      exercisesBlock={block}
      lessonPosition={lessonPosition}
      curCourse={curCourse}
      setCurCourse={setCurCourse}
      updateCourse={updateCourse}
    />
  ))

  const lessonContent = (
    <>
      <div className='lesson-edit-form'>
        <h1>
          {lessonPosition}. Title: {lessonTitle}
        </h1>
        <input
          type='text'
          id={`lesson-${lesson._id}-${lessonPosition}-lessonTitle`}
          onChange={onChangeLessonHeaders}
          defaultValue={lessonTitle}
        />
        <button
          className='main-button'
          id={`more-button-${lesson._id}`}
          onClick={handleMoreButtonClick}
        >
          More...
        </button>
      </div>
      <div id={`homework-${lesson._id}`} className='hidden'>
        <div className='lesson-edit-form'>
          <h1>Description: </h1>
          <textarea
            id={`lesson-${lesson._id}-${lessonPosition}-lessonDescription`}
            rows='4'
            cols='50'
            onChange={onChangeLessonHeaders}
            defaultValue={lessonDescription}
          />
          <SaveButton curCourse={curCourse} updateCourse={updateCourse} />
        </div>
        <div className='lesson-edit-form border padding-all'>
          <h1>HomeWork: </h1>
          {exerciseBlockContent}
          <div className='createDeleteBlock'>
            <button className='main-button' onClick={handleCreateExerciseBlock}>
              Add Exercise Block
            </button>
            <button className='main-button' onClick={handleDeleteExerciseBlock}>
              Delete Exercise Block
            </button>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <div
      id={`lesson-${lessonPosition}`}
      className='border vert-margin padding-all border-red'
    >
      {lessonContent}
    </div>
  )
}

export default EditLessonForm
