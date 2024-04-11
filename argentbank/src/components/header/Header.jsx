import logo from '../../assets/img/argentBankLogo.png'
import './header.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className='main-nav'>
      <a className='main-nav-logo' href='/'>
        <img
          className='main-nav-logo-image'
          src={logo}
          alt='Argent Bank Logo'
        />
      </a>
      <nav>
        <NavLink to='/' className='main-nav-item'>
          <FontAwesomeIcon icon={faCircleUser} />
          Sign In
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
