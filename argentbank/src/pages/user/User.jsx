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
        <section className='account'>
          <Transaction
            title='Argent Bank Checking (x8349)'
            balance='$2,082.79'
            type='Available Balance'
          />
        </section>
      </main>
    )
}

export default User