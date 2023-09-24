import { Link } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear()

  const imageBasePath =
    window.location.protocol + '//' + window.location.host + '/img'

  return (
    <footer>
      <img
        className='footerVisaMastercard'
        src={`${imageBasePath}/visa-and-mastercard-logos.png`}
        alt='visa and mastercard logo'
      />
      <Link className='oferta' to='/oferta'>
        Публічна оферта
      </Link>
      <Link className='oferta' to='/policy'>
        Політика конфіденційності
      </Link>
      <p>© {year} English With Success, Ltd. All rights reserved.</p>
    </footer>
  )
}
export default Footer
