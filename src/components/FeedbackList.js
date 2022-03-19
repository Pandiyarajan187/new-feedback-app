import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackContext from "../context/FeedbackContext";
import FeedbackItem from "../components/FeedbackItem"
import Spinner from "./shared/Spinner"

function FeedbackList() {
  const { feedback , isloading} = useContext(FeedbackContext);
  if (!isloading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback</p>;
  }

  return isloading ? (
  
  < Spinner />) : ( <div className="feedback-list">
  <AnimatePresence>
    {feedback.map((item) => (
      <motion.div
        key={item.id}
        initaial={{ opacity: 0 }}
        Animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <FeedbackItem
          key={item.id}
          item={item}
        
        />
      </motion.div>
    ))}
  </AnimatePresence>
</div>

  )
}

export default FeedbackList;
