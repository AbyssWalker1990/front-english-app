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

  const payBasicIt = () => {
    window.location.href = 'https://prt.mn/53PX3nWD1j'
  }
  const payOptimalIt = () => {
    window.location.href = 'https://prt.mn/0EWq3Jq3q'
  }
  const payAdvancedIt = () => {
    window.location.href = 'https://prt.mn/zK_kwLFyVg'
  }
  const payPremiumIt = () => {
    window.location.href = 'https://prt.mn/100nvSTLEF'
  }

  const payBasicTravel = () => {
    window.location.href = 'https://prt.mn/Sy-csQ-0Za'
  }
  const payOptimalTravel = () => {
    window.location.href = 'https://prt.mn/HQMgquIbXF'
  }
  const payAdvancedTravel = () => {
    window.location.href = 'https://prt.mn/-2cC9XO8O'
  }
  const payPremiumTravel = () => {
    window.location.href = 'https://prt.mn/M7zB920_wG'
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
          <img
            className='qrCode'
            src='img/courses/corses_with_qr/financiers_basic/Eng 4 Financiers - Basic - QR_4500UAH.png'
            alt='QR code'
          />
        </article>
        <article className='courseCard'>
          <button type='button' onClick={payOptimalFinancier}>
            <img
              src='img/courses/corses_with_qr/financiers_optimal/Eng 4 Financiers - Optimal - New.jpg'
              alt='course description'
            />
          </button>
          <img
            className='qrCode'
            src='img/courses/corses_with_qr/financiers_optimal/Eng 4 Financiers - Optimal - QR_5550UAH.png'
            alt='QR code'
          />
        </article>
        <article className='courseCard'>
          <button type='button' onClick={payAdvancedFinancier}>
            <img
              src='img/courses/corses_with_qr/financiers_advanced/Eng 4 Financiers - Advanced - New.jpg'
              alt='course description'
            />
          </button>
          <img
            className='qrCode'
            src='img/courses/corses_with_qr/financiers_advanced/Eng 4 Financiers - Advanced - QR_9600UAH.png'
            alt='QR code'
          />
        </article>
        <article className='courseCard'>
          <button type='button' onClick={payPremiumFinancier}>
            <img
              src='img/courses/corses_with_qr/financiers_premium/Eng 4 Financiers - Premium - New.jpg'
              alt='course description'
            />
          </button>
          <img
            className='qrCode'
            src='img/courses/corses_with_qr/financiers_premium/Eng 4 Financiers - Premium - QR_14800UAH.png'
            alt='QR code'
          />
        </article>
        {/* it */}
        <article className='courseCard'>
          <button type='button' onClick={payBasicIt}>
            <img
              src='img/courses/corses_with_qr/it_basic/Eng 4 IT - Basic - New.jpg'
              alt='course description'
            />
          </button>
          <img
            className='qrCode'
            src='img/courses/corses_with_qr/it_basic/Eng 4 IT - Basic - QR_4500UAH.png'
            alt='QR code'
          />
        </article>
        <article className='courseCard'>
          <button type='button' onClick={payOptimalIt}>
            <img
              src='img/courses/corses_with_qr/it_optimal/Eng 4 IT - Optimal - New.jpg'
              alt='course description'
            />
          </button>
          <img
            className='qrCode'
            src='img/courses/corses_with_qr/it_optimal/Eng 4 IT - Optimal - QR_5550UAH.png'
            alt='QR code'
          />
        </article>
        <article className='courseCard'>
          <button type='button' onClick={payAdvancedIt}>
            <img
              src='img/courses/corses_with_qr/it_advanced/Eng 4 IT - Advanced - New.jpg'
              alt='course description'
            />
          </button>
          <img
            className='qrCode'
            src='img/courses/corses_with_qr/it_advanced/Eng 4 IT - Advanced - QR_9600UAH.png'
            alt='QR code'
          />
        </article>
        <article className='courseCard'>
          <button type='button' onClick={payPremiumIt}>
            <img
              src='img/courses/corses_with_qr/it_premium/course offer - En 4 IT - Premium.jpg'
              alt='course description'
            />
          </button>
          <img
            className='qrCode'
            src='img/courses/corses_with_qr/it_premium/Eng 4 IT - Premium - QR_14800UAH.png'
            alt='QR code'
          />
        </article>
        {/* Travel */}
        <article className='courseCard'>
          <button type='button' onClick={payBasicTravel}>
            <img
              src='img/courses/corses_with_qr/travel_basic/Eng 4 Traveling - Basic - New.jpg'
              alt='course description'
            />
          </button>
          <img
            className='qrCode'
            src='img/courses/corses_with_qr/travel_basic/Eng 4 Traveling - Basic - QR_4500UAH.png'
            alt='QR code'
          />
        </article>
        <article className='courseCard'>
          <button type='button' onClick={payOptimalTravel}>
            <img
              src='img/courses/corses_with_qr/travel_optimal/Eng 4 Traveling - Optimal - New.jpg'
              alt='course description'
            />
          </button>
          <img
            className='qrCode'
            src='img/courses/corses_with_qr/travel_optimal/Eng 4 Traveling - Optimal - QR_5550UAH.png'
            alt='QR code'
          />
        </article>
        <article className='courseCard'>
          <button type='button' onClick={payAdvancedTravel}>
            <img
              src='img/courses/corses_with_qr/travel_advanced/Eng 4 Traveling - Advanced - New.jpg'
              alt='course description'
            />
          </button>
          <img
            className='qrCode'
            src='img/courses/corses_with_qr/travel_advanced/Eng 4 Traveling - Advanced - QR_9600UAH.png'
            alt='QR code'
          />
        </article>
        <article className='courseCard'>
          <button type='button' onClick={payPremiumTravel}>
            <img
              src='img/courses/corses_with_qr/travel_premium/Eng 4 Traveling - Premium - New.jpg'
              alt='course description'
            />
          </button>
          <img
            className='qrCode'
            src='img/courses/corses_with_qr/travel_premium/Eng 4 Traveling - Premium - QR_14800UAH.png'
            alt='QR code'
          />
        </article>
      </section>
    </div>
  )
}

export default CoursesPage
