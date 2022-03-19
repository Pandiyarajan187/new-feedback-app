import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isloading, setIsloading] = useState(true);

  const [feedbackEdit, SetFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);
  //Fetch Feedback
  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`);
    const data = await response.json();
    setFeedback(data);

    setIsloading(false);
  };

  //Add Feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback([data, ...feedback]);
  };
  //delete Feedback
  const deleteFeedback = async (id) => {
    if (window.confirm("Are you Sure ypu want to delete")) {
      await fetch(`/feedback/${id}`, { method: "DELETE" });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //update Feedback
  const updateFeedback = async (id, updItem) => {
       const response = await fetch(`/feedback/${id}`,{
         method:'PUT',
         headers:{
           'Content-type': "application/json"
         },
         body: JSON.stringify(updItem),
       })
       const data = await response.json()
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };
  
  // Edit Feedback
  const editFeedback = (item) => {
    SetFeedbackEdit({
      item,
      edit: true,
    });
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isloading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
