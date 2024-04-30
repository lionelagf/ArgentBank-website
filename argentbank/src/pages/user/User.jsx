import './user.scss'
import ButtonGreen from '../../components/button-green/ButtonGreen'
import Transaction from '../../components/transaction/Transaction'
import fetchProfile from '../../redux/action/fetchProfile'
import { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

function User() {
  const dispatch = useDispatch()
  const { firstName, lastName } = useSelector((state) => state.user)
  const fetchUserProfile = () => {
    dispatch(fetchProfile())
  }

  useEffect(() => {
    fetchUserProfile()
  })

  return (
    <main className='main bg-dark'>
      <div className='header'>
        <h1>
          Welcome back
          <br />
          <p>
            {firstName} {lastName}
          </p>
        </h1>
        <ButtonGreen text='Edit Name' btnClass='sign-in-button' />
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
