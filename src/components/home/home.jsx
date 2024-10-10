import React from 'react'
import Bannermain from './Bannermain'
import Assurance from './Assurance'
import MedicalAdvisoryBoard from './MedicalAdvisoryBoard'
import How_to_get_started from './How_to_get_started'
import Ourspecialists from './Ourspecialists'
import From_our_blog from './From_our_blog'
import Footer from '../common/Footer'

const Home = () => {
  return (
    <div>
      <Bannermain/>
      <Assurance/>
      <MedicalAdvisoryBoard/>
      <How_to_get_started/>
      <Ourspecialists />
      <From_our_blog/>
    </div>
  )
}

export default Home
