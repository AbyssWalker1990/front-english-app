import Exercise from "./Exercise"
import ExerciseBlock from "./ExerciseBlock"

const Lesson = ({ lesson }) => {
  console.log('Lesson: ', lesson)

  const { exercisesBlocks } = lesson
  const formattedExercises = exercisesBlocks.map(block => (
    <ExerciseBlock key={block._id} exerciseBlock={block} />
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