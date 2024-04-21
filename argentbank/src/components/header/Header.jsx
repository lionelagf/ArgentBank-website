import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

import { useDispatch } from 'react-redux'
import { logoutUser } from '../../store/UserSlice'

// import store from '../../store'

import { useSelector } from 'react-redux'

import logo from '../../assets/img/argentBankLogo.png'
import './header.scss'

function Header() {
  // Vérifiez si le token est présent dans le localStorage
  const token = useSelector((state) => state.user)
  
const dispatch = useDispatch()
  
  const isLoggedIn = !!token
  console.log(isLoggedIn)



// const [user, setUser] = useState(getUser())

const handleLogout = () => {
  // Appelez l'action pour déconnecter l'utilisateur
  dispatch(logoutUser())
  // Redirigez l'utilisateur vers la page d'accueil (ou ailleurs)
  window.location.href = '/'
}

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
