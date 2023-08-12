import PropTypes from 'prop-types'  
import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category);
  console.log('isLoading :>> ', isLoading);

  return (
    <>
    <h3>{category}</h3>
    <div>
      {images?.map( img =>(
        <GifItem key={img?.id} title={img?.title} img={img?.url} />
      ))}
      
    </div>
    </>
  )
}

export default GifGrid;

GifGrid.propTypes = {  
    category: PropTypes.any, 
    
   }  