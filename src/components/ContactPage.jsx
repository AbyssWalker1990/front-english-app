const ContactPage = () => {
  return (
    <div className='contactPageContainer'>
      <section id='contacts'>
        <article id='socials'>
          <div className='socialItem'>
            <img src='img/icons/tel.png' alt='telephone icon' />
            <p>Телефон</p>
          </div>
          <div className='socialItem'>
            <img src='img/icons/e-mail.png' alt='e-mail icon' />
            <p>Електонна пошта</p>
          </div>
          <div className='socialItem'>
            <img src='img/icons/instagram.png' alt='instagram icon' />
            <p>Instagram</p>
          </div>
          <div className='socialItem'>
            <img src='img/icons/viber.png' alt='viber icon' />
            <p>Viber</p>
          </div>
          <div className='socialItem'>
            <img src='img/icons/telegram.png' alt='telegram icon' />
            <p>Telegram</p>
          </div>
        </article>
        <form id='contact-form'>
          <label htmlFor='contacts-area'>Написати нам:</label>
          <textarea
            name='contacts-area'
            id='contacts-area'
            cols='30'
            rows='10'
          ></textarea>
          <button type='submit' className='main-button'>
            Надіслати
          </button>
        </form>
      </section>
    </div>
  )
}

export default ContactPage
