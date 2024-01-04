import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Destination from '../components/Destination'
import Review from '../components/Review'

const Home = () => {
  const [slidesPerView, setSlidesPerView] = useState(window.innerWidth < 768 ? 1 : 3);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize()
  },[])
  console.log(slidesPerView)
  return (
    <div className='sm:mt-2 md:pt-6'>
        <Hero />
        <Destination />
        <Review />
        <section id="about">
          <About />
        </section>
    </div>
  )
}

export default Home
