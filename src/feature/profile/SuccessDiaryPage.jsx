import {
  useGetProfileQuery,
  useAddSuccessRecordMutation,
} from './profileApiSlice'
import { Link } from 'react-router-dom'

const SuccessDiaryPage = () => {
  const { data: profileData, isSuccess } = useGetProfileQuery()

  const [addSuccessRecord] = useAddSuccessRecordMutation()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const successRecord = event.target.elements['success-area'].value
    await addSuccessRecord({ successRecord })
    event.target.reset()
    window.location.reload()
  }

  let content

  if (isSuccess) {
    const { successDiary } = profileData
    let sortedDiary = [...successDiary]
    sortedDiary.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

    const successDiaryList = sortedDiary.map((successRecord) => {
      const date = new Date(successRecord.createdAt)
      const formattedDate = date.toLocaleDateString('uk-UA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })

      return (
        <div key={successRecord._id}>
          <p className='successDate'>{formattedDate}</p>
          <p>{successRecord.successRecord}</p>
        </div>
      )
    })

    content = (
      <main className='successDiary'>
        <div id='diary-img'>
          <img src='../img/the_diary_of_success.png' alt='diary' />
        </div>

        <div id='diary-main' className='padding-all'>
          <article id='diary-form-wrapper'>
            <h1>Мій щоденник успіху</h1>
            <h2>Додати новий успішний запис:</h2>
            <form id='success-form' onSubmit={handleSubmit}>
              <textarea
                name='success-area'
                id='success-area'
                cols='40'
                rows='5'
              ></textarea>
              <button type='submit' className='main-button'>
                Додати
              </button>
            </form>
            <button className='main-button'>
              <Link to='/'>Повернутися на головну</Link>
            </button>
          </article>
          <article id='success-list'>
            <h2>Мої попередні успіхи:</h2>
            <div id='success-record'>{successDiaryList}</div>
          </article>
        </div>
        <br />
      </main>
    )
  }

  return <section>{content}</section>
}

export default SuccessDiaryPage
