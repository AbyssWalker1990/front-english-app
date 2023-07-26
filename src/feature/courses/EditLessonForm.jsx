import EditExercisesForm from "./EditExercisesForm"
import EditExercisesBlockForm from "./EditExercisesBlockForm"

const EditLessonForm = ({ lesson }) => {
  const { lessonTitle, lessonPosition, lessonDescription, exercisesBlocks } = lesson

  const exerciseBlockContent = exercisesBlocks.map(block => (
    <EditExercisesBlockForm key={block._id} exercisesBlock={block} lessonPosition={lessonPosition} />
  ))

  const lessonContent = (
    <>
      <div className="lesson-edit-form">
        <h1>{lessonPosition}. Title:</h1>
        <input type="text"
          id={`lesson-${lesson._id}-title`}
          defaultValue={lessonTitle} />
      </div>
      <div className="lesson-edit-form">
        <h1>Description: </h1>
        <textarea
          id={`lesson-${lesson._id}-description`}
          rows="4"
          cols="50"
          defaultValue={lessonDescription}
        />
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