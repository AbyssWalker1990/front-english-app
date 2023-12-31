import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../../app/api/apiSlice'
import {
  useCreateProfileMutation,
  useSetAvatarMutation,
} from './profileApiSlice'
import { useGetCoursesQuery } from '../courses/courseApiSlice'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../auth/authSlice'
import CourseSelect from './CourseSelect'

function CreateProfile() {
  const {
    data: courses,
    isLoading,
    isSuccess: isCoursesSuccess,
  } = useGetCoursesQuery()

  console.log('baseUrl: ', baseUrl)
  const token = useSelector(selectCurrentToken)

  const [setAvatar] = useSetAvatarMutation()

  const [createProfile, { isSuccess }] = useCreateProfileMutation()

  const navigate = useNavigate()

  const [image, setImage] = useState()
  const [course, setCourse] = useState('Безкоштовний пробний урок')
  const [objectives, setObjectives] = useState()
  const [priorities, setPriorities] = useState()
  const [hobbies, setHobbies] = useState()
  const [gender, setgender] = useState()

  useEffect(() => {
    if (isSuccess) navigate('/profile')
  }, [isSuccess])

  let coursesList = []
  if (isCoursesSuccess) {
    console.log(courses)
    const courseTitles = courses.ids.map((id) => courses.entities[id].title)
    coursesList.push(...courseTitles)
    console.log(coursesList)
  }

  const handleImgChange = (e) => {
    const image = e.target.files[0]
    setImage(image)
    console.log(image)
    const reader = new FileReader()
    reader.addEventListener('load', () => {
      localStorage.setItem('image', reader.result)
      const newImage = document.getElementById('img-from-local-storage')
      newImage.src = localStorage.getItem('image')
    })
    if (image) {
      reader.readAsDataURL(image)
      const setAvatarButton = document.getElementById('set-avatar-button')
      setAvatarButton.classList.remove('hidden')
    }
    const newImage = document.getElementById('img-from-local-storage')
    newImage.src = localStorage.getItem('image')
  }

  const handleAvatar = async (e) => {
    e.preventDefault()
    console.log('starting')
    const formData = new FormData()
    formData.append('imageInput', image)
    const result = await axios.post(`${baseUrl}/profile/set-avatar`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    })
    console.log(result)
  }

  const handleForm = async (e) => {
    e.preventDefault()
    const profileData = {
      course,
      objectives,
      priorities,
      hobbies,
      gender,
    }
    console.log(profileData)
    await createProfile(profileData)
  }

  const handleCourse = (e) => setCourse(e.target.value)
  const handleObjectives = (e) => setObjectives(e.target.value)
  const handlePriorities = (e) => setPriorities(e.target.value)
  const handleHobbies = (e) => setHobbies(e.target.value)

  return (
    <section id='create-profile'>
      <main>
        <form action='POST' onSubmit={handleForm} className='profile-form'>
          <div id='photo' className='padding-all'>
            <div id='img-holder'>
              <img id='img-from-local-storage' />
            </div>
          </div>
          <div id='profile-desc' className='padding-all'>
            {/* <div className='form-item'>
              <CourseSelect
                coursesList={coursesList}
                handleCourse={handleCourse}
              />
            </div> */}
            <div className='form-item'>
              <input
                id='imageInput'
                name='imageInput'
                type='file'
                onChange={handleImgChange}
              />
              <label
                id='file-input-label'
                htmlFor='imageInput'
                className='underline pointer'
              >
                Завантажте своє фото... :
              </label>
              <button
                type='button'
                id='set-avatar-button'
                className='main-button margin-left hidden'
                onClick={handleAvatar}
              >
                обрати
              </button>
            </div>
            <br />
            <div className='form-item'>
              <label htmlFor='gender'>
                <span className='nowrap'>Стать:</span>
              </label>
              <select
                id='gender'
                name='gender'
                onChange={(e) => setgender(e.target.value)}
              >
                <option value=''></option>
                <option value='male'>Чоловіча</option>
                <option value='female'>Жіноча</option>
              </select>
            </div>
            <div className='form-item'>
              <label htmlFor='objectives'>
                <span className='nowrap'>Objectives:</span>
              </label>
              <textarea
                onChange={handleObjectives}
                name='objectives'
                id='objectives'
                rows='4'
                cols='40'
              ></textarea>
            </div>
            <div className='form-item'>
              <label htmlFor='priorities'>
                <span className='nowrap'>Priorities:</span>
              </label>
              <textarea
                onChange={handlePriorities}
                name='priorities'
                id='priorities'
                rows='4'
                cols='40'
              ></textarea>
            </div>
            <div className='form-item'>
              <label htmlFor='hobbies'>
                <span className='nowrap'>Hobbies:</span>
              </label>
              <textarea
                onChange={handleHobbies}
                name='hobbies'
                id='hobbies'
                rows='4'
                cols='40'
              ></textarea>
            </div>
            <br />
            <br />
            <button className='main-button align-flex-end' type='submit'>
              Створити профіль
            </button>
          </div>
        </form>
      </main>
    </section>
  )
}

export default CreateProfile
