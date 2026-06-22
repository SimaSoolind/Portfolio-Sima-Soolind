import { useState } from 'react'
import Info from './Components/Info'
import About from './Components/About'
import Interests from './Components/Interests'
import Footer from './Components/Footer'
import './App.css'


function App() {
  return (
    <>
    <div className="card">
      <h1> hej här är min profiln</h1>
      <Info />
      <About />
      <Interests />
      <Footer />

    </div>

    </>
  )
}

export default App
