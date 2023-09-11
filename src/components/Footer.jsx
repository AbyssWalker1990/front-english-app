import { Link } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer>
      <Link className='oferta' to='/oferta'>
        Публічна оферта
      </Link>
      <p>© {year} English With Success, Ltd. All rights reserved.</p>
    </footer>
  )
}
export default Footer
