import { useGetProfileQuery } from '../feature/profile/profileApiSlice'
import { useAddAndSetActiveCourseMutation } from '../feature/profile/profileApiSlice'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const PurchaseFinal = () => {
  const { username } = useAuth()
  const [addAndSetActiveCourse] = useAddAndSetActiveCourseMutation()
  const { refetch } = useGetProfileQuery()

  const navigate = useNavigate()

  const buyCourse = async () => {
    const puchaseData = {
      courseTitle: 'English + Personal Efficiency + Time Management - Standard',
      username,
    }
    const purchase = await addAndSetActiveCourse(puchaseData)
    await refetch()
    console.log(username)
    console.log(purchase)
    navigate('/active-course')
  }

  return (
    <button onClick={buyCourse} className='main-button'>
      Оплатити
    </button>
  )
}

export default PurchaseFinal
