const CoursesPage = () => {
  const payBasicFinancier = () => {
    window.location.href = 'https://prt.mn/elK1xXw8hU'
  }
  const payOptimalFinancier = () => {
    window.location.href = 'https://prt.mn/3gM1U_vp8'
  }
  const payAdvancedFinancier = () => {
    window.location.href = 'https://prt.mn/uIwlS198lL'
  }
  const payPremiumFinancier = () => {
    window.location.href = 'https://prt.mn/O7BODvBIF3'
  }

  const payBasicIt = () => {
    window.location.href = 'https://prt.mn/lX72qV0qMw'
  }
  const payOptimalIt = () => {
    window.location.href = 'https://prt.mn/4DT73OPN7i'
  }
  const payAdvancedIt = () => {
    window.location.href = 'https://prt.mn/7u0i5bdbrc'
  }
  const payPremiumIt = () => {
    window.location.href = 'https://prt.mn/_3DGmEL2Pd'
  }

  const payBasicTravel = () => {
    window.location.href = 'https://prt.mn/x-JwepnijA'
  }
  const payOptimalTravel = () => {
    window.location.href = 'https://prt.mn/X98v6b-B9D'
  }
  const payAdvancedTravel = () => {
    window.location.href = 'https://prt.mn/C7_nZveJV6'
  }
  const payPremiumTravel = () => {
    window.location.href = 'https://prt.mn/mAfyKF5wmX'
  }

  return (
    <div className='coursesPageContainer'>
      <section id='courses-list-overview'>
        <article className='courseCard'>
          <button type='button' onClick={payBasicFinancier}>
            <img
              src='img/courses/corses_with_qr/financiers_basic/Eng 4 Financiers - Basic - New.png'
              alt='course description'
            />
          </button>
          {/* <img
            className='qrCode'
            src='img/courses/corses_with_qr/financiers_basic/Eng 4 Financiers - Basic - QR_4500UAH (2).png'
            alt='QR code'
          /> */}
        </article>
        <article className='courseCard'>
          <button type='button' onClick={payOptimalFinancier}>
            <img
              src='img/courses/corses_with_qr/financiers_optimal/Eng 4 Financiers - Optimal - New.png'
              alt='course description'
            />
          </button>
          {/* <img
            className='qrCode'
            src='img/courses/corses_with_qr/financiers_optimal/Eng 4 Financiers - Optimal - QR_5550UAH (2).png'
            alt='QR code'
          /> */}
        </article>
        <article className='courseCard'>
          <button type='button' onClick={payAdvancedFinancier}>
            <img
              src='img/courses/corses_with_qr/financiers_advanced/Eng 4 Financiers - Advanced - New.png'
              alt='course description'
            />
          </button>
          {/* <img
            className='qrCode'
            src='img/courses/corses_with_qr/financiers_advanced/Eng 4 Financiers - Advanced - QR_9600UAH (2).png'
            alt='QR code'
          /> */}
        </article>
        <article className='courseCard'>
          <button type='button' onClick={payPremiumFinancier}>
            <img
              src='img/courses/corses_with_qr/financiers_premium/Eng 4 Financiers - Premium - New.png'
              alt='course description'
            />
          </button>
          {/* <img
            className='qrCode'
            src='img/courses/corses_with_qr/financiers_premium/Eng 4 Financiers - Premium - QR_14800UAH (2).png'
            alt='QR code'
          /> */}
        </article>
        {/* it */}
        <article className='courseCard'>
          <button type='button' onClick={payBasicIt}>
            <img
              src='img/courses/corses_with_qr/it_basic/Eng 4 IT - Basic - New.png'
              alt='course description'
            />
          </button>
          {/* <img
            className='qrCode'
            src='img/courses/corses_with_qr/it_basic/Eng 4 IT - Basic - QR_4500UAH (2).png'
            alt='QR code'
          /> */}
        </article>
        <article className='courseCard'>
          <button type='button' onClick={payOptimalIt}>
            <img
              src='img/courses/corses_with_qr/it_optimal/Eng 4 IT - Optimal - New.png'
              alt='course description'
            />
          </button>
          {/* <img
            className='qrCode'
            src='img/courses/corses_with_qr/it_optimal/Eng 4 IT - Optimal - QR_5550UAH (2).png'
            alt='QR code'
          /> */}
        </article>
        <article className='courseCard'>
          <button type='button' onClick={payAdvancedIt}>
            <img
              src='img/courses/corses_with_qr/it_advanced/Eng 4 IT - Advanced - New.png'
              alt='course description'
            />
          </button>
          {/* <img
            className='qrCode'
            src='img/courses/corses_with_qr/it_advanced/Eng 4 IT - Advanced - QR_9600UAH (2).png'
            alt='QR code'
          /> */}
        </article>
        <article className='courseCard'>
          <button type='button' onClick={payPremiumIt}>
            <img
              src='img/courses/corses_with_qr/it_premium/Eng 4 IT - Premium - New.png'
              alt='course description'
            />
          </button>
          {/* <img
            className='qrCode'
            src='img/courses/corses_with_qr/it_premium/Eng 4 IT - Premium - QR_14800UAH (2).png'
            alt='QR code'
          /> */}
        </article>
        {/* Travel */}
        <article className='courseCard'>
          <button type='button' onClick={payBasicTravel}>
            <img
              src='img/courses/corses_with_qr/travel_basic/Eng 4 Traveling - Basic - New.png'
              alt='course description'
            />
          </button>
          {/* <img
            className='qrCode'
            src='img/courses/corses_with_qr/travel_basic/Eng 4 Traveling - Basic - QR_4500UAH (2).png'
            alt='QR code'
          /> */}
        </article>
        <article className='courseCard'>
          <button type='button' onClick={payOptimalTravel}>
            <img
              src='img/courses/corses_with_qr/travel_optimal/Eng 4 Traveling - Optimal - New.png'
              alt='course description'
            />
          </button>
          {/* <img
            className='qrCode'
            src='img/courses/corses_with_qr/travel_optimal/Eng 4 Traveling - Optimal - QR_5550UAH (2).png'
            alt='QR code'
          /> */}
        </article>
        <article className='courseCard'>
          <button type='button' onClick={payAdvancedTravel}>
            <img
              src='img/courses/corses_with_qr/travel_advanced/Eng 4 Traveling - Advanced - New.png'
              alt='course description'
            />
          </button>
          {/* <img
            className='qrCode'
            src='img/courses/corses_with_qr/travel_advanced/Eng 4 Traveling - Advanced - QR_9600UAH (2).png'
            alt='QR code'
          /> */}
        </article>
        <article className='courseCard'>
          <button type='button' onClick={payPremiumTravel}>
            <img
              src='img/courses/corses_with_qr/travel_premium/Eng 4 Traveling - Premium - New.png'
              alt='course description'
            />
          </button>
          {/* <img
            className='qrCode'
            src='img/courses/corses_with_qr/travel_premium/Eng 4 Traveling - Premium - QR_14800UAH (2).png'
            alt='QR code'
          /> */}
        </article>
      </section>
    </div>
  )
}

export default CoursesPage
