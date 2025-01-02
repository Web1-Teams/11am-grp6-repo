const cards = [
    { 
      background: "#800020", 
      borderRadius: "0 0 80px 0", 
      boxShadow: "0 6px 8px rgba(0, 0, 0, 0.58)", // الزاوية السفلية اليمنى
    },
    { 
      background: "#555", 
      borderRadius: "0 80px 0 0", 
    }, // الزاوية العلوية اليمنى
    { 
      background: "#555", 
      borderRadius: "80px 0 0 0", 
    }, // الزاوية العلوية اليسرى
    { 
      background: "#800020", 
      borderRadius: "0 0 0 80px", 
      boxShadow: "0 6px 8px rgba(0, 0, 0, 0.58)", // الزاوية السفلية اليسرى
    },
  ];
  
  const ColorCard = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          minHeight: "50vh",
          backgroundColor: "#f5f5f5",
          paddingTop: "30px",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              width: "350px",
              height: "250px",
              margin: "10px",
              borderRadius: card.borderRadius,
              backgroundColor: card.background,
              boxShadow: card.boxShadow || "none", 
              position: "relative", 
            }}
          >
          </div>
        ))}
      </div>
    );
  };
  
  export default ColorCard;
  