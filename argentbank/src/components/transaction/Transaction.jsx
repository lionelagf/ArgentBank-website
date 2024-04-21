import './transaction.scss'
import ButtonGreen from '../button-green/ButtonGreen'

function Transaction({ title, balance, type }) {
  return (
    <section className='account'>
      <div className='account-wrapper'>
        <div className='account-content-wrapper'>
          <h3 className='account-title'>{title}</h3>
          <p className='account-amount'>{balance}</p>
          <p className='account-amount-description'>{type}</p>
        </div>
        <div className='account-content-wrapper cta'>
          <ButtonGreen text='View transactions' />
        </div>
      </div>
    </section>
  )
}

export default Transaction
