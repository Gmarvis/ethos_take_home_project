import SpinLoader from "../../molucles/Loaders/SpinLoader.tsx";
import "./HeroSecction.css";
import React, { useEffect, useState } from "react";
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
  const [category, setCategory] = useState("rice");
  const [image, setImage] = useState("");
  const [isLoading, setIsLOading] = useState(false);

  const fetchImages = async () => {
    try {
      setIsLOading(true);
      const res = await fetch(process.env.REACT_APP_BASE_URL + `/${category}`, {
        method: "GET",
        mode: "cors",
      });

      const url = await res.json();
      setImage(url.image);
      setIsLOading(false);
      console.log(url.image);
    } catch (err) {
      console.log("an error occured when trying to fetch images");
      setIsLOading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [category]);

  return (
    <div className="HeroSection">
      <div className="header"></div>
      <div className="main">
        <div className="content">
          <p className="sub-text">Lose yourself in a visual feast.</p>
          <h1>
            FoodGallery: Where the journey is just as delicious as the
            destination.
          </h1>
          <p className="sub-text">
            Select a food category from the list below and have some fun, you
            can also change image per each category you choose
          </p>
          <div className="categoriesBtn">
            {Categories.map((cat, i) => (
              <button
                style={{
                  backgroundColor: `${category === cat.name ? " #e08608" : ""}`,
                }}
                onClick={() => setCategory(cat.name)}
                key={i}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
        <div className="imageSection">
          <h3>{category.toUpperCase()}</h3>
          {isLoading ? (
            <div className="imageLoader">
              <SpinLoader />
            </div>
          ) : (
            <img src={image} alt="" className="image" />
          )}
          <button className="changeBtn" onClick={fetchImages}>
            Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
