import { Message } from "./Message"
import { useForm } from "../hooks/useForm"


export const SimpleFormCustomHoo = () => {

  const {formState, onInputChange, onResetForm, username, email,password} = useForm({
    username: '',
    password: '',
    email: '',
  })

  // const {username, email,password} = formState;

  console.log('formState :>> ', formState);




  return (
    <>
    <h1>SimpleForm custom hook</h1>
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

    <input type="password" 
    className="form-control mt-2"
    placeholder="password"
    name="password"
    value={password}
    onChange={onInputChange}
    />

    {
        username === 'camila1' &&  <Message />
    }

    <button onClick={onResetForm} className="btn btn-primary mt-4">Reset</button>

   
    
    </>
  )
}
