import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Bannermain from './components/Bannermain'
import Assurance from './components/Assurance'
import MedicalAdvisoryBoard from './components/MedicalAdvisoryBoard'
import How_to_get_started from './components/How_to_get_started'
import Ourspecialists from './components/Ourspecialists'
import From_our_blog from './components/From_our_blog'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Header/>
      <Bannermain/>
      <Assurance/>
      <MedicalAdvisoryBoard/>
      <How_to_get_started/>
      <Ourspecialists />
      <From_our_blog/>
      <Footer/>
    </div>
  )
}

export default App
