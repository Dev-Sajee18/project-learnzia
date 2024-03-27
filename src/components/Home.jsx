import React from 'react';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Tutor from './Tutor';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';



const Home = () => {

    return (
      <div>
        <section class="hero-section">
        <div class="hero" style={{marginBottom:"100px"}}>
          <h2 style={{fontSize:"50px"}}> <span style={{color:"orange"}}>IELTS</span> WILL EASY WITH US </h2>
          <p style={{fontSize:"25px"}}>
          Join with our cutting-edge IELTS web app, offering comprehensive test preparation, real-time feedbacks, and personalized study plans for users worldwide.



          </p>
          <div class="vat">
          {/* <button> <NavLink to="/explore"> Explore</NavLink></button> */}
          <button class="uiverse">
    <div class="wrapper">
        <span ><NavLink to="/explore" style={{color:"white",textDecoration:"none"}}> Explore</NavLink></span>
        <div class="circle circle-12"></div>
        <div class="circle circle-11"></div>
        <div class="circle circle-10"></div>
        <div class="circle circle-9"></div>
        <div class="circle circle-8"></div>
        <div class="circle circle-7"></div>
        <div class="circle circle-6"></div>
        <div class="circle circle-5"></div>
        <div class="circle circle-4"></div>
        <div class="circle circle-3"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-1"></div>
    </div>
</button>


          </div>
        </div>
        <div class="img">
          <img src="../assets/home1.png" alt="hero img" style={{width:"750px",height:"700px"}}/>
        </div>
  
      </section>
 
      <About/>
         <Services/>
         <Tutor/>
          <Contact/>
          <Footer/>
            
      </div>
    )
  }
  
  export default Home;
