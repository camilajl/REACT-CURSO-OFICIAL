import PropTypes from 'prop-types'  
import { useLayoutEffect, useRef, useState } from 'react'


export const Locations = ({name,dimension}) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({width: 0, height: 0 })

  useLayoutEffect(() => {
    const {height, width} = pRef.current.getBoundingClientRect();
    setBoxSize({height,width})
  }, [name])


  return (
    <>
    <div className="alert alert-info- text-start" style={{display: 'flex'}}>
        <h1 ref={pRef}>{name}</h1>
        <p>{dimension}</p>
    </div>

    <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}


Locations.propTypes = {  
    name: PropTypes.string,  
    dimension:  PropTypes.string,
    
}  
   
   
