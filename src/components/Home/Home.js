import React, { useEffect, useRef } from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'

//css
import "./Home.css";

//image
import landing from "../../Images/landing.svg"
import drinks from "../../Images/drinks.svg"
import Products from '../Products/Products';

function Home() {


  return (
    <div className='home_main' >
      <NavigationBar />
      <div className='home_landing'>
      <div className='title'>
      The Drink of Odisha
      </div>
          <img src={landing} className='home_landing_img'/>
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
    </div>
  )
}

export default Home