import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { logoutReducer } from '../../redux/store/loginSlice'
import { useDispatch } from 'react-redux'

import { useSelector } from 'react-redux'

import logo from '../../assets/img/argentBankLogo.png'
import './header.scss'

function Header() {
  const token = useSelector((state) => state.login.token)

  const dispatch = useDispatch()

  const handleLogout = (token) => {
    window.location.href = '/'
      dispatch(logoutReducer())
  }

  const isLoggedIn = !!token
  console.log(isLoggedIn)


  return (
    <header>
      <nav className='main-nav'>
        <div>
          <NavLink className='main-nav-logo' to='/'>
            <img
              className='main-nav-logo-image'
              src={logo}
              alt='Argent Bank Logo'
            />
          </NavLink>
        </div>
        {isLoggedIn ? (
          // Si l'utilisateur est connecté, affichez le bouton "SignOut"
          <div className='main-nav-container-item'>
            <NavLink className='main-nav-item'>
              <FontAwesomeIcon icon={faCircleUser} />
              Name
            </NavLink>
            <NavLink onClick={handleLogout} className='main-nav-item'>
              <FontAwesomeIcon icon={faRightFromBracket} />
              Sign Out
            </NavLink>
          </div>
        ) : (
          // Sinon, affichez le bouton "SignIn"
          <NavLink to='/sign-in' className='main-nav-item'>
            <FontAwesomeIcon icon={faCircleUser} />
            Sign In
          </NavLink>
        )}
      </nav>
    </header>
  )
}

export default Header
