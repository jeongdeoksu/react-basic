import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import AppJSX from './AppJSX.jsx'
// import AppProfile from './AppProfile.jsx'
import AppCounter from "./AppCounter.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppCounter />
  </StrictMode>,
)
