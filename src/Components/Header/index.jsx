import React from "react";

import "./style.css";

function index() {
   return (
      <div className="header-bg" id="header">
         <div className="header">
            <h1>
               Welcome to <span>Health Hive </span>
            </h1>
            <p>Experience Unparalleled Protection with Health Hive:</p>
            <p>Your Lifetime Trusted Legal Partner</p>
            <div className="headerButtons">
               <button className="rounded-3 mx-3 headerBtn">
                  <a href="#contact">Book Now</a>
               </button>
               {/* <button className="rounded-3 mx-3 headerBtn">
                  <Link to="/planPurchase"> Health Hive Plan</Link>
               </button> */}
            </div>
         </div>
      </div>
   );
}

export default index;
