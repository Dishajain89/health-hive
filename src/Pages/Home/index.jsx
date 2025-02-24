import React from "react";
import Header from "../../Components/Header";
import About from "../../Components/About";
import Services from "../../Components/Services";
import Testimonial from "../../Components/Testimonial";
import Contact from "../../Components/Contact";

function index() {
   return (
      <div>
         <Header />
         <About />
         <Services />
         <Testimonial />
         <Contact />
      </div>
   );
}

export default index;
