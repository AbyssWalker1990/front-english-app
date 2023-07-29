import { useState } from "react"
import { useCreateProfileMutation } from "./profileApiSlice";
import axios from 'axios'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from "../auth/authSlice"


function CreateProfile () {

  const token = useSelector(selectCurrentToken)

  const [createProfile, {
    isLoading,
    isSuccess,
    isError,
    error
  }] = useCreateProfileMutation()

  const [image, setImage] = useState()

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

  const handleForm = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("imageInput", image)
    const result = await axios.post(
      'http://localhost:3500/profile',
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data', "authorization": `Bearer ${token}` },
        withCredentials: true,
      })
    console.log(result)
  }

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
          </div>
          <div id="profile-desc" className='padding-all border-orange'>
            <h1>Profile desc</h1>
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