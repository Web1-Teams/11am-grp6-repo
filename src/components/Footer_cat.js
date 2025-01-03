import './Footer_cat.css';

const Footer_cat=(props)=>{
  return (

<div className='cats-links-container'>
<p className="cats-name" >   {props.c1}   </p> 
        <p>______________</p>
    <div> <a 
    className='i' 
    href ="https://www.najah.edu/en/academic/faculties/" 
    target="_blank">{props.c1tag1}
    </a></div>
    
     <div>  <a 
     className='i'
      href ="/">{props.c1tag2}
      </a></div>

    <div>  <a
     className='i' 
     href ="https://www.najah.edu/ar/international-office/visitors/" target="_blank">{props.c1tag3}
     </a></div>

      <div>  <a 
      className='i'
       href ="https://www.facebook.com/profile.php?id=100009715987948" 
       target="_blank" >{props.c1tag4}
       </a></div>
       
     <div><a 
     className='i' 
      href ="https://zajel.najah.edu/"
      target="_blank">{props.c1tag5}
      </a></div>
</div>

  )
}
export default Footer_cat;