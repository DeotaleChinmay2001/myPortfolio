import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import WorkExperience from './components/WorkExperience/WorkExperience'
import Myprojects from './components/myprojects/Myprojects'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    
    <>
        <Header/>
        <Nav/>
        <About/>
        <WorkExperience/>
        <Myprojects/>
        <Contacts/>
        <Footer/>

    </>
  )
}

export default App