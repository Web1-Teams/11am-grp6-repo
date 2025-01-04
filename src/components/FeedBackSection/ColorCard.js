import React from "react";

const ColorCard = ({ feedback }) => {
  // Default design properties for the card
  const cardDesign = {
    background: "#800020",
    borderRadius: "50px 0px 80px 0",
    boxShadow: "0 6px 8px rgba(0, 0, 0, 0.58)",
  };

  return (
    <div
      style={{
        width: "95%", // Make it full width for small screens
        maxWidth: "480px", // Cap the width to maintain design consistency
        height: "230px",
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
        <>
          <p style={{ fontWeight: "bold", fontSize: "18px" }}>
            {feedback.username}
          </p>
          <p style={{ fontSize: "16px" }}>{feedback.text}</p>
          <p style={{ fontSize: "14px", textAlign: "right" }}>
            <strong>Total Rating: {feedback.totalPercentage}%</strong>
          </p>
        </>
      ) : (
        <p style={{ fontSize: "16px", textAlign: "center" }}>No Feedback</p>
      )}
    </div>
  );
};

export default ColorCard;
