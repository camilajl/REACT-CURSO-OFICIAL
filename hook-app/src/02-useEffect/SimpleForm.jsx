import { useEffect, useState } from "react"
import { Message } from "./Message"


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'camila',
        email: 'camila@email.com'
    })

    const {username,email} = formState

    const onInputChange = ({target}) => {
        const {name,value} = target;
        setFormState({
            ...formState,
            [name]:value
        })
        console.log({name,value})
    }

    useEffect(() => {
    //   console.log('useEffectCalled')

    }, []) //arreglo vacio para que solo se ejecute una vez

    useEffect(() => {
        // console.log('formState cambió')
      }, [formState]) 
    
      useEffect(() => {
        // console.log('email cambió')
      }, [email]) 


  return (
    <>
    <h1>SimpleForm</h1>
    <hr />

    <input type="text" 
    className="form-control"
    placeholder="username"
    name="username"
    value={username}
    onChange={onInputChange}
    />

    <input type="email" 
    className="form-control mt-2"
    placeholder="email@email.com"
    name="email"
    value={email}
    onChange={onInputChange}
    />

    {
        username === 'camila1' &&  <Message />
    }

   
    
    </>
  )
}
