import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ArticlesApp from './ArticlesApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ArticlesApp />
  </StrictMode>,
)
