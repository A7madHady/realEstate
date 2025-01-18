import Navbar from '@/components/Navbar'
import React from 'react'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import FeaturedProperties from '@/components/FeaturedProperties'
import Services from '@/components/Services'
import  Footer  from '@/components/Footer'

const page = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <HowItWorks/>
    <FeaturedProperties/>
    <Services/>
    <Footer/>
    </>
  )
}

export default page
