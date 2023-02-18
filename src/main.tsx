import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "@cloudscape-design/global-styles/index.css"
import './Components/intro.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)