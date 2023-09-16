import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";
import { useEffect } from "react";

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
      (value) => { //los argumentos tambien se deben recibir aca porque esta es la funcionq ue memoricé
        setCounter((co) => co + value) 
      },
      [], //si se envia u arreglo vacio solo se va a ejecutar una vez y nunca más
    )   // memoriza funciones, hace lo mismo que useMemo y solo ejecuta la funcion cuando cambien sus dependencias
    

    // const incrementFather = () => {
       
    // }

    useEffect(() => {
     
    }, [incrementFather])
    

  return (
    <>
    <h1>useCallback: {counter}</h1>
    <hr />
    
    <ShowIncrement increment={incrementFather} />
    </>
  )
}
