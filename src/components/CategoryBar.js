import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./CategoryBar.css";

// Array of categories, each with a name, image, and route to its CategoryPage.
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
    <div className="col-lg-2 col-sm-6 col-md-3">
      <div className="d-flex flex-column align-items-center">
        <Link to={link}>
          <img
            className="img-cat img-fluid mb-2"
            src={image}
            alt={name}
          />
        </Link>
        <Link to={link} className="text-decoration-none">
          <span className="fw-bold text-dark">{name}</span>
        </Link>
      </div>
    </div>
  );
};

const CategoryBar = () => {
  return (
    <section className="catg py-4">
      <div className="container category">
        <div className="row justify-content-evenly">
          {categories.map((category, index) => (
            <CategoryItem
              key={index} // Added a unique key for each item
              name={category.name}
              image={category.image}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBar;
