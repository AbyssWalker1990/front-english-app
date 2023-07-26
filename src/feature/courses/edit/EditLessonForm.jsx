import EditExercisesBlockForm from "./EditExercisesBlockForm"
import { SaveButton } from "./buttons/SaveButton"

const EditLessonForm = ({ lesson, setCurCourse, curCourse, updateCourse }) => {
  const { lessonTitle, lessonPosition, lessonDescription, exercisesBlocks } = lesson

  const onChangeLessonHeaders = async (e) => {
    const splittedId = e.target.id.split('-')
    const curLessonPosition = (Number(splittedId[splittedId.length - 2]) - 1)
    const key = splittedId[splittedId.length - 1]
    setCurCourse(prevState => {
      const duplicate = JSON.parse(JSON.stringify(prevState))
      duplicate.lessons[curLessonPosition][key] = e.target.value
      return duplicate
    })
  }

  const exerciseBlockContent = exercisesBlocks.map(block => (
    <EditExercisesBlockForm
      key={block._id}
      exercisesBlock={block}
      lessonPosition={lessonPosition}
      curCourse={curCourse}
      setCurCourse={setCurCourse}
    />
  ))

  const lessonContent = (
    <>
      <div className="lesson-edit-form">
        <h1>{lessonPosition}. Title:</h1>
        <input type="text"
          id={`lesson-${lesson._id}-${lessonPosition}-lessonTitle`}
          onChange={onChangeLessonHeaders}
          defaultValue={lessonTitle} />
      </div>
      <div className="lesson-edit-form">
        <h1>Description: </h1>
        <textarea
          id={`lesson-${lesson._id}-${lessonPosition}-lessonDescription`}
          rows="4"
          cols="50"
          onChange={onChangeLessonHeaders}
          defaultValue={lessonDescription}
        />
        <SaveButton curCourse={curCourse} updateCourse={updateCourse} />
      </div>
      <div className="lesson-edit-form border padding-all">
        <h1>HomeWork: </h1>
        {exerciseBlockContent}
      </div>
    </>
  )

  return (
    <div id={`lesson-${lessonPosition}`} className="border vert-margin padding-all">
      {lessonContent}
    </div>

  )
}

export default EditLessonForm