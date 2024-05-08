import './form-login.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import ButtonGreen from '../button-green/ButtonGreen'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginReducer } from '../../redux/store/loginSlice'

import { loginUser } from '../../redux/action/authenticationService'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState('')

  const handleLoginEvent = async (e) => {
    e.preventDefault()
    let userCredentials = {
      email,
      password,
    }

    try {
      const token = await loginUser(userCredentials)
      dispatch(loginReducer({ token: token }))
      navigate('/user')
    } catch (error) {
      setErrorMessage(error.message)
    }
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
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='input-wrapper'>
          <label>Password</label>
          <input
            type='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='input-remember'>
          <input type='checkbox' id='remember-me' />
          <label htmlFor='remember-me'>Remember me</label>
        </div>
        <div>
          {errorMessage && <div className='error-message'>{errorMessage}</div>}
        </div>
        <ButtonGreen text='Login' btnClass='submit-btn btn-full' />
      </form>
    </section>
  )
}
