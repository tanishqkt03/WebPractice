import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'

function App() {

  return (
    <>
      <div className='text-3xl bg-black text-white'>React Router</div>
    <Header />
    <Home />
    <Footer />
    </>
  )
}

export default App
