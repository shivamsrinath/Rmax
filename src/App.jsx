import React from 'react'
import Header from './components/common/Header'
import HeroSection from './components/LandingPage/Herosection'
import Onboard from './components/OnboardPage/Onboard'
import Whyrmax from './components/whyRmax/Whyrmax'
import ServiceProvider from './components/ServiceProvider/ServiceProvider'
import Plans from './components/Plan/Plans'
import Manage from './components/Manage/Manage'
import Faq from './components/Faq/Faq'
import Footer from './components/common/Footer'

const App = () => {
  return (
    <>
    <Header/>
    <HeroSection/>
    <Onboard/>
    <Whyrmax/>
    <ServiceProvider/>
    <Plans/>
    <Manage/>
    <Faq/>
    <Footer/>
    </>
  )
}

export default App
