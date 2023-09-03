import { useGetProfileQuery } from './profileApiSlice'
import { Link } from 'react-router-dom'

const Profile = () => {
  const {
    data: profileData,
    isLoading,
    isSuccess,
    isError,
    refetch,
    error,
  } = useGetProfileQuery()

  let content

  if (isSuccess) {
    content = (
      <main className='profile-form'>
        <div id='photo' className='padding-all'>
          <div id='img-holder'>
            <img
              src={profileData.photo}
              id='img-from-local-storage'
              alt='avatar'
            />
          </div>
        </div>
        <div id='profile-desc' className='profile padding-all'>
          <h2>Мої Цілі: </h2>
          <br />
          {profileData.objectives.map((obj, index) => (
            <p key={`objective-${index}`}>
              {index + 1}. {obj}
            </p>
          ))}
          <br />
          <h2>Життєві пріоритети:</h2>
          <br />
          {profileData.priorities.map((pri, index) => (
            <p key={`priority-${index}`}>
              {index + 1}. {pri}
            </p>
          ))}
          <br />
          <h2>Хоббі:</h2>
          <br />
          {profileData.hobbies.map((hob, index) => (
            <p key={`hobby-${index}`}>
              {index + 1}. {hob}
            </p>
          ))}
          <br />
          <button className='main-button'>
            <Link to='/'>Повернутися на головну</Link>
          </button>
        </div>
        <br />
      </main>
    )
  }

  return <section>{content}</section>
}

export default Profile
