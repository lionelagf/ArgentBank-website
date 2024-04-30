import './button-green.scss'

function ButtonGreen( {text, btnClass}) {



return (
  <div >
    <button type='submit' className={btnClass}>{text}</button>
  </div>
)

}


export default ButtonGreen