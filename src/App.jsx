import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Desh from './components/countries/Desh'
import Person from './components/person/Person'
import Header from './components/header/Header'

function App() {
 

  return (
    <>
    <Header></Header>
     <Desh></Desh>
     <Person></Person>
     
    </>
  )
}

export default App
