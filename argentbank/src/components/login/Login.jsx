import './login.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
// import ButtonGreen from '../../components/button-green/ButtonGreen'

import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../store/UserSlice'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Login = () => {
  // states
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // redux state
  const { loading, error } = useSelector((state) => state.user)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLoginEvent = (e) => {
    e.preventDefault();
    let userCredentials = {
      email,
      password,
    }
    dispatch(loginUser(userCredentials)).then((result) => {
      if (result.payload) {
        setEmail('')
        setPassword('')
        navigate('/user')
      }
    })
  }

  return (
    <section className='sign-in-content'>
      <FontAwesomeIcon icon={faCircleUser} />
      <h1>Sign In</h1>
      <form onSubmit={handleLoginEvent}>
        <div className='input-wrapper'>
          <label>Email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='input-wrapper'>
          <label>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='input-remember'>
          <input type='checkbox' id='remember-me' />
          <label htmlFor='remember-me'>Remember me</label>
        </div>
        <button type='submit'>{loading ? 'loading...' : 'Login'}</button>
        {error && <div role='alert'>{error}</div>}
      </form>
    </section>
  )
}
