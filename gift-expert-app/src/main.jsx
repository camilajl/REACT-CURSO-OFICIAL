import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { GifExpertApp } from './GifExpertApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  //STRICTMODE SOLO SE USA EN DESARROLLO ,AYUDA DANDO WARNINGS Y AVISANDO PROBLEMAS DE LIFECYCLE..ETC.
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
)
