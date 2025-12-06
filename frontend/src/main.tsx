import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss';
import App from "./application/application.component";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
