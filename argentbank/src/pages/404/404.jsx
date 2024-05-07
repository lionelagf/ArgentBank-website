import { Link } from 'react-router-dom'
import './404.scss'

function PageError() {
  return (
    <main className='error'>
      <h1 className='error__title color'>404</h1>
      <h3 className='error__subtitle color'>
        Page Not Found
      </h3>
      <Link to='/'>
        <span className='error__back-button'>
          Retourner sur la page d'accueil
        </span>
      </Link>
    </main>
  )
}

export default PageError
