import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Module1 from './Module1.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Module1 />
  </StrictMode>,
)
