
export const SaveButton = ({ curCourse, updateCourse }) => {

  const onSaveChanges = async (e) => {
    console.log('saved')
    console.log('curCourse: ', curCourse)
    await updateCourse({ ...curCourse })
    console.log('updated')
  }

  return (
    <button onClick={onSaveChanges}>Save Changes</button>

  )
}
