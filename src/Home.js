import React from 'react'
import FeatureProduct from './components/FeatureProduct';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';

const Home = () => {
  const data = {
    name : "Rashid's Store",
  }
  return (
    <div>
    <HeroSection datas={data}/>
    <FeatureProduct />
    <Services />
    <Trusted />
    </div>
  )
};


export default Home