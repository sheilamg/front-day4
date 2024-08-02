import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./userCreateReview.css";
import StarRating from "../StarRating/StarRating";

const UserCreateReview = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('AuthToken')))  
  const userCaptured = items.user.id  

  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [valuetitle, setTitle] = useState("")

  //id de la movie
  const { id } = useParams();
  const parceId = parseInt(id)
   

  const handleRatingChange = (newRating) => {
    setRating(newRating)
  }  
    

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reviewData = {
      title: valuetitle,
      description: reviewText,
      rate: rating,
      user: userCaptured,
      movie: parceId
    };

    try {
      const response = await fetch("http://localhost:3002/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Review submitted successfully:", result);


    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <>
      <label className="label-review">Make your review</label>
      
      <StarRating totalStars={5} onRatingChange={handleRatingChange}/>
      {console.log(rating)}
       
      
      <form className="textarea-div" onSubmit={handleSubmit}>
        <label htmlFor="text">Title</label>
        <input type="text" value={valuetitle} onChange={(event) => setTitle(event.target.value)} placeholder="introduce your review.." required />
        <textarea
          cols={50}
          rows={10}
          minLength={200}
          maxLength={600}
          required
          value={reviewText}
          onChange={(event) => setReviewText(event.target.value)}
        ></textarea>

        <input type="submit" className="review-button" value="Submit Review" />
      </form>
    </>
  );
};

export default UserCreateReview;

///minLength 200 - maxLength 600