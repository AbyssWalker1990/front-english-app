export const onSelectType = (e, id) => {
  const splittedTargetId = e.target.id.split('-')
  const exerciseId = splittedTargetId[splittedTargetId.length - 1]
  const quizDataElement = document.getElementById(`quiz-options-${id}`)
  console.log('quizDataElement: ', quizDataElement)
  if (e.target.value !== 'quiz') {
    quizDataElement.classList.add('hidden')
  } else {
    quizDataElement.classList.remove('hidden')
  }
}