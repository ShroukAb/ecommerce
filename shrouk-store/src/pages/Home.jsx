import React from 'react'
import Header from '../components/header/Header'
import FeatureCategories from '../components/FeatureCategories/FeatureCategories'
import TrendingProducts from '../components/TrendingProducts/TrendingProducts'
import Banner from '../components/Banner/Banner'
import Team from '../components/team/Team'

const Home = () => {
  return (
    <div>
        <Header/>
     <FeatureCategories/>
     <TrendingProducts/>
     <Banner/>
     <Team/>
    
    </div>
  )
}

export default Home
