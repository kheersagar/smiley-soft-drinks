import React from "react";

//css
import "./Products.css";

//
import veg from "../../Images/veg.svg";
import lemonbottle from "../../Images/lemonbottle.svg";
import jeerabottle from "../../Images/jeerabottle.svg";
import orangebottle from "../../Images/orangebottle.svg";
import lichibottle from "../../Images/lichibottle.svg";
import mangobottle from "../../Images/mangobottle.svg";
import { Card } from "react-bootstrap";

function Products() {
  function Cards(props) {
    return (
      <Card  className="products_card" >
        <Card.Img variant="top" src={props.img}  className="products_card_img"/>
        <Card.Body className="products_card_body">
          <Card.Title>{props.lable}</Card.Title>
          <Card.Text>Some quick example the card's content.</Card.Text>
        </Card.Body>
      </Card>
    );
  }

  const arr = [
    {
      lable:'Lemon',
      Image: lemonbottle,
    },
    {
      lable:'Jeera',
      Image: jeerabottle,
    },
    {
      lable:'Orange',
      Image: orangebottle,
    },
    {
      lable:'Lichi',
      Image: lichibottle,
    },
    {
      lable:'Mongo',
      Image: mangobottle,
    },
  ];

  return (
    <div className="landing_section">
      <div className="products">
        Our Products <img src={veg} />
      </div>
      <div className="card_section" >
        {arr.map((item,index) => {
          return <Cards img={item.Image} lable={item.lable} key={index}/>;
        })}
      </div>
    </div>
  );
}

export default Products;
