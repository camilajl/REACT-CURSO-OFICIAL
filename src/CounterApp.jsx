import { useState } from 'react';
import PropTypes from 'prop-types'


export const CounterApp = ({value}) => {

    const [counter, setCounter] = useState( value )

    //cada que cambia el estado el componente se renderiza y las peticiones a API tambien se vuelven a hacer (restful api, queries)
  // esto ayuda a preservar el valor inicial de la variable 

    const handleAdd = () => {
        setCounter(counter + 1 );
        // setCounter( (c) => c + 1) otra forma de usarlo dependiendo del caso
    }

    const handleSubstract = () => setCounter(counter - 1 );
  

  const handleReset = () => setCounter(value);



    
  return (
    <>
    <h1>CounterApp</h1>
    <h2> { counter } </h2>

    <button onClick={ handleAdd }>
        +1
    </button>
    <button onClick={handleSubstract} >
        -1
    </button>
    <button onClick={handleReset} >
        Reset
    </button>
    </>
  )
}


CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

