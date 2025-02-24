import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FiPlus, FiLink } from "react-icons/fi";
// import GLightbox3 from 'glightbox';
import PortfolioItem from "./PortfolioItem";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import Modal from "./Modal";


import "./style.css";
import { data } from 'dom7';

function Index() {
  const [items, SetItems] = useState(PortfolioItem);
  const [photoIndex, SetphotoIndex] = useState(0);
  const [isOpen, SetisOpen] = useState(false);

  const filterItem = (catItem) => {
    const updatedItems = PortfolioItem.filter((curElem) => {
      return curElem.category === catItem;
    });
    SetItems(updatedItems);
  }

  const aa = (pr) => {
    console.log("Aaaaaa" , pr)
    SetphotoIndex(pr)
    SetisOpen(true)
  }

  return (
    <div className="portfolioo">

      {/* //////////////////////////////////////////////////////// */}
      {isOpen && (
          <Lightbox
            mainSrc={items[photoIndex].image}
            nextSrc={items[(photoIndex + 1) % items.length].image}
            prevSrc={items[(photoIndex + items.length - 1) % items.length].image}
            onCloseRequest={() => SetisOpen(false)}
            onMovePrevRequest={() =>
              SetphotoIndex((photoIndex + items.length - 1) % items.length)
            }
            onMoveNextRequest={() =>
              SetphotoIndex((photoIndex + 1) % items.length)
            }
          />
        )}
      {/* /////////////////////////////////////////////////////////// */}
      <h1>Portfolio</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <section id="portfolio" className="portfolio">
        <div className="container">

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li onClick={() => SetItems(PortfolioItem)} data-filter="*" className="filter-active">All</li>
                <li onClick={() => filterItem("app")} >App</li>
                <li onClick={() => filterItem("card")} >Card</li>
                <li onClick={() => filterItem("web")} >Web</li>
              </ul>
            </div>
          </div>

          <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
            {
              items.map((elem , i) => {
                const { id, name, image, title, description, link } = elem;

                return (
                  <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <img src={image} className="img-fluid" alt="" />
                    <div className="portfolio_overly">
                      <a className="GLightbox3 portfolio-preview-link" data-gallery="gallery1" title={title}>
                        <FiPlus onClick={()=>{aa(i)}} className="overly_icon" />
                      </a>
                      <NavLink to="/portfolioDetails" className="portfolio-details-link" title="More Details">
                        <FiLink className="overly_icon" />
                      </NavLink>
                    </div>
                    <div className="portfolio-info">
                      <h4>{name}</h4>
                      <p>{description} </p>
                    </div>
                  </div>
                )
              })
            }

            {/* {
             items.map((elem) =>{
                const {id, name,image,title,description,link} = elem ;

                return(
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <img src={image} className="img-fluid" alt=""/>
                 <div className="portfolio_overly" key={index}>
                 <a href={link} className=" portfolio-preview-link" onClick={()=>handelClick(elem,index)}
                  title={title}>
                 <FiPlus className="overly_icon" /> </a>
                 <NavLink to="/portfolioDetails" className="portfolio-details-link" title="More Details">
                <FiLink className="overly_icon"/></NavLink>
                </div>
                <div className="portfolio-info">
                <h4>{name}</h4>
                <p>{description} </p>
              </div>
              {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            handelRotation={handelRotation}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            handelRotationLeft={handelRotationLeft}
          />
        )} */}

            {/* </div> 
                )
             })
           } */}






            {/* <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src={require("../../assets/img/portfolio/portfolio-1.jpg")} className="img-fluid" alt=""/>
            <div className="portfolio_overly">
            <a href={img1} className="GLightbox3 portfolio-preview-link" data-gallery="gallery1" title="App 1">
            <FiPlus className="overly_icon" /> </a>
            <NavLink to="/portfolioDetails" className="portfolio-details-link" title="More Details">
              <FiLink className="overly_icon"/></NavLink>
            </div>
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
            </div>
          </div> 

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src={require("../../assets/img/portfolio/portfolio-2.jpg")} className="img-fluid" alt=""/>
            <div className="portfolio_overly">
            <a href={img2} className="GLightbox3 portfolio-preview-link" data-gallery="gallery1" title="Web 3">
            <FiPlus className="overly_icon" /> </a>
            <NavLink to="/portfolioDetails" className="portfolio-details-link" title="More Details">
              <FiLink className="overly_icon"/></NavLink>
            </div>
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
            </div>
          </div> 

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src={require("../../assets/img/portfolio/portfolio-3.jpg")} className="img-fluid" alt=""/>
            <div className="portfolio_overly">
            <a href={img3} className="portfolio-preview-link" title="App 2">
            <FiPlus className="overly_icon" /> </a>
            <NavLink to="/portfolioDetails" className="portfolio-details-link" title="More Details">
              <FiLink className="overly_icon"/></NavLink>
            </div>
            <div className="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src={require("../../assets/img/portfolio/portfolio-4.jpg")} className="img-fluid" alt=""/>
            <div className="portfolio_overly">
            <a href={img4} className="portfolio-preview-link" title="Card 2">
            <FiPlus className="overly_icon" /> </a>
            <NavLink to="/portfolioDetails" className="portfolio-details-link" title="More Details">
              <FiLink className="overly_icon"/></NavLink>
            </div>
            <div className="portfolio-info">
              <h4>Card 2</h4>
              <p>Card</p>              
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src={require("../../assets/img/portfolio/portfolio-5.jpg")} className="img-fluid" alt=""/>
            <div className="portfolio_overly">
            <a href={img5} className="portfolio-preview-link" title="Web 2">
            <FiPlus className="overly_icon" /> </a>
            <NavLink to="/portfolioDetails" className="portfolio-details-link" title="More Details">
              <FiLink className="overly_icon"/></NavLink>
            </div>
            <div className="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src={require("../../assets/img/portfolio/portfolio-6.jpg")} className="img-fluid" alt=""/>
            <div className="portfolio_overly">
            <a href={img6} className="portfolio-preview-link" title="App 3">
            <FiPlus className="overly_icon" /> </a>
            <NavLink to="/portfolioDetails" className="portfolio-details-link" title="More Details">
              <FiLink className="overly_icon"/></NavLink>
            </div>
            <div className="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src={require("../../assets/img/portfolio/portfolio-7.jpg")} className="img-fluid" alt=""/>
            <div className="portfolio_overly">
            <a href={img7} className="portfolio-preview-link" title="Card 1">
            <FiPlus className="overly_icon" /> </a>
            <NavLink to="/portfolioDetails" className="portfolio-details-link" title="More Details">
              <FiLink className="overly_icon"/></NavLink>
            </div>
            <div className="portfolio-info">
              <h4>Card 1</h4>
              <p>Card</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src={require("../../assets/img/portfolio/portfolio-8.jpg")} className="img-fluid" alt=""/>
            <div className="portfolio_overly">
            <a href={img8} className="portfolio-preview-link" title="Card 3">
            <FiPlus className="overly_icon" /> </a>
            <NavLink to="/portfolioDetails" className="portfolio-details-link" title="More Details">
              <FiLink className="overly_icon"/></NavLink>
            </div>
            <div className="portfolio-info">
              <h4>Card 3</h4>
              <p>Card</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src={require("../../assets/img/portfolio/portfolio-9.jpg")} className="img-fluid" alt=""/>
            <div className="portfolio_overly">
            <a href={img9} className="portfolio-preview-link" title="Web 3">
            <FiPlus className="overly_icon" /> </a>
            <NavLink to="/portfolioDetails" className="portfolio-details-link" title="More Details">
              <FiLink className="overly_icon"/></NavLink>
            </div>
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              
            </div>
          </div> */}

          </div>

        </div>
      </section>
    </div>
  )
}

export default Index;
