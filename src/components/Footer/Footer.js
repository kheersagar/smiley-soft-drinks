import React from "react";

import "./Footer.css";

import insta from "../../Images/insta.png"
import meta from "../../Images/meta.png"
import whatsapp from "../../Images/Whatsapp.png"
import twitter from "../../Images/Twitter.png"
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <>
    <div className="footer_main landing_section">
      <div>
        <h1>Our Address</h1>
        <h3>Smiley Soda/Soft Drinks PVT.LTD</h3>
        <div className="d-flex footer-font">
          <div style={{flex:1}}>Call us :</div>
          <div style={{flex:2}}>+91 77352-39522</div>
        </div>
        <div className="d-flex footer-font">
          <div style={{flex:1}}>At/Po   :</div>
          <div style={{flex:2}}>Dhankauda, Sambalpur, Odisha </div>
        </div>
        <div className="d-flex footer-font">
          <div style={{flex:1}}>Pin Code :</div>
          <div style={{flex:2}}>768006</div>
        </div>
      </div>
      <div>
        <h1 ><NavLink to="/about-us" className="nav_item footer-link">
        About us
        </NavLink></h1>
        <h3><NavLink to="/about-us" className="nav_item footer-link">
        Contact us
        </NavLink></h3>
        <h3><NavLink to="/about-us" className="nav_item footer-link">
        Folow us
        </NavLink></h3>
        <div className="social pointer">
          <a href="https://www.instagram.com/smileydrinks_/" target="_blank">
            <img src={insta} alt="img"/>
          </a> 
          <a href="https://www.facebook.com/profile.php?id=100074172035141" target="_blank">
            <img src={meta} alt="img"/>
          </a> 
          <a href="https://twitter.com/SmileyDrinks" target="_blank">
            <img src={twitter} alt="img"/>
          </a> 
          <a href="https://wa.me/message/JWQPULJBW6GUJ1" target="_blank">
            <img src={whatsapp} alt="img"/>
          </a> 
        </div>
      </div>
      <div>
        <h1>Our Products</h1>
        <h6 className="footer-font">Orange</h6>
        <h6 className="footer-font">Lemon</h6>
        <h6 className="footer-font">Mango</h6>
        <h6 className="footer-font">Jeera</h6>
        <h6 className="footer-font">Lichi</h6>
      </div>
    </div>
      <div className="copyright landing_section">
        <div>
        ©Copyright 2021. All Rights Reserved.
        </div>
        <div className="d-flex c-content_main">
        <div className="c-content">Privacy Policy </div>
        <div className="c-content">Terms</div>
        <div className="c-content">Disclaimer</div>

        </div>
      </div>
    </>
  );
}

export default Footer;
