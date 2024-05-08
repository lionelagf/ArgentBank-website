import './button-green.scss'

function ButtonGreen({ text, btnClass }) {
  return (
    <div className='submit'>
      <button type='submit' className={btnClass}>
        {text}
      </button>
    </div>
  )
}

export default ButtonGreen
