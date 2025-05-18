import React from 'react'
import Section1 from '../../components/section/Section1'
import Sec2 from '../../components/section2/Sec2'
import Sec3 from '../../components/sec3/Sec3'
import Sec4 from '../../components/sec4/Sec4'
import Gallery from '../../components/galery/Galery'
import News from '../../components/news/News'

const Home = () => {
  return (
    <div>
      <Section1/>
      <Sec2/>
      <Sec3/>
      {/* <Sec4/> */}
      <Gallery/>
      <News/>
     
    </div>
  )
}

export default Home
