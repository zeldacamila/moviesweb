import React from 'react'
import PrincipalBanner from '../../components/PrincipalBanner/PrincipalBanner'
import ThirdBanner from '../../components/ThirdBanner/ThirdBanner'
import SecondBanner from '../../components/SecondBanner/SecondBanner'

const Home = () => {
  return (
    <>
      <PrincipalBanner
        PBTitle='Big Comeback'
        PBContent='Nullam porta, eros id aliquam pulvinar, urna ex mattis eros, quis vestibulum urna turpis et risus. Mauris porttitor risus faucibus, auctor arcu a, tincidunt nibh...'
        />
      <SecondBanner />
      <ThirdBanner />
    </>
  )
}

export default Home