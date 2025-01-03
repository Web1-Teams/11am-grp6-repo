import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./CategoryBar.css";

// This is an array of categories. Each category has a name & image & link.
// If we want to add or remove a category, we can do this here in the array without changing the rest of the code.


const categories = [
  {
    name: "Archaeological Sites",
    image: "/CategoryBar-images/اثري.jpg",
    link: "/category/archaeological-site",
  },
  {
    name: "Restaurants",
    image: "/CategoryBar-images/Restaurants.jpg",
    link: "/category/restaurant",
  },
  {
    name: "Amusement Parks",
    image: "/CategoryBar-images/ملاهي.jpg",
    link: "/category/amusement park",
  },
  {
    name: "Parks",
    image: "/CategoryBar-images/park.jpg",
    link: "/category/park",
  },
  {
    name: "Cafés",
    image: "/CategoryBar-images/drinls.jpg",
    link: "/category/cafe",
  },
  {
    name: "Play Centers",
    image: "/CategoryBar-images/لعب.jpg",
    link: "/category/play-center",
  },
];

const CategoryItem = ({ name, image, link }) => {
  return (
    // <div className=" ">
    <div className="hz-Citem">
      <Link to={link}>
        <img className="img-cat " src={image} alt={name} />
      </Link>

      <Link to={link} className="text-decoration-none">
        <span className="hz-item-txt fw-bold text-dark">{name}</span>
      </Link>
    </div>
    // </div>
  );
};

const CategoryBar = () => {
  return (
    <section className="catg ">
      {/* <div className=" category"> */}
      {/* <div className="catg "> */}
      {categories.map((category, index) => (
        <CategoryItem
          key={index} // Added a unique key for each item
          name={category.name}
          image={category.image}
          link={category.link}
        />
      ))}
      {/* </div> */}
      {/* </div> */}
    </section>
  );
};

export default CategoryBar;