import React from 'react'
import LandingWidget from './LandingWidget'
import MainContent from './MainContent'
import Videos from './Videos'

function LandingPage() {
  return (
    <div className='text-white'>
      <LandingWidget/>
      <MainContent/>
      <Videos/>
    </div>
  )
}

export default LandingPage
