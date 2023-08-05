import { useGetCoursesQuery } from "../../courseApiSlice"

export const SaveButton = ({ curCourse, updateCourse }) => {

  const { refetch } = useGetCoursesQuery()

  const onSaveChanges = async (e) => {
    console.log('saved')
    // console.log('curCourse: ', curCourse)
    const result = await updateCourse({ ...curCourse })
    refetch()
    console.log('result: ', result)
  }

  return (
    <button onClick={onSaveChanges}>Save Changes</button>
  )
}
