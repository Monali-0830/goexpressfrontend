import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContextProvider from './context/userContext.jsx'
import  CaptainContext from './context/CaptainContext.jsx'
import SocketProvider from './context/SocketContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <SocketProvider>
        <CaptainContext>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CaptainContext>
      </SocketProvider>
    </UserContextProvider>
  </StrictMode>
);