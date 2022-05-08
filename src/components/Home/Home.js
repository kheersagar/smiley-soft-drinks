import React, { useEffect, useRef } from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'

//css
import "./Home.css";

//image
import landing from "../../Images/landing.svg"
import tab1 from "../../Images/tab1.png"
import waterwave from "../../Images/waterwave.png"
import trees from "../../Images/trees.png"
import sky from "../../Images/sky.png"
import drinks from "../../Images/drinks.svg"
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

function Home() {


  return (
    <div className='home_main' >
      <NavigationBar />
    <div className='wrapper'>
    <div className='home_landing'>
      <div className='title'>
      The <span style={{color:'#5100FD'}}>Drink</span> of Odisha
      </div>
          {/* <img src={landing} className='home_landing_img'/> */}
          <img src={landing} className='home_landing_img landing'/>
          <img src={sky} className='home_landing_img sky'/>
          <img src={tab1} className='home_landing_img tab1'/>
          <img src={waterwave} className='home_landing_img waterwave'/>
          <img src={trees} className='home_landing_img trees'/>
      </div> 
       {/*  */}
       <div className='landing_section'> 
              <div className='welcome'>Welcome to the drink of Odisha</div>
              <div className='manu'>Smiley soda / soft drink manufacturer</div>
          <div className='section_card'>
            <div>
              <img src={drinks} alt="drinks" className='drinks'/>
            </div>
            <div>
              <h1>About your soft drinks</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur quis enim. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.</p>
              <div> more</div>
            </div>

          </div>
       </div>
       {/*  */}
       <Products />
       <Reviews />
    </div>
    </div>
  )
}

export default Home