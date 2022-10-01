import React from 'react';
import AllFeatures from '../AllFeatures/AllFeatures';
import Cards from '../Cards/Cards';
import Faq from '../Faq/Faq';
import Features from '../Features/Features';
import Hero from '../Hero/Hero';
const Home = () => {
  return (
    <div >
        <Hero/>
        <Features/>
        <hr className='border-x-8  border-greenWhite mt-40'/>
        <AllFeatures/>
        <Cards/>
        <Faq/>
    </div>
  )
}

export default Home