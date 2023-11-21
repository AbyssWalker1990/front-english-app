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
      <section id='main-page-secondary'>
        <article id='secondary-content'>
          <p>
            Навчання на наших курсах відбувається на індивідуальних онлайн
            уроках з персональним викладачем.
          </p>
          <img
            src='img/teacher-student-learning-English.jpg'
            alt='teacher with student'
          />
          <p>
            Курси розроблені таким чином, щоб навчання проходило максимально
            продуктивно: 20% часу уроку присвячується теорії, а 80% – практиці.
            Це дасть Вам можливість швидко і доступно засвоїти матеріал уроків і
            вивчити англійську для поставлених Вами цілей. <br />
            <br />
            100 задоволених клієнтів, 3 курси і 9 тарифних планів на Ваш вибір,
            а також можливість оплати частинами.
          </p>
        </article>
        <img src='img/Pareto-ration.png' alt='pareto ration' />
        <p>
          Зручний особистий кабінет та інтерактивна платформа для засвоєння
          нових знань і виконання домашніх завдань сприяють вашому приємному та
          ефективному навчанню, а словник зі словами всього курсу, зручно
          поділений на уроки, допоможе Вам повторювати нові слова скільки і коли
          Вам буде зручно – за комп’ютером та на мобільному телефоні. А магічні
          супутники в особистому кабінеті зроблять навчання цікавішим і
          яскравішим! <br />
          <br />
          Чуйна і привітна служба підтримки швидко відповість на ваші питання, а
          також надішле Вам нагадування на електрону пошту за декілька годин до
          початку уроку, щоб Ви не забули і не пропустили його.
        </p>
        <img src='img/infographics_EWS.png' alt='infographics' />
        <p>
          Після завершення навчання на кожному з курсів Ви отримуєте сертифікат*
          <br />
          *за умови виконання домашніх завдань
        </p>
        <img src='img/friendly_support.png' alt='support' />
      </section>
    </main>
  )
}
export default Public
