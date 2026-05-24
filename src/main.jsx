import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import initAutoMuteVideos from './utils/autoMuteVideos';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Wait for React to fully mount all components before initialising video behaviour
setTimeout(() => {
  try { initAutoMuteVideos(); } catch (e) { console.warn('Auto mute init failed', e); }
}, 1500);
