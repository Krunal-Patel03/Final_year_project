import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { FilterProvider } from './context/FilterContext.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <FilterProvider>
  <App />
  </FilterProvider>
  
 
  </React.StrictMode>,
)
