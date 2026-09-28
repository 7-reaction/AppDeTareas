import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './css/index.css'
import './css/estilosdelmonton.css'
import './fontello/css/fontello.css'

import { TareasApp } from './TareasApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TareasApp />
  </StrictMode>,
)
