import React from "react";

const ColorCard = ({ userfeedbacks }) => {
  const cardDesign = {
    background:
      "linear-gradient(to bottom right, #800020, #ff6347), url('/path/to/user-image.jpg')",
    borderRadius: "45px 0px 60px 0",
    boxShadow: "0 6px 8px rgba(0, 0, 0, 0.58)",
  };

  return (
    <div
      style={{
        width: "95%",
        maxWidth: "310px",
        height: "170px",
        margin: "10px",
        borderRadius: cardDesign.borderRadius,
        background: cardDesign.background, // استخدام background بدلاً من backgroundColor
        boxShadow: cardDesign.boxShadow,
        position: "relative",
        padding: "15px",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box",
      }}
    >
      {userfeedbacks ? (
        <div>
          <div
            style={{
              position: "absolute",
              top: "5px",
              left: "10px",
              backgroundImage: "url('/path/to/user-image.jpg')", // يمكن تعديل الصورة هنا
              backgroundPosition: "center",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
            }}
          ></div>
          <p
            style={{
              fontWeight: "700",
              fontSize: "18px",
              marginLeft: "70px",
              marginTop: "3px",
            }}
          >
            {userfeedbacks.username}
          </p>
          <p
            style={{
              fontSize: "16px",
              marginLeft: "12px",
              textAlign: "left",
            }}
          >
            <hr
              className="custom-hr"
              style={{
                marginTop: "-8px",
                marginBottom: "10px",
                width: "70%",
                height: "2px",
                margin: "0",
                border: "none",
                background: "#fff",
              }}
            />
            {userfeedbacks.text}
          </p>
          <p
            style={{
              fontSize: "14px",
              textAlign: "left",
              marginTop: "47px",
              marginLeft: "6px",
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
