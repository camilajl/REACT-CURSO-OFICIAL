import { useState } from "react"
import { UserContext } from "./UserContext"
import PropTypes from 'prop-types'  

// const user = {
//     id:23,
//     name: 'camila',
//     email: 'camila@gmail.com'
// }

export const UserProvider = ({children}) => {

  const [user, setUser] = useState()
  return (
    // provee toda la info que puede proporcionar
    <UserContext.Provider value={{user, setUser}}> 
        {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {  
    children : PropTypes.any,  
 }  
