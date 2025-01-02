import React, { useState, useEffect } from "react";
import "./UserFeedBack.css";
//الحالاات states
const UserFeedBack = () => {
  const [userfeedbacks, setUserFeedbacks] = useState([]);//لتخزين التقييمات السابقة
  const [newUserFeedback, setNewUserFeedback] = useState("");//لتخزين التقيييم الحالي 
  const [StarRatings, setStarRatings] = useState({//تقييمات النجوم لكل فئة (المحتوى و التفالات والمراجعات الى اخره)
    content: 0,
    reviews: 0,
    interactive: 0,
    ui: 0,
    performance: 0,
  });
  const [username, setUsername] = useState("");//اسم المستخدم من اللوكال ستورج 

  //هون بتم عمليات التحميل من اللوكال ستورج 
  //هاي الجملة البرمجية بتتنفذ بس مرة وحدة عند تحميل المكون
  useEffect(() => {
    const storedFeedbacks = JSON.parse(localStorage.getItem("userfeedbacks")) || [];//بتقرا كل التقييمات اللي مخزنة باللوكال ستورج واذا مافي تقييمات بتضل فاضية 
    setUserFeedbacks(storedFeedbacks);//بحط القيمة اللي جابها من اللوكال ستورج 

    const storedUsername = localStorage.getItem("username") || "Suhad";//بتم تحميل اسم المستخدم من اللوكال ستورج(حاليا قيمة افتراضية اللي هي اسمي)
    setUsername(storedUsername);//بنحط الاسم اللي هو الاسم المخزن
  }, []);

 //هون بتم الحفظ للوكال ستورج
 const saveToLocalStorage = () => {
//يتم حفظ الفيدباك واليوزر نيم في اللوكال ستورج -
    localStorage.setItem("userfeedbacks", JSON.stringify(userfeedbacks));
    localStorage.setItem("username", username);
  };

  //حساب النسبة المؤوية
  const calculateTotalPercentage = () => {
    const totalStars = Object.values(StarRatings).reduce((a, b) => a + b, 0);
    return Math.round((totalStars / 25) * 100); // Total stars = (عدد النجوم الممنوحة من كل الفئات)
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();//منع الارسال قبل كتابة الفيدباك

    if (newUserFeedback.trim() === "") {
      alert("Please write your feedback before submitting.");
      return;
    }

    //وتمنع الارسال في حال لم يضع نجمة واحدة على الاقل
    const allCategoriesRated = Object.values(StarRatings).every(
      (rating) => rating > 0 //اذا كان النجوم اكبر من صفر
    );
    if (!allCategoriesRated) {//غير هيك ممنوع
      alert("Please provide at least one star for all categories.");
      return;
    }

    const totalPercentage = calculateTotalPercentage();//حساب التوتال بيرسنتج

 //تنشئ كائن جديد ليحمل الفيدباك والتقييم بالنجوم والتوتال بيرسنت واسم المستخدم
    const feedback = {
      id: Date.now(),
      text: newUserFeedback,
      StarRatings,
      totalPercentage,
      username,
    };

    const updatedFeedbacks = [feedback, ...userfeedbacks]; // هاي الجملة بتخليه يشتغل زي الستاك اخر كومنت بنحط اول كومنت بطلع فوق
    setUserFeedbacks(updatedFeedbacks);

    // Save feedbacks and username to localStorage
    saveToLocalStorage();

    setNewUserFeedback(""); // Clear input
    setStarRatings({
      content: 0,
      reviews: 0,
      interactive: 0,
      ui: 0,
      performance: 0,
    }); // Reset StarRatings
    alert("Feedback submitted successfully!");
  };

  // Handle star click for each category
  const handleStarClick = (category, value) => {
    setStarRatings((prevRatings) => ({
      ...prevRatings,
      [category]: value,
    }));
  };

  return (
    <div className="userfeedback-container">
      <h2>Write Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={newUserFeedback}
          onChange={(e) => setNewUserFeedback(e.target.value)}
          placeholder="Write your feedback here..."
          rows="5"
          cols="50"
        />
        <br />

        {["content", "reviews", "interactive", "ui", "performance"].map(
          (category) => (
            <div key={category} className="rating-category">
              <h4>{category.replace(/([A-Z])/g, " $1")}</h4>
              <div className="star-rating">
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
                        style={{ display: "none" }} // Hide radio input
                      />
                      <span
                        className={`star ${
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
          )
        )}

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      <h3>Previous Feedback:</h3>
      {userfeedbacks.length > 0 ? (
        <ul className="feedback-list">
          {userfeedbacks.map((feedback) => (
            <li key={feedback.id} className="feedback-item">
              <p className="feedback-username">
                <strong>
                  <i className="fa-solid fa-user"></i> {feedback.username}:
                </strong>
              </p>
              <p>{feedback.text}</p>

              {/* Display total percentage with stars */}
              <div className="star-rating-display">
                <strong>{feedback.totalPercentage}%</strong>
                <div className="stars-container">
                  <div
                    className="stars-filled"
                    style={{
                      width: `${feedback.totalPercentage}%`,
                    }}
                  >
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </div>
                  <div className="stars-background">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No feedback yet.</p>
      )}
    </div>
  );
};

export default UserFeedBack;
