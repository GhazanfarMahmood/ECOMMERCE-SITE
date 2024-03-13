import React from 'react'

//Components of Home page
import PopularProducts from '../../components/Home/PopularProducts/PopularProducts'
import NewlyArrival from '../../components/Home/NewlyArrival/NewlyArrival'
import HomeHero from '../../components/Home/HomeHero/HomeHero'

const Home = () => {
  return (
    <>
    <HomeHero />
    <PopularProducts />
    <NewlyArrival />
    </>
  )
}

export default Home