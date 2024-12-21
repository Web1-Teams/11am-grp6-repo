import './Footer_cat.css';

const Footer_cat=(props)=>{
  return (

<div className='cats-links-container'>
<p className="cats-name" >   {props.c1}   </p> 
        <p>______________</p>
    <div> <a href ="https://guide.michelin.com/en/attica/athens/restaurant/patio" target="_blank">{props.c1tag1}</a></div>
     <div>   <a href ="/">{props.c1tag2}</a></div>
    <div>  <a href ="https://maps.app.goo.gl/29nidEmCbgdZLiHZA" target="_blank">{props.c1tag3}</a></div>
      <div>  <a href ="https://guide.michelin.com/en/attica/athens/restaurant/patio" target="_blank" >{props.c1tag4}</a></div>
     <div><a href ="https://guide.michelin.com/en/attica/athens/restaurant/patio"target="_blank">{props.c1tag5}</a></div>
</div>

  )
}
export default Footer_cat;