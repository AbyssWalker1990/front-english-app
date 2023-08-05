import { useGetCoursesQuery } from "../../courseApiSlice"
import { toast } from 'react-toastify'


export const SaveButton = ({ curCourse, updateCourse }) => {

  const { refetch } = useGetCoursesQuery()

  const onSaveChanges = async (e) => {
    console.log('saved')
    // console.log('curCourse: ', curCourse)
    const result = await updateCourse({ ...curCourse })
    if (result.data?.updated) {
      toast.success(`${curCourse.title} Updated!!!`, {
        position: toast.POSITION.TOP_RIGHT
      })
    } else {
      toast.error(`Error!!`, {
        position: toast.POSITION.TOP_RIGHT
      })
    }
    refetch()
    console.log('result: ', result)
  }

  return (
    <button className='save-button' onClick={onSaveChanges}>Save Changes</button>
  )
}
