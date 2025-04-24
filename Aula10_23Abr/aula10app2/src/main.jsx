import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'virtual:windi.css'

console.log("passei pelo main");

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
