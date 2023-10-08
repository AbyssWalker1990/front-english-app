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
    console.log('currentCourseId: ', currentCourseId)

    const currentCourseEntity = courses.entities[currentCourseId]
    const currentCourseLessonsCount = currentCourseEntity.lessons.length
    console.log('currentCourseLessonsCount: ', currentCourseLessonsCount)

    const results = profileData.coursesAnswers[0].courseResults
    console.log('results: ', results)

    const successfullyPassedLessons = results.filter(
      (result) => result.lessonResultPercent >= 80
    )
    console.log('successfullyPassedLessons: ', successfullyPassedLessons)

    const successfullyPassedLessonsPercent =
      (successfullyPassedLessons.length / results.length) * 100
    console.log(
      'successfullyPassedLessonsPercent: ',
      successfullyPassedLessonsPercent
    )

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
              src={`${imageBasePath}/owl.png`}
              alt='owl'
            />
            <img
              className='feather-img'
              src={`${imageBasePath}/feather.png`}
              alt='feather'
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi,
              consectetur! Doloremque, quia. Fugiat, perspiciatis quisquam!
            </p>
          </div>
        </article>
      </>
    )
  }

  return <section className='achievmetsSection'>{content}</section>
}

export default Achievments
