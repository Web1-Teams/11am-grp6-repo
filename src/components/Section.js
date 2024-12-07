import Carousel from './carousel';
import "./Section.css"
const Section = (props) => {
  return (
    <div>
      <h3 className="sectin-header">{props.subtitle}</h3>
      <Carousel />
    </div>
  );
};

export default Section;