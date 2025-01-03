import './Footer.css';
import { Link } from "react-router-dom";

const Footer =(props)=>{
return (

<div className="footer-content ">

<section className="custom_footer" >
     {/* left */ }
     <div  style={{
    fontSize: '15px',
    fontWeight: 800,
    fontFamily: 'system-ui',
    alignSelf: 'center',
    color:'rgb(246, 243, 199)',
    paddingLeft:'42px'
  }}> 

 <span className="hidden-text1">   You Can Follow  Us In Our Socials  </span>   </div>
   

    {/* right */}
     <div > 
       < ul id="socials_links">
              <li>
                <a className="social-item" href ="https://www.facebook.com/profile.php?id=61552143651130" target='_blanck'>
                <i className="fa-brands fa-square-facebook"></i> <span className="hidden-text"> Facebook </span> 
                </a>
             </li>
              <li>
                <a className="social-item" href="https://www.instagram.com/_remaasaleh/profilecard/?igsh=M3I0aHU3M3JkNW9s"target='_blanck'>
                 <i className="fa-brands fa-instagram"></i> <span className="hidden-text"> Instagram </span>  
                </a>
              </li>
              <li>
                <a className="social-item" href="#notifications" target='blanck'>
                <i className="fa-brands fa-whatsapp"></i> <span className="hidden-text">  Whatsapp </span> 
                </a>
              </li>
  </ul>

     </div>

</section>

<section className='links' > 


  {props.children}


  <div class="contact-info">
  <p></p>
  <p>📞 123-456-7890</p>
  <p>✉️ info@yourwebsite.com</p>
  <a
      href="https://maps.app.goo.gl/29nidEmCbgdZLiHZA"
       target="_blank"
      rel="noopener noreferrer"
       className="place-location-link"  
       >
        📍 our location
        </a>

</div>

</section >
  
<section className='lastly'>
<div className="footer-brand">
<a className="Rlogo" href="#">
          {props.BrandName}
        </a>
    
</div> 

<div className="footer-updates">
  <p  style={{
    fontSize: '15px',
    fontWeight: 800,
    fontFamily: 'system-ui',
    alignSelf: 'center',
    color:'  rgb(236, 233, 188)'
  }}>🎉 New offers on products! Get a 20% discount today only!</p>
</div>

<div className="copyright">
  <p  style={{
    fontSize: '15px',
    fontWeight: 800,
    fontFamily: 'system-ui',
    alignSelf: 'center',
    color:' rgb(236, 233, 188)'
  }}>&copy; All rights reserved 2024.</p>
</div>
</section>

</div>



)

}
export default Footer;