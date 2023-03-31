import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter } from 'react-router-dom'
import "@cloudscape-design/global-styles/index.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </HashRouter>,
)
