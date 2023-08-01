import { Link } from 'react-router-dom'

const Public = () => {

  const mode = process.env.REACT_APP_MODE
  console.log('mode: ', mode)
  return (
    <section className="public">
      <header>
        <h1>Main Page</h1>
        <h2>MODE: {mode}</h2>
      </header>
      <main>
        <div className='animation-test'>
          <div className='animated-top border'>
          </div>
          <div className='animated-bot border'>
          </div>
        </div>
        <article id="progress">
          <h1>1.08.2023</h1>
          <p>1. The create profile page is now displaying actual courses.</p>
          <p>2. The user model on backend has been extended to save lesson answers.</p>
          <p>3. The chosen course is automatically set to active.</p>
        </article>
      </main>
    </section>

  )
}
export default Public
