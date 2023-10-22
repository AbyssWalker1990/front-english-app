const CoursesPage = () => {
  const payBasic = () => {
    window.location.href = 'https://prt.mn/giSS50jvg9'
  }
  const payOptimal = () => {
    window.location.href = 'https://prt.mn/F4e96TjiRk'
  }
  const payPremium = () => {
    window.location.href = 'https://prt.mn/MO2JeciWSL'
  }

  return (
    <div className='coursesPageContainer'>
      <section id='courses-list-overview'>
        <article className='courseCard'>
          <form action='https://www.portmone.com.ua/gateway/' method='post'>
            <input type='hidden' name='payee_id' value='1185' />
            <input
              type='hidden'
              name='shop_order_number'
              value='76575j65465464161hhhh'
            />
            <input type='hidden' name='bill_amount' value='1' />
            <input type='hidden' name='description' value='Опис замовлення' />
            <input
              type='hidden'
              name='success_url'
              value='http://example.com/success.html'
            />
            <input
              type='hidden'
              name='failure_url'
              value='http://example.com/failure.html'
            />
            <input type='hidden' name='lang' value='uk' />
            <input type='hidden' name='encoding' value='UTF-8' />
            <input type='hidden' name='exp_time' value='400' />
            <button type='button' onClick={payBasic}>
              <img
                src='img/courses/course_offer_En_4_Financiers_Basic.jpg'
                alt='course description'
              />
            </button>
          </form>
        </article>

        <article className='courseCard'>
          <form action='https://www.portmone.com.ua/gateway/' method='post'>
            <input type='hidden' name='payee_id' value='1185' />
            <input
              type='hidden'
              name='shop_order_number'
              value='76575j65465464161hhhh'
            />
            <input type='hidden' name='bill_amount' value='1' />
            <input type='hidden' name='description' value='Опис замовлення' />
            <input
              type='hidden'
              name='success_url'
              value='http://example.com/success.html'
            />
            <input
              type='hidden'
              name='failure_url'
              value='http://example.com/failure.html'
            />
            <input type='hidden' name='lang' value='uk' />
            <input type='hidden' name='encoding' value='UTF-8' />
            <input type='hidden' name='exp_time' value='400' />
            <button type='button' onClick={payOptimal}>
              <img
                src='img/courses/course_offer_En_4_Financiers_Optimal.jpg'
                alt='course description'
              />
            </button>
          </form>
        </article>

        <article className='courseCard'>
          <form action='https://www.portmone.com.ua/gateway/' method='post'>
            <input type='hidden' name='payee_id' value='1185' />
            <input
              type='hidden'
              name='shop_order_number'
              value='76575j65465464161hhhh'
            />
            <input type='hidden' name='bill_amount' value='1' />
            <input type='hidden' name='description' value='Опис замовлення' />
            <input
              type='hidden'
              name='success_url'
              value='http://example.com/success.html'
            />
            <input
              type='hidden'
              name='failure_url'
              value='http://example.com/failure.html'
            />
            <input type='hidden' name='lang' value='uk' />
            <input type='hidden' name='encoding' value='UTF-8' />
            <input type='hidden' name='exp_time' value='400' />
            <button type='button' onClick={payPremium}>
              <img
                src='img/courses/course_offer_En_4_Financiers_Premium.jpg'
                alt='course description'
              />
            </button>
          </form>
        </article>

        <article className='courseCard'>
          <form action='https://www.portmone.com.ua/gateway/' method='post'>
            <input type='hidden' name='payee_id' value='1185' />
            <input
              type='hidden'
              name='shop_order_number'
              value='76575j65465464161hhhh'
            />
            <input type='hidden' name='bill_amount' value='1' />
            <input type='hidden' name='description' value='Опис замовлення' />
            <input
              type='hidden'
              name='success_url'
              value='http://example.com/success.html'
            />
            <input
              type='hidden'
              name='failure_url'
              value='http://example.com/failure.html'
            />
            <input type='hidden' name='lang' value='uk' />
            <input type='hidden' name='encoding' value='UTF-8' />
            <input type='hidden' name='exp_time' value='400' />
            <button type='button' onClick={payBasic}>
              <img
                src='img/courses/course_offer_En_4_IT_Basic.jpg'
                alt='course description'
              />
            </button>
          </form>
        </article>

        <article className='courseCard'>
          <form action='https://www.portmone.com.ua/gateway/' method='post'>
            <input type='hidden' name='payee_id' value='1185' />
            <input
              type='hidden'
              name='shop_order_number'
              value='76575j65465464161hhhh'
            />
            <input type='hidden' name='bill_amount' value='1' />
            <input type='hidden' name='description' value='Опис замовлення' />
            <input
              type='hidden'
              name='success_url'
              value='http://example.com/success.html'
            />
            <input
              type='hidden'
              name='failure_url'
              value='http://example.com/failure.html'
            />
            <input type='hidden' name='lang' value='uk' />
            <input type='hidden' name='encoding' value='UTF-8' />
            <input type='hidden' name='exp_time' value='400' />
            <button type='button' onClick={payOptimal}>
              <img
                src='img/courses/course_offer_En_4_IT_Optimal.jpg'
                alt='course description'
              />
            </button>
          </form>
        </article>

        <article className='courseCard'>
          <form action='https://www.portmone.com.ua/gateway/' method='post'>
            <input type='hidden' name='payee_id' value='1185' />
            <input
              type='hidden'
              name='shop_order_number'
              value='76575j65465464161hhhh'
            />
            <input type='hidden' name='bill_amount' value='1' />
            <input type='hidden' name='description' value='Опис замовлення' />
            <input
              type='hidden'
              name='success_url'
              value='http://example.com/success.html'
            />
            <input
              type='hidden'
              name='failure_url'
              value='http://example.com/failure.html'
            />
            <input type='hidden' name='lang' value='uk' />
            <input type='hidden' name='encoding' value='UTF-8' />
            <input type='hidden' name='exp_time' value='400' />
            <button type='button' onClick={payPremium}>
              <img
                src='img/courses/course_offer_En_4_IT_Premium.jpg'
                alt='course description'
              />
            </button>
          </form>
        </article>

        <article className='courseCard'>
          <form action='https://www.portmone.com.ua/gateway/' method='post'>
            <input type='hidden' name='payee_id' value='1185' />
            <input
              type='hidden'
              name='shop_order_number'
              value='76575j65465464161hhhh'
            />
            <input type='hidden' name='bill_amount' value='1' />
            <input type='hidden' name='description' value='Опис замовлення' />
            <input
              type='hidden'
              name='success_url'
              value='http://example.com/success.html'
            />
            <input
              type='hidden'
              name='failure_url'
              value='http://example.com/failure.html'
            />
            <input type='hidden' name='lang' value='uk' />
            <input type='hidden' name='encoding' value='UTF-8' />
            <input type='hidden' name='exp_time' value='400' />
            <button
              type='button'
              onClick={() =>
                (window.location.href = 'https://prt.mn/XOcVfepYAj')
              }
            >
              <img
                src='img/courses/course_offer_En_4_Tourism_Basic.jpg'
                alt='course description'
              />
            </button>
          </form>
        </article>

        <article className='courseCard'>
          <form action='https://www.portmone.com.ua/gateway/' method='post'>
            <input type='hidden' name='payee_id' value='1185' />
            <input
              type='hidden'
              name='shop_order_number'
              value='76575j65465464161hhhh'
            />
            <input type='hidden' name='bill_amount' value='1' />
            <input type='hidden' name='description' value='Опис замовлення' />
            <input
              type='hidden'
              name='success_url'
              value='http://example.com/success.html'
            />
            <input
              type='hidden'
              name='failure_url'
              value='http://example.com/failure.html'
            />
            <input type='hidden' name='lang' value='uk' />
            <input type='hidden' name='encoding' value='UTF-8' />
            <input type='hidden' name='exp_time' value='400' />
            <button type='button' onClick={payOptimal}>
              <img
                src='img/courses/course_offer_En_4_Tourism_Optimal.jpg'
                alt='course description'
              />
            </button>
          </form>
        </article>

        <article className='courseCard'>
          <form action='https://www.portmone.com.ua/gateway/' method='post'>
            <input type='hidden' name='payee_id' value='1185' />
            <input
              type='hidden'
              name='shop_order_number'
              value='76575j65465464161hhhh'
            />
            <input type='hidden' name='bill_amount' value='1' />
            <input type='hidden' name='description' value='Опис замовлення' />
            <input
              type='hidden'
              name='success_url'
              value='http://example.com/success.html'
            />
            <input
              type='hidden'
              name='failure_url'
              value='http://example.com/failure.html'
            />
            <input type='hidden' name='lang' value='uk' />
            <input type='hidden' name='encoding' value='UTF-8' />
            <input type='hidden' name='exp_time' value='400' />
            <button type='button' onClick={payPremium}>
              <img
                src='img/courses/course_offer_En_4_Tourism_Premium.jpg'
                alt='course description'
              />
            </button>
          </form>
        </article>
        <button
          type='button'
          style={{
            background: '#466e91',
            color: '#FFFFFF',
            fontSize: '16px',
            height: '48px',
            width: '320px',
            borderRadius: '10px',
          }}
          onClick={payBasic}
        >
          Оплатити через Portmone Basic{' '}
        </button>
        <button
          type='button'
          style={{
            background: '#466e91',
            color: '#FFFFFF',
            fontSize: '16px',
            height: '48px',
            width: '320px',
            borderRadius: '10px',
          }}
          onClick={payOptimal}
        >
          Оплатити через Portmone Optimal{' '}
        </button>
        <button
          type='button'
          style={{
            background: '#466e91',
            color: '#FFFFFF',
            fontSize: '16px',
            height: '48px',
            width: '320px',
            borderRadius: '10px',
          }}
          onClick={payPremium}
        >
          Оплатити через Portmone Premium{' '}
        </button>
      </section>
    </div>
  )
}

export default CoursesPage
