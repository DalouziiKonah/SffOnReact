import './App.css'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Carousel from './components/Carousel.jsx';
import Marquee from './components/Marquee.jsx';
import WelcomeConfig from './components/config/WelcomeConfig.js';
import WelcomeMsg from './components/WelcomeMsg';
import Gallery from './components/Gallery.jsx';
import GalleryConfig from './components/config/GalleryConfig.js';
import { AboutUsConfig } from './components/config/AboutUsConfig.js';
import AboutUs from './components/AboutUs.jsx';
import Curriculum from './components/Curriculum.jsx';




  function App(){
    return (
      <div>
       <Header /> 
       <Marquee />
        <Carousel />
        <WelcomeMsg messages={WelcomeConfig}/>
        <AboutUs config={AboutUsConfig} />
        <Curriculum />
        <Gallery GalleryConfig={GalleryConfig} />
       <Footer />
      </div>
   
  )
}



export default App
