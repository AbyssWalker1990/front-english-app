const CoursesPage = () => {
  const payBasicFinancier = () => {
    window.location.href = 'https://prt.mn/OOe_wt_fU'
  }
  const payOptimalFinancier = () => {
    window.location.href = 'https://prt.mn/42TvqoZBPM'
  }
  const payAdvancedFinancier = () => {
    window.location.href = 'https://prt.mn/dP-jWa0-k'
  }
  const payPremiumFinancier = () => {
    window.location.href = 'https://prt.mn/ZA7Gpw7D7'
  }

  return (
    <div className='coursesPageContainer'>
      <section id='courses-list-overview'>
        <article className='courseCard'>
          <button type='button' onClick={payBasicFinancier}>
            <img
              src='img/courses/corses_with_qr/financiers_basic/Eng 4 Financiers - Basic - New.jpg'
              alt='course description'
            />
          </button>
        </article>

        <article className='courseCard'>
          <button type='button' onClick={payOptimalFinancier}>
            <img
              src='img/courses/corses_with_qr/financiers_optimal/Eng 4 Financiers - Optimal - New.jpg'
              alt='course description'
            />
          </button>
        </article>

        <article className='courseCard'>
          <button type='button' onClick={payAdvancedFinancier}>
            <img
              src='img/courses/corses_with_qr/financiers_advanced/Eng 4 Financiers - Advanced - New.jpg'
              alt='course description'
            />
          </button>
        </article>

        <article className='courseCard'>
          <button type='button' onClick={payPremiumFinancier}>
            <img
              src='img/courses/corses_with_qr/financiers_premium/Eng 4 Financiers - Premium - New.jpg'
              alt='course description'
            />
          </button>
        </article>
      </section>
    </div>
  )
}

export default CoursesPage
