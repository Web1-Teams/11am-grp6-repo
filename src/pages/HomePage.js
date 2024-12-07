import React from "react";
import NavBar from "../components/NavBar";
import CategoryBar from "../components/CategoryBar";
import Section from "../components/Section";
import Slideer from "../components/Slideer";
const HomePage = () => {
  return (
    <div className="grp6-homepage">
      <nav>
        <NavBar
          BrandName="eATMe"
          i1="Home"
          i2="Something Else2"
          i3="Something Else3"
        />
      </nav>
      <section>
        <Slideer />
      </section>
      <section>
        <CategoryBar />
      </section>
      <section>
        <Section subtitle="New Places" />
        <Section subtitle="Top Rated" />
        <Section subtitle="Your Favorites" />
        <Section subtitle="Reccomended" />
      </section>
    </div>
  );
};

export default HomePage;
