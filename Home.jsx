import React from 'react'
import Slider from '../../Components/Slider/Slider'
import "./Home.scss"
import Features from '../../Components/Features/Features'
import Categories from '../../Components/Categories/Categories'
import Contact from '../../Components/Contact/Contact'

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <Features type="featured"/>
      <Categories/>
      <Features type="trending"/>
      <Contact/>

    </div>
  )
}

export default Home