import React, { useState } from "react";
import "./FloatingProducts2.css";

const imageArray = [...Array(10)].map((_, index) => `/assets/optimized/image_${index + 1}.jpg`);

const FloatingProducts2 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleImageClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle effect
  };

  return (
    <div className="floating-products-container">
      <ul>
        {imageArray.map((imageSrc, index) => (
          <li
            key={index}
            className={activeIndex === index ? "active" : ""}
            onClick={() => handleImageClick(index)} // Apply effect on click
          >
            <img src={imageSrc} alt={`Product ${index + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FloatingProducts2;
