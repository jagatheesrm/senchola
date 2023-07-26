import React from 'react'
import Header from './Header'
import Feature1 from './Feature-1'
import Feature2 from './Feature-2'
import Feature3 from './feature-3'
import Gallery from './Gallery'
import Testimonials from './Testimonials'
import Footer from '../Footer'
const Home = () => {
  return (
    <div>
      <Header />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Gallery />
      <Testimonials />
      <Footer/>
    </div>
  )
}

export default Home
