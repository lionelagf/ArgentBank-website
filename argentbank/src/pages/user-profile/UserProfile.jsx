import './user-profile.scss'
import '../../components/button-green/button-green.scss'
import ButtonGreen from '../../components/button-green/ButtonGreen'
import Transaction from '../../components/transaction/Transaction'
import fetchProfile from '../../redux/action/fetchProfile'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useCallback } from 'react'

function User() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { firstName, lastName } = useSelector((state) => state.user)
  const { token } = useSelector((state) => state.login)

  const fetchUserProfile = useCallback(() => {
    dispatch(fetchProfile())
  }, [dispatch])
  useEffect(() => {
    if (!token) {
      navigate('/')
    } else {
      fetchUserProfile()
    }
  }, [token, navigate, fetchUserProfile])

  return (
    <main className='main bg-dark'>
      <div className='header'>
        <h1 className='header-title'>
          Welcome back
          <p>
            {firstName} {lastName}
          </p>
        </h1>
        <div className='small'>
          <NavLink to='/edit-username'>
            <ButtonGreen text='Edit Name' btnClass='submit-btn btn-small' />
          </NavLink>
        </div>
      </div>
      <Transaction
        title='Argent Bank Checking (x8349)'
        balance='$2,082.79'
        type='Available Balance'
      />
      <Transaction
        title='Argent Bank Savings (x6712)'
        balance='$10,928.42'
        type='Available Balance'
      />
      <Transaction
        title='Argent Bank Credit Card (x8349)'
        balance='$184.30'
        type='Current Balance'
      />
    </main>
  )
}

export default User
