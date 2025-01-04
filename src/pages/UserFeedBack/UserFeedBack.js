import React, { useState, useEffect } from "react";
import "./UserFeedBack.css";

const UserFeedBack = () => {
  const [userfeedbacks, setUserFeedbacks] = useState([]);
  const [newUserFeedback, setNewUserFeedback] = useState("");
  const [StarRatings, setStarRatings] = useState({
    content: 0,
    reviews: 0,
    interactive: 0,
    ui: 0,
    performance: 0,
  });
  const [username, setUsername] = useState("");

  useEffect(() => {

    const temp = localStorage.getItem("currentUser");
    const user = JSON.parse(temp);
    const storedUsername = user.userName; // هيك تم الوصول لليوزر نيم في اللوكال ستورج
    setUsername(storedUsername);

    const storedFeedbacks =

      JSON.parse(localStorage.getItem(`userfeedbacks`)) || [];
    setUserFeedbacks(storedFeedbacks); // تعيين التقييمات في الحالة

  }, []);

  const saveToLocalStorage = (feedbacks) => {
    localStorage.setItem(`userfeedbacks`, JSON.stringify(feedbacks));
  };

  const calculateTotalPercentage = () => {
    const totalStars = Object.values(StarRatings).reduce((a, b) => a + b, 0);
    return Math.round((totalStars / 25) * 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUserFeedback.trim() === "") {
      alert("Please write your feedback before submitting.");
      return;
    }

    const allCategoriesRated = Object.values(StarRatings).every((rating) => rating > 0);
    if (!allCategoriesRated) {
      alert("Please provide at least one star for all categories.");
      return;
    }

    const totalPercentage = calculateTotalPercentage();
    const feedback = {
      id: Date.now(),
      text: newUserFeedback,
      StarRatings,
      totalPercentage,
      username,
    };

    const updatedFeedbacks = [feedback, ...userfeedbacks];
    setUserFeedbacks(updatedFeedbacks);
    saveToLocalStorage(updatedFeedbacks);

    setNewUserFeedback("");
    setStarRatings({
      content: 0,
      reviews: 0,
      interactive: 0,
      ui: 0,
      performance: 0,
    });

    alert("Feedback submitted successfully!");
  };

  const handleStarClick = (category, value) => {
    setStarRatings((prevRatings) => ({
      ...prevRatings,
      [category.toLowerCase()]: value,
    }));
  };

  const handleDeleteFeedback = (id) => {
    const updatedFeedbacks = userfeedbacks.filter((feedback) => feedback.id !== id);
    setUserFeedbacks(updatedFeedbacks);
    saveToLocalStorage(updatedFeedbacks);
  };

  return (
    <div className="userfeedback-body">
      <div className="userfeedback-container">
        <h2 className="ssh-Write">Feedbacks</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={newUserFeedback}
            onChange={(e) => setNewUserFeedback(e.target.value)}
            placeholder="Write your feedback here..."
            rows="5"
            cols="50"
            className="ssh-TextArea"
          />
          <br />
          <div className="ssh-CategoryRating-body">

            {["content", "reviews", "interactive", "ui", "performance"].map(
              (category) => (
                <div key={category} className="ssh-rating-category">
                  <h4>{category.replace(/([A-Z])/g, " $1")}</h4>
                  <div className="ssh-star-rating">
                    {[...Array(5)].map((_, index) => {
                      const starValue = index + 1;
                      return (
                        <label key={starValue}>
                          <input
                            type="radio"
                            name={category}
                            value={starValue}
                            checked={StarRatings[category] === starValue}
                            onChange={() => handleStarClick(category, starValue)}
                            style={{ display: "none" }}
                          />
                          <span
                            className={`ssh-star ${
                              starValue <= StarRatings[category]
                                ? "filled-star"
                                : "empty-star"
                            }`}
                            onClick={() => handleStarClick(category, starValue)}
                          >
                            &#9733;
                          </span>
                        </label>
                      );
                    })}
                  </div>
               
              </div>
            ))}
          </div>

          <button type="submit" className="ssha-submit-btn">
            Submit
          </button>
        </form>

        <h3 className="ssh-TheFeedBacks">Feedbacks list</h3>
        {userfeedbacks.length > 0 ? (
          <ul className="ssh-feedback-list">
            {userfeedbacks.map((feedback) => (
              <li key={feedback.id} className="ssh-feedback-item">
                <p className="ssh-feedback-username">
                  <strong>
                  <i className="fa-solid fa-circle-user ssha-user"></i> {username}:

                  </strong>
                </p>
                <p className="TheText-ssh">{feedback.text}</p>
                <div className="star-rating-display">
                  <strong>{feedback.totalPercentage}%</strong>
                  <div className="stars-container">
                    <div
                      className="stars-filled"
                      style={{ width: `${feedback.totalPercentage}%` }}
                    >
                      &#9733;&#9733;&#9733;&#9733;&#9733;
                    </div>
                    <div className="stars-background">
                      &#9733;&#9733;&#9733;&#9733;&#9733;
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleDeleteFeedback(feedback.id)}
                  className="ssh-delete-btn"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No feedback yet.</p>
        )}
      </div>
    </div>
  );
};

export default UserFeedBack;
