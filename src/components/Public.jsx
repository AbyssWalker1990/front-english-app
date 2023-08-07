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
          <p>6. The exercise block component can now form answers data and send it to the backend.</p>
          <p>7. Added logic to backend for building whole structure for answers in profile user model</p>
          <h1>3.08.2023</h1>
          <p>1. Fixed bug with inappropriate positions of lessons and exercise blocks in results model</p>
          <p>2. Answers are now saving in the database</p>
          <h1>4.08.2023</h1>
          <p>1. Answers can now be fetched from the back end and prepopulated in the inputs.</p>
          <p>2. Fixed many synchronization issues with answers.</p>
          <p>3. Fixed critical problem when app tryed to fetch student answer data before creating skeleton structure for course. IMPORTANT: now structure fo answers is building after chosing course in create account page. The method needs to be triggered each time the student switches courses.</p>
          <p>4. Refactored the profile controller's methods for handling answers. Still a mess, but with slightly separated logic</p>
          <p>5. Fixed bugs with syncing new blocks and lessons with profile that already start course. There WILL BE problems if created more than 1 new block or lesson and user does not start from the first added block</p>
          <p>Recommend to create new user for testing</p>
          <p>There are also problems with displaying new added exercises with profiles that already start course. All problems mainly with updating course and profiles that used old version. For testing functionality without these issues - create new account and choose course AFTER update of this course. Stability for modifying </p>
          <h1>5.08.2023</h1>
          <p>1. The courses are now refetched correctly after the exercises are updated.</p>
          <p>2. Added notification for save buttons</p>
          <p>3. Added more save buttons</p>
          <h1>6.08.2023</h1>
          <p>1. Students will no longer receive an error message on the lesson page when they attempt to type in the input of a newly created exercise after starting the course.</p>
          <p>2. Fixed broken auto re-render on adding/deleting new lesson/block/exercise.</p>
          <h1>7.08.2023</h1>
          <p>1. Created coursesResultsSchema for students profile</p>
          <p>1. Created mutation for trigger profile controller to calculate results of lesson</p>
        </article>
      </main>
    </section>

  )
}
export default Public
