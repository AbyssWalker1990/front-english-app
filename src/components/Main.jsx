import { Link } from 'react-router-dom'

const Public = () => {
  const mode = process.env.REACT_APP_MODE
  return (
    <main>
      <section id='main-page'>
        <article id='big-logo'>
          <img src='img/logo-xl.png' alt='Logo large' />
        </article>
        <article id='main-content'>
          <h1>Текст - слоган Заговори англійською вже завтра!</h1>
          <div className='open-lesson-btn'>
            <Link className='open-lesson-btn-link' to='/'>
              замовити пробний урок
            </Link>
          </div>
          <br />
          <h2 className='align-flex-start'>Наші курси:</h2>
          <Link to='/standard' className='align-flex-start'>
            English + Personal Efficiency + Time Management - Standard(working)
          </Link>
          <Link className='align-flex-start'>
            English + Personal Efficiency + Time Management - Extended
          </Link>
          <Link className='align-flex-start'>
            English + Personal Efficiency + Time Management - Premium
          </Link>
          <Link className='align-flex-start'>
            English + Personal Efficiency + Time Management - Basic
          </Link>
        </article>
      </section>
    </main>
  )
}
export default Public
