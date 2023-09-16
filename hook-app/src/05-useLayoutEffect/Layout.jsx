import { useFetch, useCounter } from "../hooks"
import { Loading, Locations  } from "../03-examples";


export const Layout = () => {

    const {increment,counter} = useCounter(1)
    const {data, isLoading} = useFetch(`https://rickandmortyapi.com/api/location/${counter}`);

    const {name, dimension} = !!data && data;  //si data tiene un valor entonces toma la data en la posición 0

  return (
    <>
    <h1>Rick & Morty Locations</h1>
    <hr />

    {
    (isLoading) 
    
    ? <Loading />
    : <Locations name={name} dimension={dimension} />
     
    }

    <button disabled={isLoading} onClick={() => increment() } className="btn btn-primary">next location</button>
    
    </>
  )
}
