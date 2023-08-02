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
          <p>4. Created skeleton for course overview page for student</p>
          <h1>2.08.2023</h1>
          <p>1. The page for the active course is displaying a lesson list</p>
          <p>2. Created a dynamic page that includes lesson blocks with exercises</p>
          <p>3. Fixed bug when page tries to render blocks data before fetching courses from back-end</p>
          <p>4. Each exercise block now building state structure of exercises like in target course </p>
          <p>5. The exercise block inputs are now synchronized with the state and tracking if all tasks are complete</p>
        </article>
      </main>
    </section>

  )
}
export default Public
