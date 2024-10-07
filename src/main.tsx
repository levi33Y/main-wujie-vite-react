import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.tsx'
import './index.css'
import WujieReact from "wujie-react";
const { setupApp } = WujieReact;

setupApp({ name: "micro-webrtc", sync: true })

setupApp({ name: "micro-react-dom", sync: true  })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
