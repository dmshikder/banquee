import React from 'react'
import AllFeatures from '../AllFeatures/AllFeatures'
import Features from '../Features/Features'
import Hero from '../Hero/Hero'
import './Home.css'
const Home = () => {
  return (
    <div className='home'>
        <Hero/>
        <Features/>
        <AllFeatures/>
    </div>
  )
}

export default Home