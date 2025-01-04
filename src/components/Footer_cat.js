import './Footer_cat.css';
import { Link } from 'react-router-dom';

const Footer_cat = (props) => {
  let categoryLink = '';

  // Assign category link based on props.c1
  switch(props.c1) {
    case 'resturents':
      categoryLink = '/category/restaurant';
      break;
    case 'Archaeological Sites':
      categoryLink = '/category/archaeological-site';
      break;
    case 'Amusement Parks':
      categoryLink = '/category/amusement%20park';
      break;
    case 'Parks':
      categoryLink = '/category/park';
      break;
    case 'Cafes':
      categoryLink = '/category/cafe';
      break;
    case 'Play Centers':
      categoryLink = '/category/play-center';
      break;
    default:
      categoryLink = '/HomePage'; // Default to home if no match
  }

  return (
    <div className='cats-links-container'>
      <p className="cats-name">
        <Link to={categoryLink}>{props.c1}</Link>
      </p>
      <p>______________</p>
      <div>
        <a className='i' href="https://www.najah.edu/en/academic/faculties/" target="_blank">{props.c1tag1}</a>
      </div>
      <div>
        <a className='i' href="/">{props.c1tag2}</a>
      </div>
      <div>
        <a className='i' href="https://www.najah.edu/ar/international-office/visitors/" target="_blank">{props.c1tag3}</a>
      </div>
      <div>
        <a className='i' href="https://www.facebook.com/profile.php?id=100009715987948" target="_blank">{props.c1tag4}</a>
      </div>
      <div>
        <a className='i' href="https://zajel.najah.edu/" target="_blank">{props.c1tag5}</a>
      </div>
    </div>
  )
}

export default Footer_cat;
