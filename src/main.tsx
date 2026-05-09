import React from 'react'
import ReactDOM from 'react-dom/client'
import AppLayout from './components/layout/AppLayout'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>,
)
