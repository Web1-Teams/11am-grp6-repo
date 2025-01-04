import React, { useState } from "react";

const ColorCard = ({ userfeedbacks }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const toggleHeart = () => {
    const newLikeStatus = !isLiked;
    setIsLiked(newLikeStatus);
    const newLikesCount = newLikeStatus ? likesCount + 1 : likesCount - 1;
    setLikesCount(newLikesCount);
  };

  const cardDesign = {
    background: "linear-gradient(to bottom right, #800020, #ff6347)",
    borderRadius: "45px 0px 60px 0",
    boxShadow: "0 6px 8px rgba(0, 0, 0, 0.58)",
  };

  const defaultProfilePic = "/img/profile-pic.png";

  return (
    <div
      style={{
        width: "95%",
        maxWidth: "310px",
        height: "170px",
        margin: "10px",
        borderRadius: cardDesign.borderRadius,
        background: cardDesign.background,
        boxShadow: cardDesign.boxShadow,
        position: "relative",
        padding: "15px",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* زر القلب */}
      <div
        onClick={toggleHeart}
        style={{
          position: "absolute",
          top: "0px",
          right: "14px",
          fontSize: "27px",
          cursor: "pointer",
          color: isLiked ? "#fff" : "#ccc",
          transition:
            "color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.1)";
          e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.0)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "none";
        }}
        onFocus={(e) => {
          e.target.style.transform = "scale(1.1)";
          e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.0)";
        }}
        onBlur={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "none";
        }}
      >
        <i className="fa-solid fa-heart"></i>
      </div>

      {/* عداد الإعجابات */}
      <div
        style={{
          position: "absolute",
          top: "34px",
          right: "10px",
          fontSize: "12px",
          color: "#fff",
          fontWeight: "600",
        }}
      >
        {likesCount} Likes
      </div>

      {userfeedbacks ? (
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          {/* العنوان والصورة */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <img
              src={userfeedbacks.profilePic || defaultProfilePic}
              alt="Profile"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                marginRight: "8px",
                objectFit: "cover",
              }}
            />
            <p
              style={{
                fontWeight: "700",
                fontSize: "18px",
                margin: "0",
                flexShrink: 0,
              }}
            >
              {userfeedbacks.username} :
            </p>
          </div>

          {/* النص */}
          <p
            style={{
              fontSize: "16px",
              flex: "1",
              margin: "0 0 10px",
              textAlign: "left",
              wordWrap: "break-word",
              overflowWrap: "break-word",
              overflow: "hidden",
            }}
          >
            <hr
              className="custom-hr"
              style={{
                marginTop: "-8px",
                marginBottom: "13px",
                width: "70%",
                height: "2px",
                margin: "0",
                border: "none",
                background: "#fff",
              }}
            />
            {userfeedbacks.text}
          </p>

          {/* التقييم */}
          <p
            style={{
              fontSize: "14px",
              textAlign: "left",
              margin: "0",
              flexShrink: 0,
            }}
          >
            <strong>Total Rating: {userfeedbacks.totalPercentage}%</strong>
          </p>
        </div>
      ) : (
        <p style={{ fontSize: "16px", textAlign: "center", padding: "20px" }}>
          No Feedback
        </p>
      )}
    </div>
  );
};

export default ColorCard;
