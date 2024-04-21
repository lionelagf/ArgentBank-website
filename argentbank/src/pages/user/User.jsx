import './user.scss'
import ButtonGreen from '../../components/button-green/ButtonGreen'
import Transaction from '../../components/transaction/Transaction'

function User() {
    return (
      <main className='main bg-dark'>
        <div className='header'>
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <ButtonGreen text='Edit Name' />
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