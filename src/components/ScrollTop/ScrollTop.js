import React, { useState, useEffect } from "react";
import "./ScrollTop.css"; // استيراد ملف CSS لتنسيق السهم

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // التحقق من التمرير
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true); // إظهار السهم
    } else {
      setIsVisible(false); // إخفاء السهم
    }
  };

  // التمرير لأعلى الصفحة
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // إضافة حدث التمرير عند تحميل المكون
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <i className="fa fa-chevron-up"></i>
        </button>
      )}
    </div>
  );
};

export default ScrollTop;
