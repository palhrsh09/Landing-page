import React from 'react'
import { Navbar } from './Navbar'
import { HeroSection } from './HeroSection'
import { Feature } from './Feature'
import { WorkFlow } from './WorkFlow'
import Pricing from './Pricing'
import Testimonials from './Testomonial'
import Footer from './Footer'

export const LandingPage = () => {
  return (
    <>
        <Navbar />
        <div className='max-w-7xl mx-auto pt-20 px-6'>
          <HeroSection />
          <Feature />
          <WorkFlow />
          <Pricing />
          <Testimonials />
          <Footer />
        </div>
       
    </>
  )
}
