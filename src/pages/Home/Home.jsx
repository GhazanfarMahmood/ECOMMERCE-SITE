import React from 'react'

//Components of Home page
import PopularProducts from '../../components/Home/PopularProducts/PopularProducts'
import NewlyArrival from '../../components/Home/NewlyArrival/NewlyArrival'

const Home = () => {
  return (
    <>
    <PopularProducts />
    <NewlyArrival />
    </>
  )
}

export default Home