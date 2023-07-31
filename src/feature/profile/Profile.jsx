import { useGetProfileQuery } from "./profileApiSlice"

const Profile = () => {
  const {
    data: profileData,
    isLoading,
    isSuccess,
    isError,
    refetch,
    error
  } = useGetProfileQuery()

  let content

  if (isSuccess) {
    content = (
      <>
        <h1>Profile: </h1>
        <div id="photo" className='padding-all border-green'>
          <div id="img-holder">
            <img src={profileData.photo} id="img-from-local-storage" alt='avatar' />
          </div>
        </div>
        <br />
        <p>Courses: {profileData.courses}</p>
        <br />
        <p>objectives: {profileData.objectives}</p>
        <br />
        <p>priorities: {profileData.priorities}</p>
        <br />
        <p>hobbies: {profileData.hobbies}</p>
      </>
    )
  }


  return (
    <section>
      {content}
    </section>
  )
}

export default Profile