import './features.scss'


function Features({img, iconAlt, title, description}) {
    return (
        <div className='features-item'>
          <img src={img} alt={iconAlt} class='features-icon' />
          <h3 class='features-item-title'>{title}</h3>
          <p>{description}</p>
        </div>
    )
}

export default Features