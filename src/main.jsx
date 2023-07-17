import React from 'react'
import ReactDOM from 'react-dom/client'
//import { FirstApp } from './FirstApp'  //es recomendado utilizar exportaciones independientes {}
import './global.css'
import { CounterApp } from './CounterApp'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={10}/>
        
    </React.StrictMode> //PascalCase
)