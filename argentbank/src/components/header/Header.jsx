import './header.scss'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='main__nav'>
      <a className='main-nav-logo' href='/'>
        <img
          className='main-nav-logo-image'
          src='../../assets/img/argentBankLogo.png'
          alt='Argent Bank Logo'
        />
      </a>
      <nav className=''>
        <NavLink to='/' className='header__navlink'>
          Accueil
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
