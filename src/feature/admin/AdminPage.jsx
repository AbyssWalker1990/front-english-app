import { Link } from "react-router-dom"

const AdminPage = () => {


  return (

    <section>
      <header>
        <h1>Admin Page1</h1>
      </header>
      <div>
        <ul>
          <li><Link to='/courses'>All Courses</Link></li>
        </ul>
      </div>
    </section>

  )
}

export default AdminPage