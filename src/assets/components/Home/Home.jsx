import React from 'react'
import Section1 from '../Section1/Section1'
import Section2 from '../Section2/Section2'
import Section3 from '../Section3/Section3'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Footer/>
    </div>
  )
}

export default Home
