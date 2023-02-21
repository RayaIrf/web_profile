import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Home from './Home'
import About from './About'
import Team from './Team'
import Portfolio from './Portfolio'
import Contact from './Contact'
import './index.css'
import Navbar from './Navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Team' element={<Team />}></Route>
        <Route path='/Portfolio' element={<Portfolio />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
