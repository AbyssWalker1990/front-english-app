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
          <h1>Опануй Англійську і Стань Автором Свого Успішного Життя</h1>
          <div className='open-lesson-btn'>
            <Link className='open-lesson-btn-link' to='/'>
              замовити пробний урок
            </Link>
          </div>
          <br />
          <h2 className='align-flex-start'>Наші курси:</h2>
          <p>
            На нашому порталі Ви можете обрати навчальний курс «Англійська +
            Особиста Ефективність та Успішність і Тайм-Менеджмент» за тематичним
            напрямком, наповненням і вартістю на свій смак.
          </p>
          <div className='open-lesson-btn'>
            <Link className='open-lesson-btn-link' to='/courses-overview'>
              Обрати
            </Link>
          </div>
        </article>
      </section>
    </main>
  )
}
export default Public
