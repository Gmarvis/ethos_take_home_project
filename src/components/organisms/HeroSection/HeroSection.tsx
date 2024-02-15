import "./HeroSecction.css";
import React, { useState } from "react";
// import { Categories } from "./data";

const Categories = [
  {
    name: "biryani",
  },
  {
    name: "burger",
  },
  {
    name: "butter-chicken",
  },
  {
    name: "dessert",
  },
  {
    name: "dosa",
  },
  {
    name: "idly",
  },
  {
    name: "pasta",
  },
  {
    name: "pizza ",
  },
  {
    name: "rice",
  },
  {
    name: "samosa",
  },
];

const HeroSection = () => {
  const [category, setCategory] = useState("");
  return (
    <div className="HeroSection">
      <div className="header"></div>
      <div className="main">
        <div className="content">
          <p>Lose yourself in a visual feast.</p>
          <h1>
            FoodGallery: Where the journey is just as delicious as the
            destination.
          </h1>
          <p></p>
          <div className="categoriesBtn">
            {Categories.map((category, i) => (
              <button onClick={() => setCategory(category.name)} key={i}>
                {category.name}
              </button>
            ))}
          </div>
        </div>
        <div className="imageSection">
          <h3>{category}</h3>
          <img
            src="https://i.pinimg.com/564x/cc/47/45/cc474537618ae14f3d62ff718641c491.jpg"
            alt=""
            className="image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
