// import React from 'react'
import ReactDOM  from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import { HooksApp } from './HooksApp'
//import { CounterApp } from './01-useState/CounterApp'
//import { CounterCustomHoo } from './01-useState/CounterCustomHoo'
//import { SimpleForm } from './02-useEffect/SimpleForm'
// import { SimpleFormCustomHoo } from './02-useEffect/SimpleFormCustomHoo'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
//import { MemoHoo } from './06-memos/MemoHoo'
// import { CallBackHook } from './06-memos/CallBackHook'
// import { Hijo } from './07-tarea-memo/Hijo'
// import { Padre } from './07-tarea-memo/Padre'
//import { TodoApp } from './08-useReducer/TodoApp'

import './08-useReducer/intro-reducer'
import { MainApp } from './09-useContext/MainApp'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter> 
     {/* <React.StrictMode> */}
     <MainApp/> 
    {/* </React.StrictMode> */}
    </BrowserRouter>
)