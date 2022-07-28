import React from 'react'
import Info from './components/Info'
import Interests from './components/Interests'
import About from './components/About'
import Footer from './components/Footer'
import './Styles.css'
function App() {

  return (
    <div className='contact-card'>
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default App
