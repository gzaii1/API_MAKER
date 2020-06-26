import React from 'react'
import {Header, Middle, Left, Footer, Main} from '@components'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Middle>
        <Left /> <Main />
      </Middle>
      <Footer />
    </>   
  )
}

export default App
