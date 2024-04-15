import './button-green.scss'

function ButtonGreen( {text}) {

function handleSubmit(e) {
  e.preventDefault()
  console.log('You clicked submit.')
}

return (
  <form onSubmit={handleSubmit}>
    <button type='submit' className='sign-in-button'>{text}</button>
  </form>
)

}


export default ButtonGreen