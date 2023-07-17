
import PropTypes from 'prop-types'

const newMessage = 'Camila' //si es una constante independiente del comportamiento interno se pued eponer afuera
// React no reprocesa las variables que esten afuera de la funcion 

const getSaludo = (name) => { //si fuera una funcion asincrona no funcionaria porque una promesa es un objeto
    return 'Hola mundo ' + name
}



export const FirstApp = ({title}) => {


  return (
    <>
       <h1> {getSaludo(newMessage)}</h1>
       <h1>{title}</h1>
        {/* <code> {JSON.stringify(newMessage)} </code>   dentro de llaves puedo poner expresiones JS que no sean un objeto  */}

    </>

 
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: 'NO hay titulos'
    
}