import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./style.css";

function Index() {
   const [isMobile, setIsMobile] = useState(false);

   // const [showDrop, setShowDrop] = useState(false);
   // var x = document.getElementById("nav-drop");
   // x.addEventListener("mouseover", ()=>setShowDrop(true));
   // x.addEventListener("click",()=>setShowDrop(true));
   // x.addEventListener("mouseout", ()=>setShowDrop(false));
   return (
      <>
         <nav className="navbar" id="nav">
            <h3>
               <a className="logo" href="/">
                  {/* <img src={require("../../assets/img/pic.png")} alt="logo" /> */}
                  Health Hive
               </a>
            </h3>
            <div className="icon_mob_div">
               <FaTwitter className="icon_mob" />
               <FaFacebook className="icon_mob" />
               <FaInstagram className="icon_mob" />
               <FaLinkedin className="icon_mob" />
            </div>

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

               <li>
                  <a className="nav-link nav-icon" aria-current="page" href="/">
                     <FaTwitter className="icon" />
                  </a>
               </li>
               <li>
                  <a className="nav-link nav-icon" aria-current="page" href="/">
                     <FaFacebook className="icon" />
                  </a>
               </li>
               <li>
                  <a className="nav-link nav-icon" aria-current="page" href="/">
                     <FaInstagram className="icon" />
                  </a>
               </li>
               <li>
                  <a className="nav-link nav-icon" aria-current="page" href="/">
                     <FaLinkedin className="icon" />
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
