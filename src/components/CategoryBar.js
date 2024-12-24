import React from "react";
import "./CategoryBar.css";
import"./SecondaryNavBar.css"
// This is an array of categories. Each category has a name & image & link.
// If we want to add or remove a category, we can do this here in the array without changing the rest of the code.
const categories = [
  {
    name: "Archaeological Sites",
    image: "/CategoryBar-images/اثري.jpg",
    link: "الرابط_المطلوب.html",
  },
  {
    name: "Restaurants",
    image: "/CategoryBar-images/Restaurants.jpg",
    link: "الرابط_المطلوب.html",
  },
  {
    name: "Amusement Parks",
    image: "/CategoryBar-images/ملاهي.jpg",
    link: "الرابط_المطلوب.html",
  },
  {
    name: "Parks",
    image: "/CategoryBar-images/park.jpg",
    link: "الرابط_المطلوب.html",
  },
  {
    name: "Cafés",
    image: "/CategoryBar-images/drinls.jpg",
    link: "الرابط_المطلوب.html",
  },
  {
    name: "Play Centers",
    image: "/CategoryBar-images/لعب.jpg",
    link: "الرابط_المطلوب.html",
  },
];

const CategoryItem = (props) => {
  return (
    <div className="col-lg-2 col-sm-6 col-md-3">
      <div className="d-flex flex-column align-items-center">
        <a href={props.link}>
          <img
            className="img-cat img-fluid mb-2"
            src={props.image}
            alt={props.name}
          />
        </a>

        <a href={props.link} className="text-decoration-none">
          <span className="fw-bold text-dark">{props.name}</span>
        </a>
      </div>
    </div>
  );
};

// The CategoryBar component goes through each item in the categories array (using map)
// and creates a CategoryItem component for every category.
const CategoryBar = () => {
  return (
    <section className="catg py-4">
      <div className="container category">
        <div className="row justify-content-evenly">
          {categories.map((category) => (
            <CategoryItem
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
