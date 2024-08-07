import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Bannermain from './components/Bannermain'
import Assurance from './components/Assurance'
import MedicalAdvisoryBoard from './components/MedicalAdvisoryBoard'
import How_to_get_started from './components/How_to_get_started'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Bannermain/>
      <Assurance/>
      <MedicalAdvisoryBoard/>
      <How_to_get_started/>
    </div>
  )
}

export default App
