const cards = [
  {
    background: "#800020",
    borderRadius: "50px 0px 80px 0",
    boxShadow: "0 6px 8px rgba(0, 0, 0, 0.58)", 
  },
];

const ColorCard = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", 
        alignItems: "flex-start", 
        flexWrap: "wrap",
        minHeight: "40vh", 
        backgroundColor: "#f5f5f5",
        padding: 0,
      }}
    >
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            width: "480px",
            height: "230px",
            margin: "0 10px", 
            borderRadius: card.borderRadius,
            backgroundColor: card.background,
            boxShadow: card.boxShadow || "none",
            position: "relative",
          }}
        ></div>
      ))}
    </div>
  );
};

export default ColorCard;
