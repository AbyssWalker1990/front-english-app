import { useState } from "react"

function CreateProfile () {

  const [formData, setFormData] = useState({ imageInput: null })

  const handleImgChange = (e) => {
    const image = e.target.files[0];
    console.log(image)
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      localStorage.setItem('image', reader.result);
    });

    if (image) {
      reader.readAsDataURL(image);
    }

    reader.onload = () => {
      setFormData({ ...formData, imageInput: localStorage.getItem('image') })
    }

    // 👇️ Take the image from localStorage
    // and display it
    // const newImage = document.getElementById(
    //   'img-from-local-storage',
    // );

    const newImage = document.getElementById(
      'img-from-local-storage',
    );
    // const imgUrl = localStorage.getItem('image')

    // newImage.style.backgroundImage = `url(${imgUrl})`
    newImage.src = localStorage.getItem('image');
  }

  const handleForm = (e) => {
    e.preventDefault()
    console.log(e.target)
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
            <input id='imageInput' type="file" onChange={handleImgChange} />
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