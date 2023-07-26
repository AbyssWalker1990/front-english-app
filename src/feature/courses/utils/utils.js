export const onSelectType = (e, id, setCurCourse, lessonPosition, blockPosition, exercisePos) => {
  const splittedTargetId = e.target.id.split('-')
  const exerciseId = splittedTargetId[splittedTargetId.length - 1]
  const quizDataElement = document.getElementById(`quiz-options-${id}`)

  const lessonIndex = lessonPosition - 1
  const blockIndex = blockPosition - 1
  const exerciseIndex = exercisePos - 1
  console.log('exerciseIndex: ', exerciseIndex)

  setCurCourse(prevState => {
    const duplicate = JSON.parse(JSON.stringify(prevState))
    const result = duplicate.lessons[lessonIndex].exercisesBlocks[blockIndex].blockExercises[exerciseIndex].exerciseType = e.target.value
    console.log('SETCOURSE RESULT: ', result)
    return duplicate
  })
  if (e.target.value === 'quiz') {
    quizDataElement.classList.remove('hidden')
  } else {
    quizDataElement.classList.add('hidden')
  }
}


// exercisesBlocks[blockIndex].blockExercises[0].exerciseType = e.target.value