import PropTypes from 'prop-types'  

export const GifItem = ({img, title}) => {
  return (
    <div className='card'>
        
        <img src={img} alt="imagen" />
        <p>{title}</p>
    </div>
  )
}

GifItem.propTypes = {  
    img: PropTypes.string, 
    title: PropTypes.string, 
    
   }  