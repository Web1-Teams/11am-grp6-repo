import React from 'react';
import "./SecondaryNavBar.css"
const  SecondaryNavBar= () => {
  return (
    <div classNme="AllNav">
      <div className="sub-navbar">
        <ul className="sub-ul">
        <li className="cat"><a className='sub-link' href="/Archaeological Sites"> <i class="fa-solid fa-building-wheat "></i> Archaeological Sites</a></li>
        <li className="cat"><a  className='sub-link'href="/Restaurants"> <i className="fa-solid fa-utensils fa-xl " ></i> Restaurants</a></li>
        <li className="cat"><a className='sub-link' href="/Amusement Parks"><i class="material-symbols-outlined "style={{ fontSize: '27px'}}>attractions</i> Amusement Parks</a></li>
        <li className="cat"><a  className='sub-link'href="/Parks"> <i class="material-symbols-outlined "style={{ fontSize: '26px'}}>nature</i>Parks</a></li>
        <li className="cat"><a className='sub-link' href="/Cafés"><i className="fa-solid fa-mug-saucer fa-lg"></i> Cafés</a></li>
        <li className="cat"><a  className='sub-link'href="/Play Centers"><i class="fa-solid fa-puzzle-piece fa-lg "></i> Play Centers</a></li>
        </ul>
      </div>
      <div className="sub-navbar1">
        <ul className="sub-ul">  
        <li className="cat"><a className='sub-link' href="/Archaeological Sites"> <i class="fa-solid fa-building-wheat "></i> </a></li>
        <li className="cat"><a  className='sub-link'href="/Restaurants"> <i className="fa-solid fa-utensils fa-xl " ></i></a></li>
        <li className="cat"><a className='sub-link' href="/Amusement Parks"><i class="material-symbols-outlined "style={{ fontSize: '28px'}}>attractions</i></a></li>
        <li className="cat"><a  className='sub-link'href="/Parks"> <i class="material-symbols-outlined "style={{ fontSize: '28px'}}>nature</i></a></li>
        <li className="cat"><a className='sub-link' href="/Cafés"><i className="fa-solid fa-mug-saucer"></i></a></li>
        <li className="cat"><a  className='sub-link'href="/Play Centers"><i class="fa-solid fa-puzzle-piece fa-lg "></i></a></li>
        </ul>
      </div>
   </div>
  );
};

export default SecondaryNavBar;