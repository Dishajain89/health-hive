import React from "react";

import "./style.css";

function index() {
   return (
      <div className="service" id="service">
         <h1>Services</h1>

         <div className="service-item">
            <div className="item-left">
               <div className="item-card rounded-3">
                  <img className="serviceImg" src={require("../../assets/img/service1.jpg")} alt="service-img" />
                  <div className="item-card-content">
                     <h6>1. Personalized Health Consultations</h6>
                     <p>
                        At HealthHive, we connect you with experienced healthcare professionals for tailored consultations. Whether you're seeking
                        advice on nutrition, fitness, or managing chronic conditions, our experts are here to guide you toward a healthier lifestyle.
                     </p>
                  </div>
               </div>

               <div className="item-card rounded-3">
                  <img className="serviceImg" src={require("../../assets/img/service2.jpg")} alt="service-img" />
                  <div className="item-card-content">
                     <h6>2. AI-Powered Health Tracking</h6>
                     <p>
                        Our advanced AI-driven health tracking tools allow you to monitor your fitness, diet, and overall well-being. Get insights
                        based on your habits and receive personalized recommendations to improve your health journey.
                     </p>
                  </div>
               </div>

               <div className="item-card rounded-3">
                  <img className="serviceImg" src={require("../../assets/img/service3.jpg")} alt="service-img" />
                  <div className="item-card-content">
                     <h6>3. Verified Health Resources</h6>
                     <p>
                        Stay updated with the latest medical research, wellness trends, and expert articles. Our platform ensures that all content is
                        backed by science, providing you with trustworthy health information to make informed decisions.
                     </p>
                  </div>
               </div>
            </div>

            <div className="item-right">
               <div className="item-card rounded-3">
                  <img className="serviceImg" src={require("../../assets/img/service4.jpg")} alt="service-img" />
                  <div className="item-card-content">
                     <h6>4. Community Support & Forums</h6>
                     <p>
                        Join a vibrant community where you can connect with like-minded individuals, share experiences, and get support on your health
                        journey. Participate in discussions with healthcare professionals and wellness enthusiasts to stay motivated and informed.
                     </p>
                  </div>
               </div>

               <div className="item-card rounded-3">
                  <img className="serviceImg" src={require("../../assets/img/service5.jpg")} alt="service-img" />
                  <div className="item-card-content">
                     <h6>5. Virtual Wellness Workshops</h6>
                     <p>
                        Learn from top health experts through our interactive virtual workshops. Topics include nutrition, mental health, fitness
                        routines, and holistic wellness, providing valuable insights to improve your daily well-being.
                     </p>
                  </div>
               </div>

               <div className="item-card rounded-3">
                  <img className="serviceImg" src={require("../../assets/img/service1.jpg")} alt="service-img" />
                  <div className="item-card-content">
                     <h6>6. 24/7 Health Assistance</h6>
                     <p>
                        Access round-the-clock health assistance for emergencies, mental health support, and medical guidance. Our network of
                        professionals is always available to help you navigate any health concerns with confidence.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default index;
