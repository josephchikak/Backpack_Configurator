import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Experience from './components/Experience.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Experience />
  </StrictMode>,
)
