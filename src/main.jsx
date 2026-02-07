import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./tailwind.css"
import { BrowserRouter } from 'react-router-dom'
import NameState from "./context/states/NameState"

createRoot(document.getElementById('root')).render(
  <NameState>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </NameState>,
)
