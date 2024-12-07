import React from "react";
import "./CategoryBar.css";


// This is an array of categories. Each category has a name & image & link.
// If we want to add or remove a category, we can do this here in the array without changing the rest of the code.
const categories = [
  { name: "أماكن أثرية", image: "/CategoryBar-images/اثري.jpg", link: "الرابط_المطلوب.html" },
  { name: "مطاعم", image: "/CategoryBar-images/Restaurants.jpg", link: "الرابط_المطلوب.html" },
  { name: "مدن الملاهي", image: "/CategoryBar-images/ملاهي.jpg", link: "الرابط_المطلوب.html" },
  { name: "متنزهات", image: "/CategoryBar-images/park.jpg", link: "الرابط_المطلوب.html" },
  { name: "كافيهات", image: "/CategoryBar-images/drinls.jpg", link: "الرابط_المطلوب.html" },
  { name: "مراكز اللعب", image: "/CategoryBar-images/لعب.jpg", link: "الرابط_المطلوب.html" },
];


const CategoryItem = (props) => {
  return (
    <div className="col-lg-2 col-sm-6 col-md-3">
      <a href={props.link} className="text-decoration-none">
        <div className="d-flex flex-column align-items-center">
          <img
            className="img-cat img-fluid mb-2"
            src={props.image}
            alt={props.name}
          />
          <span className="fw-bold text-dark">{props.name}</span>
        </div>
      </a>
    </div>
  );
};


// The CategoryBar component goes through each item in the categories array (using map)
// and creates a CategoryItem component for every category. 
const CategoryBar = () => {
  return (
    <section className="catg py-4">
      <div className="container">
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
