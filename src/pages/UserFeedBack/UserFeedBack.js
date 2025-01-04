import React, { useState, useEffect } from "react";
import "./UserFeedBack.css";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const UserFeedBack = () => {
  const [userfeedbacks, setUserFeedbacks] = useState([]);
  const [newUserFeedback, setNewUserFeedback] = useState("");
  const [StarRatings, setStarRatings] = useState({
    content: 0,
    reviews: 0,
    interactive: 0,
    design: 0,
    performance: 0,
  });
  const [username, setUsername] = useState("");
  const [CUser, setCUser] = useState(null); // المستخدم الحالي بنحط هون

  // const [profilePic, setProfilePic] = useState("");


   useEffect(() => {
    // استرجاع المستخدم من localStorage عند تحميل الصفحة
    const temp = localStorage.getItem("currentUser");

    const user = JSON.parse(temp);
    if (user) {
      setCUser(user); // تعيين المستخدم الحالي
      setUsername(user.userName || "Guest"); // تعيين اسم المستخدم
      // setProfilePic(user.profilePic || ""); // استرجاع صورة البروفايل
    } else {
      setUsername("Guest"); // إذا لم يكن هناك مستخدم سابق، نعرض اسم "Guest"
    }

    // استرجاع الفيدباك من localStorage
    const storedFeedbacks =
      JSON.parse(localStorage.getItem("userfeedbacks")) || [];
    setUserFeedbacks(storedFeedbacks); // تعيين الفيدباك في الحالة

  }, []);

  // دالة لتحديث بيانات المستخدم في localStorage
  const saveUserData = (user) => {
    const userForms = localStorage.getItem("userForms"); // الحصول على بيانات المستخدمين المخزنة
    let userFormsArray = userForms ? JSON.parse(userForms) : [];

    // التحقق إذا كان المستخدم موجود من قبل
    const userIndex = userFormsArray.findIndex((u) => u.id === user.id);

    if (userIndex === -1) {
      // إذا مكنش موجود يضيفه للاري تبعتنا
      userFormsArray.push(user);
    } else {
      // إذا كان موجود تحديث البيانات تبعونه
      userFormsArray[userIndex] = user;
    }

    // حفظ الاري في الوكال ستورج
    localStorage.setItem("userForms", JSON.stringify(userFormsArray));

    // حفظ المستخدم الحالي
    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  const saveToLocalStorage = (feedbacks) => {
    localStorage.setItem("userfeedbacks", JSON.stringify(feedbacks));
  };

  const calculateTotalPercentage = () => {
    const totalStars = Object.values(StarRatings).reduce((a, b) => a + b, 0);
    return Math.round((totalStars / 25) * 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUserFeedback.trim() === "") {

      toast.error("Please write your feedback before submitting.");

      return;
    }

    const allCategoriesRated = Object.values(StarRatings).every(
      (rating) => rating > 0
    );
    if (!allCategoriesRated) {

      toast.error("Please provide at least one star for all categories.");

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
    setUserFeedbacks(updatedFeedbacks); // تحديث الحالة مباشرة
    saveToLocalStorage(updatedFeedbacks); // حفظ البيانات في localStorage

    setNewUserFeedback("");
    setStarRatings({
      content: 0,
      reviews: 0,
      interactive: 0,
      design: 0,
      performance: 0,
    });
    toast.success("Feedback submitted successfully!");
  };

  const handleStarClick = (category, value) => {
    setStarRatings((prevRatings) => ({
      ...prevRatings,
      [category.toLowerCase()]: value,
    }));
  };

  const handleDeleteFeedback = (id) => {
    //فنكشن حذف الفيدباك
    const updatedFeedbacks = userfeedbacks.filter(
      (feedback) => feedback.id !== id
    ); // بدور على id الفيدباك اللي بدي احذفه وبحذف كل معلوماته

    setUserFeedbacks(updatedFeedbacks); // تحديث الستاتس
    saveToLocalStorage(updatedFeedbacks); // حفظ التغييرات في localStorage
  };

   const handleSignUp = (newUserName) => {
     const newUser = {
      id: Date.now(), // يمكن استخدام قيمة الوقت كمعرف للمستخدم
      userName: newUserName,
    };
    setUsername(newUserName); // تعيين اسم المستخدم الجديد
    saveUserData(newUser); // حفظ بيانات المستخدم في localStorage
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
            {["Content", "Reviews", "Interactive", "Design", "Performance"].map(
              (category) => (
                <div key={category} className="ssh-rating-category">
                  <h4>{category}</h4>
                  <div className="ssh-star-rating">
                    {[...Array(5)].map((_, index) => {
                      const starValue = index + 1;
                      return (
                        <label key={starValue}>
                          <input
                            type="radio"
                            name={category}
                            value={starValue}
                            checked={
                              StarRatings[category.toLowerCase()] === starValue
                            }
                            onChange={() =>
                              handleStarClick(category, starValue)
                            }
                            style={{ display: "none" }}
                          />
                          <span
                            className={`ssh-star ${
                              starValue <= StarRatings[category.toLowerCase()]
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

                    <i className="fa-solid fa-circle-user ssha-user"> </i> {feedback.username}:

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
                  onClick={() => handleDeleteFeedback(feedback.id)} //نستدعي ال on click لما يكبس المستخدم على زر الحذف وبنفذ الفنكشن تبع الحذف

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
      <Toaster position="top-center" />
    </div>
  );
};

export default UserFeedBack;
