import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedebackStats() {
  const { feedback } = useContext(FeedbackContext);

  const average = Math.round(
    feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length
  );

  // let average =
  //   feedback.reduce((acc, cur) => {
  //     return acc + cur.rating;
  //   }, 0) / feedback.length; 


  // average = average.toFixed(10).replace(/[.,]0$/, "");

  // average = Math.round(average);
 

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Ratings : {isNaN(average) ? 0 : average}</h4>
   
    </div>
  );
}

export default FeedebackStats;
