import './form-username.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import updateUsername from '../../redux/action/UpdateUsername'
import ButtonGreen from '../button-green/ButtonGreen'
import { useState, useEffect } from 'react'

function FormUsername() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleUserEvent = async (e) => {
    e.preventDefault()
    dispatch(updateUsername(userName))
    navigate('/user')
  }

  const {
    userName: initialUserName,
    firstName,
    lastName,
  } = useSelector((state) => state.user)
  const [userName, setUserName] = useState(initialUserName) // Initialisation avec la valeur du state Redux

  useEffect(() => {
    // Mettre à jour l'état local si la valeur du state Redux change
    setUserName(initialUserName)
  }, [initialUserName])

  return (
    <section className='username_content'>
      <h1>Edit user info</h1>
      <form onSubmit={handleUserEvent}>
        <div className='username_content-wrapper'>
          <label>User name</label>
          <input
            type='text'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className='username_content-wrapper'>
          <label>First name</label>

          <input type='text' placeholder={firstName} disabled />
        </div>
        <div className='username_content-wrapper'>
          <label>Last name</label>
          <input
            type='text'
            placeholder={lastName}
            disabled
            onChange={(e) => e.target.value}
          />
        </div>
        <div className='username_content-btn'>
          <ButtonGreen text='Save' btnClass='submit-btn btn-full' />
          <ButtonGreen text='Cancel' btnClass='submit-btn btn-full' />
        </div>
      </form>
    </section>
  )
}

export default FormUsername
