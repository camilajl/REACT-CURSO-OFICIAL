import React from 'react';
import PropTypes from 'prop-types'  


// eslint-disable-next-line react/display-name
export const Small = React.memo(({value}) => {

    console.log('me volvi a dibujrar:>> ');
  return (
    <small>{ value }</small>
  )
});

// solo renderiza small cuando cambian sus props - value - si no no lo renderiza otra vez



Small.propTypes = {  
    value: PropTypes.any,
    
}  
   