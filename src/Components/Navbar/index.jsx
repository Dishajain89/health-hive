import React, { useState } from "react";
import "./style.css";

function Index() {
   const [isMobile, setIsMobile] = useState(false);

   return (
      <>
         <nav className="navbar" id="nav">
            <h3>
               <a className="logo" href="/">
                  {/* <img src={require("../../assets/img/pic.png")} alt="logo" /> */}
                  Health Hive
               </a>
            </h3>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
               <li>
                  <a className="nav-link active" href="/">
                     Home
                  </a>
               </li>
               <li>
                  <a className="nav-link active" href="#about">
                     About
                  </a>
               </li>
               <li>
                  <a className="nav-link active" href="#service">
                     Sevices
                  </a>
               </li>

               <li>
                  <a className="nav-link active" href="#testimonial">
                     Testimonial
                  </a>
               </li>


               <li>
                  <a className="nav-link active" href="#contact">
                     Contact Us
                  </a>
               </li>
            
            </ul>
            <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
               {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            </button>
         </nav>
      </>
   );
}

export default Index;
