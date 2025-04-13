import { useState } from 'react'

import './App.css'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Carousel from './components/Carousel.jsx';
import Marquee from './components/Marquee.jsx';
import WelcomeConfig from './components/config/WelcomeConfig.js';
import WelcomeMsg from './components/WelcomeMsg';
import Gallery from './components/Gallery.jsx';
import GalleryConfig from './components/config/GalleryConfig.js';

  function App(){
    return (
      <div>
       <Header /> 
       <Marquee />
        <Carousel />
        <WelcomeMsg messages={WelcomeConfig}/>
        <Gallery GalleryConfig={GalleryConfig} />
       <Footer />
      </div>
   
  )
}



export default App
