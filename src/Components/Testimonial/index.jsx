import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";

import "./style.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];
function index() {
  return (
    <div className="testimonial" id="testimonial">
    <div className="test_heading">
    <h1>Testimonial</h1>
    </div>
   
      <div className="test_carousel">
        <Carousel  breakPoints={breakPoints} showArrows ={false}
>
          <Item>
              <div className="carousel_box">
                  <p><FaQuoteLeft className="box_icon" /> Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis aliquam malesuada bibendum arcu <FaQuoteRight className="box_icon" /> </p>
                  <img src={require("../../assets/img/testimonials/testimonials-1.jpg")} alt="client-pic" />
                  <h5>Saul Goodman</h5>
                  <h6>Ceo & Founder</h6>
              </div>            
          </Item>
          <Item>
          <div className="carousel_box">
                  <p><FaQuoteLeft className="box_icon" /> Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis aliquam malesuada bibendum arcu<FaQuoteRight className="box_icon" /></p>
                  <img src={require("../../assets/img/testimonials/testimonials-2.jpg")} alt="client-pic" />
                  <h5>Saul Goodman</h5>
                  <h6>Ceo & Founder</h6>
              </div>
          </Item>
          <Item>
          <div className="carousel_box">
                  <p><FaQuoteLeft className="box_icon" /> Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis aliquam malesuada bibendum arcu<FaQuoteRight className="box_icon" /></p>
                  <img src={require("../../assets/img/testimonials/testimonials-3.jpg")}alt="client-pic" />
                  <h5>Saul Goodman</h5>
                  <h6>Ceo & Founder</h6>
              </div>
          </Item>
          <Item>
          <div className="carousel_box">
                  <p><FaQuoteLeft className="box_icon" /> Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis aliquam malesuada bibendum arcu<FaQuoteRight className="box_icon" /></p>
                  <img src={require("../../assets/img/testimonials/testimonials-4.jpg")} alt="client-pic"/>
                  <h5>Saul Goodman</h5>
                  <h6>Ceo & Founder</h6>
              </div>
          </Item>
          <Item>
          <div className="carousel_box">
                  <p><FaQuoteLeft className="box_icon" /> Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis aliquam malesuada bibendum arcu<FaQuoteRight className="box_icon" /></p>
                  <img src={require("../../assets/img/testimonials/testimonials-1.jpg")} alt="client-pic" />
                  <h5>Saul Goodman</h5>
                  <h6>Ceo & Founder</h6>
              </div>
          </Item>
          <Item>
          <div className="carousel_box">
                  <p><FaQuoteLeft className="box_icon" /> Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis aliquam malesuada bibendum arcu<FaQuoteRight className="box_icon" /></p>
                  <img src={require("../../assets/img/testimonials/testimonials-2.jpg")} alt="client-pic"/>
                  <h5>Saul Goodman</h5>
                  <h6>Ceo & Founder</h6>
              </div>
          </Item>
          <Item>
          <div className="carousel_box">
                  <p><FaQuoteLeft className="box_icon" /> Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis aliquam malesuada bibendum arcu<FaQuoteRight className="box_icon" /></p>
                  <img src={require("../../assets/img/testimonials/testimonials-3.jpg")} alt="client-pic"/>
                  <h5>Saul Goodman</h5>
                  <h6>Ceo & Founder</h6>
              </div>
          </Item>
          <Item>
          <div className="carousel_box">
                  <p><FaQuoteLeft className="box_icon" /> Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis aliquam malesuada bibendum arcu<FaQuoteRight className="box_icon" /></p>
                  <img src={require("../../assets/img/testimonials/testimonials-4.jpg")} alt="client-pic"/>
                  <h5>Saul Goodman</h5>
                  <h6>Ceo & Founder</h6>
              </div>
          </Item>
          <Item>
          <div className="carousel_box">
                  <p><FaQuoteLeft className="box_icon" /> Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis aliquam malesuada bibendum arcu<FaQuoteRight className="box_icon" /></p>
                  <img src={require("../../assets/img/testimonials/testimonials-1.jpg")} alt="client-pic" />
                  <h5>Saul Goodman</h5>
                  <h6>Ceo & Founder</h6>
              </div>
          </Item>
          <Item>
          <div className="carousel_box">
                  <p><FaQuoteLeft className="box_icon" /> Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis aliquam malesuada bibendum arcu<FaQuoteRight className="box_icon" /></p>
                  <img src={require("../../assets/img/testimonials/testimonials-2.jpg")} alt="client-pic" />
                  <h5>Saul Goodman</h5>
                  <h6>Ceo & Founder</h6>
              </div>
          </Item>
          <Item>
          <div className="carousel_box">
                  <p><FaQuoteLeft className="box_icon" /> Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis aliquam malesuada bibendum arcu<FaQuoteRight className="box_icon" /></p>
                  <img src={require("../../assets/img/testimonials/testimonials-3.jpg")} alt="client-pic"/>
                  <h5>Saul Goodman</h5>
                  <h6>Ceo & Founder</h6>
              </div>
          </Item>
          <Item>
          <div className="carousel_box">
                  <p><FaQuoteLeft className="box_icon" /> Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis aliquam malesuada bibendum arcu<FaQuoteRight className="box_icon" /></p>
                  <img src={require("../../assets/img/testimonials/testimonials-1.jpg")} alt="client-pic"/>
                  <h5>Saul Goodman</h5>
                  <h6>Ceo & Founder</h6>
              </div>
          </Item>
          <Item>
          <div className="carousel_box">
                  <p><FaQuoteLeft className="box_icon" /> Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis aliquam malesuada bibendum arcu<FaQuoteRight className="box_icon" /></p>
                  <img src={require("../../assets/img/testimonials/testimonials-1.jpg")} alt="client-pic" />
                  <h5>Saul Goodman</h5>
                  <h6>Ceo & Founder</h6>
              </div>
          </Item>
          <Item>
          <div className="carousel_box">
                  <p><FaQuoteLeft className="box_icon" /> Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis aliquam malesuada bibendum arcu<FaQuoteRight className="box_icon" /></p>
                  <img src={require("../../assets/img/testimonials/testimonials-2.jpg")}alt="client-pic" />
                  <h5>Saul Goodman</h5>
                  <h6>Ceo & Founder</h6>
              </div>
          </Item>
          <Item>
          <div className="carousel_box">
                  <p><FaQuoteLeft className="box_icon" /> Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis aliquam malesuada bibendum arcu<FaQuoteRight className="box_icon" /></p>
                  <img src={require("../../assets/img/testimonials/testimonials-4.jpg")} alt="client-pic" />
                  <h5>Saul Goodman</h5>
                  <h6>Ceo & Founder</h6>
              </div>
          </Item>
        </Carousel>
      </div>
    </div>
  );
}

export default index;
