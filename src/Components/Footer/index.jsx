import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaSkype, FaLinkedinIn, FaAngleRight, FaArrowUp } from "react-icons/fa";

import "./style.css";

function index() {
   return (
      <div>
         <div className="footer_top">
            <div className="footer_sec1">
               <h3 className="footerlogo">Health Hive</h3>
               <p>
                  A108 Adam street <br /> New York,NY 535022 <br /> United States
               </p>
               <p>
                  <b>Phone:</b>+15589 55488 55 <br />
                  <b>Email:</b>info@example.com
               </p>
            </div>

            <div className="footer_sec2">
               <h5>Useful Links</h5>
               <ul>
                  <li>
                     <a className="" href="#nav" onClick={() => window.scrollTo(0, 0)}>
                        <FaAngleRight className="arrow_icon" /> Home
                     </a>
                  </li>
                  <li>
                     <a className="" href="#about" onClick={() => window.scrollTo(0, 0)}>
                        <FaAngleRight className="arrow_icon" /> About us
                     </a>
                  </li>
                  <li>
                     <a className="" href="#services" onClick={() => window.scrollTo(0, 0)}>
                        <FaAngleRight className="arrow_icon" /> Services
                     </a>
                  </li>
                  <li>
                     <FaAngleRight className="arrow_icon" /> Terms of Services
                  </li>
                  <li>
                     <FaAngleRight className="arrow_icon" /> Privacy Policy
                  </li>
               </ul>
            </div>

            <div className="footer_sec2">
               <h5>Our Additional Services</h5>
               <ul>
                  <li>
                     <FaAngleRight className="arrow_icon" /> Case Studies
                  </li>
                  <li>
                     <FaAngleRight className="arrow_icon" /> Legal Guidelines
                  </li>
                  <li>
                     <FaAngleRight className="arrow_icon" /> Educational Resources
                  </li>
                  <li>
                     <FaAngleRight className="arrow_icon" /> Latest Updates
                  </li>
               </ul>
            </div>

        
         </div>

         <div className="footer_bottom">
            <div className="footer_bottom_content">
               <p className="copyrightLine">
                  © Copyright <span>Health Hive</span>. All Rights Reserved <br /> Developed by <a href="https://www.instagram.com/dizzytech_byd"  target="_blank" rel="noopener noreferrer">Dissytech_byd</a>
               </p>
            </div>

            <div className="footer_bottom_icons">
               <FaTwitter className="footer_bottom_icon" /> <FaFacebookF className="footer_bottom_icon" />{" "}
               <FaInstagram className="footer_bottom_icon" /> <FaSkype className="footer_bottom_icon" />{" "}
               <FaLinkedinIn className="footer_bottom_icon" />
            </div>
         </div>

         <div className="footer_ArrowTop">
            <a href="#nav">
               <FaArrowUp className="ArrowTop" />
            </a>
         </div>
      </div>
   );
}

export default index;
