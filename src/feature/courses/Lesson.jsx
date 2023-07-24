import Exercise from "./Exercise"

const Lesson = ({ lesson }) => {
  console.log('Lesson: ', lesson)

  const { lessonExercises } = lesson
  const formattedExercises = lessonExercises.map(exercise => (
    <Exercise key={exercise._id} exercise={exercise} />
  ))

  return (
    <article className="lesson">
      <header>
        <h2>{lesson.lessonPosition}. {lesson.lessonTitle}</h2>
      </header>
      <main>
        <p>{lesson.lessonDescription}</p>
        <div className="exercise-list">
          {formattedExercises}
        </div>
      </main>
    </article>
  )
}

export default Lesson