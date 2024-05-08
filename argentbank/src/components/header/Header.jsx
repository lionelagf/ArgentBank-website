import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { logoutReducer } from '../../redux/store/loginSlice'
import { clearUser } from '../../redux/store/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import logo from '../../assets/img/argentBankLogo.png'
import './header.scss'

function Header() {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.login.token)
  const navigate = useNavigate()

  const { userName } = useSelector((state) => state.user)

  const handleLogout = () => {
    // Redirigez l'utilisateur vers la page d'accueil
    navigate('/')
    // Réinitialisez l'état de connexion
    dispatch(logoutReducer())
    // Réinitialisez l'état de l'utilisateur
    dispatch(clearUser())
  }

  const isLoggedIn = !!token

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
            <NavLink className='main-nav-item' to='/user'>
              <FontAwesomeIcon icon={faCircleUser} />
              {userName}
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
