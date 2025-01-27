import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About  from './Pages/About'
import Contact from './Pages/Contact'
import Delivery from './Pages/Delivery'
import Menu from './Pages/Menu'
import MainContainer from './Pages/MainContainer'
import './App.css'

const App = ()  => {
  return (
    <BrowserRouter>
      <MainContainer>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/delivery" element={<Delivery />} />
        </Routes>
      </MainContainer>
    </BrowserRouter>
  )
}

export default App;
