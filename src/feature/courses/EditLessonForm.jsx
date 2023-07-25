import EditExercisesForm from "./EditExercisesForm"

const EditLessonForm = ({ lesson }) => {
  const { lessonTitle, lessonPosition, lessonDescription, lessonExercises } = lesson

  let lessonContent
  let exerciseContent
  if (lesson) {

    exerciseContent = lessonExercises.map(exercise => (
      <EditExercisesForm key={exercise._id} exercise={exercise} />
    ))

    lessonContent = (
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
        <div className="lesson-edit-form">
          {exerciseContent}
        </div>
      </>
    )
  }
  return (
    <div id={`lesson-${lessonPosition}`} className="border vert-margin padding-all">
      {lessonContent}
    </div>

  )
}

export default EditLessonForm