import { useAddAndSetActiveCourseMutation } from '../feature/profile/profileApiSlice'
import useAuth from '../hooks/useAuth'

const PurchaseFinal = () => {
  const { username } = useAuth()
  const [addAndSetActiveCourse] = useAddAndSetActiveCourseMutation()

  const buyCourse = async () => {
    const puchaseData = {
      courseTitle: 'English + Personal Efficiency + Time Management - Standard',
      username,
    }
    const purchase = await addAndSetActiveCourse(puchaseData)
    console.log(username)
    console.log(purchase)
  }

  return (
    <button onClick={buyCourse} className='main-button'>
      Оплатити
    </button>
  )
}

export default PurchaseFinal
