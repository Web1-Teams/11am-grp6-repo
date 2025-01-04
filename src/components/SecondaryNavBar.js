import React from 'react';
import "./SecondaryNavBar.css"
import { Link } from 'react-router-dom';
const  SecondaryNavBar= () => {
  return (
    <div classNme="AllNav">
      <div className="sub-navbarDR">
        <ul className="sub-ul">
      <Link to="/category/archaeological-site" className="cat sub-link" href="/Archaeological Sites"> <i class="fa-solid fa-building-wheat "></i> Archaeological Sites</Link> 
        <Link to="/category/restaurant" className="cat sub-link"href="/Restaurants"> <i className="fa-solid fa-utensils fa-xl " ></i> Restaurants</Link>
        <Link to="/category/amusement park" className="cat sub-link" href="/Amusement Parks"><i class="material-symbols-outlined "style={{ fontSize: '27px'}}>attractions</i> Amusement Parks</Link>
        <Link to="/category/park"className="cat sub-link"href="/Parks"> <i class="material-symbols-outlined "style={{ fontSize: '26px'}}>nature</i>Parks</Link>
        <Link to="/category/cafe" className="cat sub-link" href="/Cafés"><i className="fa-solid fa-mug-saucer fa-lg"></i> Cafés</Link>
        <Link to="/category/play-center" className="cat sub-link"href="/Play Centers"><i class="fa-solid fa-puzzle-piece fa-lg "></i> Play Centers</Link>
        </ul>
      </div>
      <div className="sub-navbar1">
        <ul className="sub-ul">  
       <Link to="/category/archaeological-site"className="cat sub-link" href="/Archaeological Sites"> <i class="fa-solid fa-building-wheat "></i> </Link>
       <Link to="/category/restaurant" className="cat sub-link"href="/Restaurants"> <i className="fa-solid fa-utensils fa-xl " ></i></Link> 
       <Link to="/category/amusement park"className="cat sub-link" href="/Amusement Parks"><i class="material-symbols-outlined "style={{ fontSize: '28px'}}>attractions</i></Link> 
       <Link to="/category/park" className="cat sub-link" href="/Parks"> <i class="material-symbols-outlined "style={{ fontSize: '28px'}}>nature</i></Link> 
       <Link to="/category/cafe" className="cat sub-link" href="/Cafés"><i className="fa-solid fa-mug-saucer"></i></Link> 
       <Link to="/category/play-center"className="cat sub-link"href="/Play Centers"><i class="fa-solid fa-puzzle-piece fa-lg "></i></Link> 
        </ul>
      </div>
   </div>
  );
};

export default SecondaryNavBar;