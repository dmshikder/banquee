import React from 'react';
import AllFeatures from '../AllFeatures/AllFeatures';
import Cards from '../Cards/Cards';
import Features from '../Features/Features';
import Hero from '../Hero/Hero';
import './Home.css';
const Home = () => {
  return (
    <div className='home'>
        <Hero/>
        <Features/>
        <hr className='line'/>
        <AllFeatures/>
        <Cards/>
    </div>
  )
}

export default Home