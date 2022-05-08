import React from "react";
import "./About.css";

import about_cmp_1 from "../../Images/about_cmp_1.svg";
import NavigationBar from "../NavigationBar/NavigationBar";
function About() {
  function Card({id,animation}) {
    return (
      <div data-aos={animation} className="card_main" style={{flexDirection : Number(id)%2 === 0 ? 'row-reverse' : null}}>
        <div>
          <img src={about_cmp_1} className="card_img" data-aos="fade-up" data-aos-delay={50} />
        </div>
        <div className="card_description">
          <div className="name">Founder Name</div>
          <div className="role">Our Founder</div>
          <div className="about_role">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna
            aliqua. dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum."
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <NavigationBar />
      <div className="about_main">
        <div className="about_landing_section">
          <div className="welcome">Smiley soda / soft drink manufacturer</div>
        </div>
        <div className="about_cmp">
          <div className="about_cmp_title">About Company</div>
          <div className="about_cmp_card">
            <div>
              <img src={about_cmp_1} className="about_cmp_card_img" />
            </div>
            <div className="about_desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderitulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum."
            </div>
          </div>
        </div>
        <div>
          <Card id="1" animation="fade-left"/>
          <Card  id="2" animation="fade-right"/>
          <Card  id="3" animation="fade-left"/>
        </div>
      </div>
    </>
  );
}

export default About;
