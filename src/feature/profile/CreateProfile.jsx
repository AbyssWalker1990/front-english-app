import { useState } from "react"
import { useCreateProfileMutation, useSetAvatarMutation } from "./profileApiSlice";
import axios from 'axios'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from "../auth/authSlice"


function CreateProfile () {

  const token = useSelector(selectCurrentToken)

  const [setAvatar] = useSetAvatarMutation()

  const [createProfile] = useCreateProfileMutation()


  const [image, setImage] = useState()
  const [course, setCourse] = useState('Default')
  const [objectives, setObjectives] = useState()
  const [priorities, setPriorities] = useState()
  const [hobbies, setHobbies] = useState()

  const handleImgChange = (e) => {
    const image = e.target.files[0];
    setImage(image)
    console.log(image)
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      localStorage.setItem('image', reader.result);
      const newImage = document.getElementById(
        'img-from-local-storage',
      );

      newImage.src = localStorage.getItem('image');
    });

    if (image) {
      reader.readAsDataURL(image);
    }
    // reader.onload = () => {
    //   setFormData({ ...formData, imageInput: imageInput.files[0] })
    // }
    const newImage = document.getElementById(
      'img-from-local-storage',
    );

    newImage.src = localStorage.getItem('image');
  }

  const handleAvatar = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("imageInput", image)
    const result = await axios.post(
      'http://localhost:3500/profile/set-avatar',
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data', "authorization": `Bearer ${token}` },
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
      hobbies
    }
    await createProfile(profileData)
  }

  const handleCourse = (e) => setCourse(e.target.value)
  const handleObjectives = (e) => setObjectives(e.target.value)
  const handlePriorities = (e) => setPriorities(e.target.value)
  const handleHobbies = (e) => setHobbies(e.target.value)

  return (
    <section id="create-profile">
      <header>
        <h1>Create Profile: </h1>
      </header>
      <main>
        <form action="POST" onSubmit={handleForm} className='profile-form border'>
          <div id="photo" className='padding-all border-green'>
            <div id="img-holder">
              <img id="img-from-local-storage" />
            </div>
            <input id='imageInput' name='imageInput' type="file" onChange={handleImgChange} />
            <label id="file-input-label" htmlFor="imageInput"
            >Select a File
            </label>
            <button onClick={handleAvatar}>SET AVATAR</button>
          </div>
          <div id="profile-desc" className='padding-all border-orange'>
            <h1>Profile desc</h1>
            <div className='form-item'>
              <label htmlFor="course"><span className="nowrap">Choose course:&nbsp;&nbsp;&nbsp;</span></label>
              <select onChange={handleCourse} name="course" id="course">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className='form-item'>
              <label htmlFor="objectives"><span className="nowrap">Objectives:&nbsp;&nbsp;&nbsp;</span></label>
              <textarea onChange={handleObjectives} name="objectives" id="objectives"></textarea>
            </div>
            <div className='form-item'>
              <label htmlFor="priorities"><span className="nowrap">Priorities:&nbsp;&nbsp;&nbsp;</span></label>
              <textarea onChange={handlePriorities} name="priorities" id="priorities"></textarea>
            </div>
            <div className='form-item'>
              <label htmlFor="hobbies"><span className="nowrap">Hobbies:&nbsp;&nbsp;&nbsp;</span></label>
              <textarea onChange={handleHobbies} name="hobbies" id="hobbies"></textarea>
            </div>

          </div>
          <button type='submit'>
            SAVE
          </button>
        </form>
      </main>
    </section>
  )
}

export default CreateProfile