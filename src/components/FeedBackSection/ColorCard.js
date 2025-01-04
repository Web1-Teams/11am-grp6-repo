import React from "react";

const ColorCard = ({ feedback }) => {
  // Default design properties for the card
  const cardDesign = {
    background: "#800020",
    borderRadius: "45px 0px 60px 0",
    boxShadow: "0 6px 8px rgba(0, 0, 0, 0.58)",
  };

  return (
    <div
      style={{
        width: "95%", // Make it full width for small screens
        maxWidth: "310px", // Cap the width to maintain design consistency
        height: "170px",
        margin: "10px", // Adds spacing for all screen sizes
        borderRadius: cardDesign.borderRadius,
        backgroundColor: cardDesign.background,
        boxShadow: cardDesign.boxShadow,
        position: "relative",
        padding: "15px",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box", // Ensures padding doesn't exceed dimensions
      }}
    >
      {feedback ? (
        <div>
          <div
            style={{
              position: "absolute",
              top: "5px",
              left: "10px",
              backgroundImage: "url('/path/to/user-image.jpg')", 
              backgroundPosition: "center",
              borderRadius: "50%",
            }}
          ></div>
          <p
            style={{ fontWeight: "700", fontSize: "18px", marginLeft: "65px" , marginTop:"3px" }}
          >
            
            {feedback.username}
          </p>
          <p
            style={{ fontSize: "16px", marginLeft: "12px", textAlign: "left" }}
          ><span><hr className="custom-hr"
          style={{
            marginTop: "-7px",
            marginBottom: "14px", 
            width: "70%", 
            height: "2px", 
            margin: "0", 
            border: "none", 
            background: "#fff", 
          }}
        /></span>
            {feedback.text}
          </p>
          <p
            style={{ fontSize: "14px", textAlign: "left", marginTop: "40px" , marginLeft: "6px" }}
          >
            <strong>Total Rating: {feedback.totalPercentage}%</strong>
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
