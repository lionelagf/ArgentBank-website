import './features.scss'

function Features({ img, iconAlt, title, description }) {
  return (
    <div className='features-item'>
      <img src={img} alt={iconAlt} className='features-icon' />
      <h3 className='features-item-title'>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Features
