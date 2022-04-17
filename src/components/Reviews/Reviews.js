import React from "react";

//image 
import orangebottle from "../../Images/orangebottle.jpg";
//css
import "./Reviews.css";
function Reviews() {

  function ReviewCard(){
    return(
      <div className="review_card">
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" className="review_card_img"/>
        </div>
        <div>
          <h5>Name</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua.</p>
        </div>
      </div>
    )
  }
  const arr  = [1,2,3,4,5,6];
  return (
    <div className="landing_section">
      <div className="reviews">Reviews</div>
      <div className="reviews_card_section">
        {arr.map((item)=>{
          return(
            <ReviewCard />
          )
        })}
      </div>
    </div>
  );
}

export default Reviews;
