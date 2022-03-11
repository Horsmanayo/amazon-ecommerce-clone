import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from "./Components/header-component/Header"
import Home from "./Components/home-component/Home"
import Checkout from './Pages/checkout-component/Checkout'


function App() {
  return (
    <div>
        <Header />
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/checkout' element={ <Checkout />} />
          <Route path='*' element={<h1>Wrong route</h1>} />
        </Routes>
    </div>
  )
}

export default App