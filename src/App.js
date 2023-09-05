import React from 'react'
import { Navbar, Brand, CTA } from './components'
import { Blog, Footer, Possibility, Features, WhatGPT3, Header } from './container'
import "./App.css"

const App = () => {
  return (
    
      <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />

      </div>
  )
}

export default App
