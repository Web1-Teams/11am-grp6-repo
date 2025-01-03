import React, { useState, useEffect } from "react";
import "./UserFeedBack.css";

// مكون رئيسي UserFeedBack
const UserFeedBack = () => {
  // تعريف حالات التطبيق (States)
  const [userfeedbacks, setUserFeedbacks] = useState([]); // قائمة التقييمات
  const [newUserFeedback, setNewUserFeedback] = useState(""); // ملاحظات جديدة
  const [StarRatings, setStarRatings] = useState({
    content: 0,
    reviews: 0,
    interactive: 0,
    ui: 0,
    performance: 0,
  }); // تقييم النجوم لكل فئة
  const [username, setUsername] = useState(""); // اسم المستخدم

  // عند تحميل الصفحة: تحميل التقييمات المحفوظة في localStorage
  useEffect(() => {
    const storedUsername = localStorage.getItem("userName") || "Guest"; // استرجاع اسم المستخدم
    setUsername(storedUsername);
    
    const storedFeedbacks =
      JSON.parse(localStorage.getItem(`userfeedbacks-${storedUsername}`)) || [];
    setUserFeedbacks(storedFeedbacks); // تعيين التقييمات في الحالة
  }, []);

  // حفظ التقييمات في اللوكال ستورج 
  const saveToLocalStorage = (feedbacks) => {
    localStorage.setItem(`userfeedbacks-${username}`, JSON.stringify(feedbacks));
    localStorage.setItem("username", username); // حفظ اسم المستخدم
  };

  // حساب النسبة المئوية الإجمالية لكل التقييمات
  const calculateTotalPercentage = () => {
    const totalStars = Object.values(StarRatings).reduce((a, b) => a + b, 0);
    return Math.round((totalStars / 25) * 100); // 25 = 5 فئات * 5 نجوم كحد أقصى
  };

  // إرسال التقييم الجديد
  const handleSubmit = (e) => {
    e.preventDefault(); // منع التحديث الافتراضي للصفحة

    // التحقق من أن المستخدم كتب ملاحظاته
    if (newUserFeedback.trim() === "") {
      alert("Please write your feedback before submitting."); // رسالة تحذير
      return;
    }

    // التحقق من أن جميع الفئات تم تقييمها
    const allCategoriesRated = Object.keys(StarRatings).every(
      (category) => StarRatings[category] > 0
    );
    if (!allCategoriesRated) {
      alert("Please provide at least one star for all categories."); // رسالة تحذير
      return;
    }

    // حساب النسبة المئوية الإجمالية
    const totalPercentage = calculateTotalPercentage();

    // تكوين التقييم الجديد
    const feedback = {
      id: Date.now(), // توليد معرّف فريد
      text: newUserFeedback, // النص المكتوب
      StarRatings, // تقييم النجوم
      totalPercentage, // النسبة المئوية الإجمالية
      username, // اسم المستخدم
    };

    // تحديث قائمة التقييمات وإضافة التقييم الجديد 
    const updatedFeedbacks = [feedback, ...userfeedbacks];
    setUserFeedbacks(updatedFeedbacks); // تحديث الحالة
    saveToLocalStorage(updatedFeedbacks); // حفظ القائمة الجديدة في اللوكال ستورج

    // إعادة تعيين الحقول إلى القيم الافتراضية
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

  // تحديث تقييم النجوم لكل فئة
  const handleStarClick = (category, value) => {
    setStarRatings((prevRatings) => ({
      ...prevRatings,
      [category]: value,
    }));
  };

  // حذف التقييم اذا بده اليوزر
  const handleDeleteFeedback = (id) => {
    const updatedFeedbacks = userfeedbacks.filter(
      (feedback) => feedback.id !== id
    );
    setUserFeedbacks(updatedFeedbacks); // تحديث الحالة
    saveToLocalStorage(updatedFeedbacks); // تحديث localStorage بعد الحذف
  };

  // من هون بتبلش واجهة المستخدم اللي بتحتوي على مكان ادخال الفيدباك والتقييم ووووو
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
              )
            )}
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
                    <i className="fa-solid fa-user"></i> {feedback.username}:
                  </strong>
                </p>
                <p>{feedback.text}</p>
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
                {/* زر الحذف */}
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