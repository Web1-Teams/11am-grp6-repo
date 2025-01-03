import React, { useState } from "react";

const CopyLink = ({ link }) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 800);
      })
      .catch((error) => {
        console.error("Didn't copy", error);
      });
  };

  return (
    <div style={{ position: "relative" }}>
      <h5 style={{ fontWeight: "600" }}>Or copy link</h5>
      <input
        type="text"
        value={link}
        readOnly
        style={{
          width: "70%",
          padding: "10px",
          marginRight: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <button
        onClick={handleCopy}
        style={{
          fontWeight: "500",
          height: "45px",
          padding: "5px 10px",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: "#800020",
          fontSize: "18px",
        }}
      >
        Copy
      </button>

      {/* Pop-up message */}
      {showMessage && (
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "50%",
            transform: "translateX(-70%)",
            padding: "10px",
            backgroundColor: "#800020",
            color: "white",
            borderRadius: "4px",
            animation: "slideIn 0.5s ease-out, fadeOut 0.5s 2.5s forwards",
          }}
        >
          Link copied successfully!
        </div>
      )}
    </div>
  );
};

export default CopyLink;
