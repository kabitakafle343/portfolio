import React from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import { About } from './Components/About'
import { Sociallife } from './Components/Sociallife'
import { Myself } from './Components/Myself'
import { Portfolio } from './Components/Portfolio'
import EXperience from './Components/EXperience'
import Contact from './Components/Contact'

function App() {


  return (
    <>
  
       
     
      <Navbar/>
  <About/>
  <Sociallife/>
  <Myself/>
<Portfolio/>
<EXperience/>
<Contact/>
    </>
  )
}

export default App
