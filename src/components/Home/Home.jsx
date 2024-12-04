import React from 'react'
import TopBanner from './TopBanner'
import ShopByDept from './ShopByDept'
import Trending from './Trending'

const Home = () => {
  return (
    <div>
      <TopBanner/>
      <ShopByDept/>
      <Trending/>
    </div>
  )
}

export default Home