import React from 'react'
import ContactMe from '../Component/ContactMe'
import Education from '../Component/Education'
import Hamburger from '../Component/Hamburger'
import Header from '../Component/Header'
import Main from '../Component/Main'
import SideBar from '../Component/SideBar'
import Skills from '../Component/Skills'
import WorkProgress from '../Component/WorkProgress'

const Home = () => {
  return (
    <div>
        <SideBar/>
        <Header/>
        <Main/>
        <Skills/>
        <WorkProgress/>
        <Hamburger/>
        <Education/>
        <ContactMe/>
    </div>
  )
}

export default Home