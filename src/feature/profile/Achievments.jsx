import { useGetProfileQuery } from './profileApiSlice'
import { useGetCoursesQuery } from '../courses/courseApiSlice'
import { Link } from 'react-router-dom'

const Achievments = () => {
  const {
    data: profileData,
    isLoading,
    isSuccess,
    isError,
    refetch,
    error,
  } = useGetProfileQuery()

  const imageBasePath =
    window.location.protocol + '//' + window.location.host + '/img'

  const { data: courses, isSuccess: isCoursesSuccess } = useGetCoursesQuery()

  const randomInteger = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min)
    return Math.floor(rand)
  }

  const assistantsImg = ['the_Owl_assistant.png', 'the_Cat_assistant.png']

  let content

  if (isSuccess && isCoursesSuccess) {
    const currentCourseTitle = profileData.activeCourse
    console.log('currentCourseTitle: ', currentCourseTitle)

    const allCoursesIds = Array.from(Object.keys(courses.entities))
    let currentCourseId
    for (const courseId of allCoursesIds) {
      if (courses.entities[courseId].title === currentCourseTitle) {
        currentCourseId = courses.entities[courseId]._id
        break
      }
    }

    const currentCourseEntity = courses.entities[currentCourseId]
    const currentCourseLessonsCount = currentCourseEntity.lessons.length
    const results = profileData.coursesAnswers[0].courseResults
    const successfullyPassedLessons = results.filter(
      (result) => result.lessonResultPercent >= 80
    )

    const successfullyPassedLessonsPercent =
      (successfullyPassedLessons.length / currentCourseLessonsCount) * 100

    const wiseQuotes = [
      'Ефективне керування — це розставляння пріоритетів.',
      'Люди впевнено приймають парадигму власної детермінованості й самі надають докази, які це підтверджують. Вони дедалі сильніше почуваються жертвами, які не можуть контролювати ні себе, ні своє життя, ні долю. Вони перекладають провину за своє становище на зовнішні сили – інших людей і обставини.',
      'Насправді найважчі події нашого життя й стають тим горнилом, у якому загартовується характер і розвивається сила давати раду непростим обставинам у майбутньому, підтримувати інших.',
      'Приватні (особисті) перемоги передують публічним. Цей процес не можна повернути назад так само, як не можна зібрати врожай до того, як засієш поле. Він іде зсередини😊',
      'Очевидно, що незалежність – це набагато більш зрілий стан, ніж залежність. Незалежність сама по собі є великим досягненням для людини. Великим, та не найбільшим. Найвищим рівнем саморозвитку є Взаємозалежність - Це Вміння Працювати Ефективно в Команді.',
      'Починайте, представляючи кінцеву мету.',
      'Одна з головних проблем, що постають, коли люди намагаються досягти більшої ефективності в житті, полягає в тому, що вони недостатньо широко мислять.',
      'Ролі й цілі надають вашій особистій місії структурованості й скерованості. Якщо у вас досі нема особистого кредо, можна почати з його визначення. Просто визначте різні сфери свого життя й два-три важливі результати, яких, на вашу думку, ви маєте досягти в кожній сфері, щоб просуватися вперед, і це дасть вам загальне бачення вашого життя й відчуття орієнтації.',
      'Те, яким курсом ви йдете, набагато важливіше, ніж ваша швидкість!',
      'Менеджмент — це ступінь ефективності подолання драбини до успіху; лідерство — розуміння, чи до тієї стіни ця драбина приставлена.',
      'Менеджери працюють у системі. Лідери працюють над системою.',
      'Я не жертва обставин, я - результат моїх рішень.',
    ]

    content = (
      <>
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
            <h2>Курс: {currentCourseTitle}</h2>
            <br />
            <br />
            <h2>Пакет:</h2>
            <br />
            <br />
            <h2>Всього уроків: {currentCourseLessonsCount}</h2>
            <br />
            <br />
            <h2>Пройдено: {successfullyPassedLessons.length}</h2>
            <br />
            <div id='progress-bar-course'>
              <div
                id='topical-progress'
                style={{ width: `${successfullyPassedLessonsPercent}%` }}
              >
                1
              </div>
            </div>
            <br />
            <h2>Тем засвоєно: ?</h2>
            <br />
            <br />
            <h2>Тестів успішно складено: ?</h2>
            <br />
            <button className='main-button'>
              <Link to='/'>Повернутися на головну</Link>
            </button>
          </div>
          <br />
        </main>
        <br />
        <article className='wiseQuoteWrapper'>
          <div className='wiseQuote'>
            <img
              className='owl-img'
              src={`${imageBasePath}/${assistantsImg[randomInteger(0, 1)]}`}
              alt='owl'
            />
            <img
              className='feather-img'
              src={`${imageBasePath}/feather.png`}
              alt='feather'
            />
            <p>
              <i>{wiseQuotes[randomInteger(0, wiseQuotes.length - 1)]}</i>
            </p>
          </div>
        </article>
      </>
    )
  }

  return <section className='achievmetsSection'>{content}</section>
}

export default Achievments
