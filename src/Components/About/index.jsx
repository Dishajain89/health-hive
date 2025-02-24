import React from "react";
import { FaUserMd, FaHandshake } from "react-icons/fa";

import "./style.css";

function Index() {
   return (
      <>
      <div className="about_mid">
               <div className="about_mid_left">
                  <img src={require("../../assets/img/aboutUs.jpg")} alt="about-img" />
               </div>
               <div className="about_mid_right">
                  <h2>About Us</h2>
                  <p>
                     Welcome to HealthHive, your trusted hub for health and wellness insights. We are committed to creating a vibrant community where
                     healthcare professionals, wellness enthusiasts, and individuals seeking credible medical information can come together. Our
                     platform provides expert health advice, interactive tools, and a support system that empowers users to make informed health
                     decisions. Whether you're looking for the latest medical research, connecting with professionals, or tracking your wellness
                     journey, HealthHive is here to support your health every step of the way.
                  </p>

                  <div className="mid_right">
                     <div className="mid_right_left">
                        <FaUserMd className="mid_icon" />
                        <h4>Our Mission</h4>
                        <p>
                           At HealthHive, our mission is to make reliable healthcare information accessible to all. We bridge the gap between medical
                           experts and individuals by offering up-to-date, research-backed content, expert consultations, and an active
                           health-conscious community. Our goal is to empower people with knowledge that enhances their well-being and lifestyle.
                        </p>
                     </div>
                     <div className="mid_right_left">
                        <FaHandshake className="mid_icon" />
                        <h4>Our Commitment</h4>
                        <p>
                           HealthHive is dedicated to fostering a trustworthy and engaging space for medical discussions and wellness insights. We
                           ensure that every piece of content is verified and every interaction adds value to the community. Your health is our
                           priority, and we strive to provide you with the resources you need to make informed choices.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         <div className="about" id="about">
            <h1>Why choose Health Hive?</h1>

            <div className="about_top">
               <div className="about_top_box">
                  <div>
                     <img className="aboutImg" src={require("../../assets/img/img5.jpg")} alt="aboutImg" />
                     <h3 className="heading_3">Expert Insights & Articles</h3>
                     <p className="para">
                        Stay informed with the latest healthcare trends, expert opinions, and in-depth medical research. HealthHive provides a
                        platform where professionals and enthusiasts can access high-quality content to enhance their knowledge and well-being.
                     </p>
                  </div>
               </div>
               <div className="about_top_box">
                  <div>
                     <img className="aboutImg" src={require("../../assets/img/img3.jpg")} alt="aboutImg" />
                     <h3 className="heading_3">Community Support</h3>
                     <p className="para">
                        Join a thriving community of health-conscious individuals and professionals. Engage in meaningful discussions, share
                        experiences, and seek support from like-minded people who understand your journey.
                     </p>
                  </div>
               </div>
               <div className="about_top_box">
                  <div>
                     <img className="aboutImg" src={require("../../assets/img/img1.jpg")} alt="aboutImg" />
                     <h3 className="heading_3">Trusted Health Resources</h3>
                     <p className="para">
                        Access a wide range of verified health and wellness resources. From disease prevention to fitness and mental health,
                        HealthHive ensures you have credible information at your fingertips.
                     </p>
                  </div>
               </div>
               <div className="about_top_box">
                  <div>
                     <img className="aboutImg" src={require("../../assets/img/img4.jpg")} alt="aboutImg" />
                     <h3 className="heading_3">Doctor and Specialist Directory</h3>
                     <p className="para">
                        Easily find and connect with trusted doctors, specialists, and healthcare providers. Our directory helps you make informed
                        decisions about your health by offering detailed profiles and patient reviews.
                     </p>
                  </div>
               </div>
               <div className="about_top_box">
                  <div>
                     <img className="aboutImg" src={require("../../assets/img/img2.jpg")} alt="aboutImg" />
                     <h3 className="heading_3">Health Tracking & Tools</h3>
                     <p className="para">
                        Monitor your well-being with interactive tools designed to track symptoms, analyze health patterns, and set personalized
                        wellness goals. HealthHive empowers you to take control of your health with data-driven insights.
                     </p>
                  </div>
               </div>
               <div className="about_top_box">
                  <div>
                     <img className="aboutImg" src={require("../../assets/img/img6.jpg")} alt="aboutImg" />
                     <h3 className="heading_3">Secure and Reliable Platform</h3>
                     <p className="para">
                        Your privacy is our priority. HealthHive ensures that all your health-related discussions, searches, and personal data are
                        handled securely, providing a trusted space for learning and sharing.
                     </p>
                  </div>
               </div>
            </div>

         </div>
            

         {/* <div className="bottom">
            <div className="bottom_box iconT">
               <img className="countImg" src={require("../../assets/img/pic.png")} alt="aboutImg" />
               <h2>
                  <CountUP end={4} duration={6} />
               </h2>

               <h6>Years of experience</h6>
            </div>
            <div className="bottom_box iconT">
               <img className="countImg" src={require("../../assets/img/count2.png")} alt="aboutImg" />
               <h2>
                  <CountUP end={21075} duration={5} />
               </h2>
               <h6>Registered Doctors</h6>
            </div>
            <div className="bottom_box">
               <img className="countImg" src={require("../../assets/img/count3.png")} alt="aboutImg" />
               <h2>
                  <CountUP end={255} duration={5} />
               </h2>
               <h6>Panel of Lawyers</h6>
            </div>
            <div className="bottom_box">
               <img className="countImg" src={require("../../assets/img/count3.png")} alt="aboutImg" />
               <h2>
                  <CountUP end={583} duration={5} />
               </h2>
               <h6>Successfully Cases Handled</h6>
            </div>
         </div> */}
      </>
   );
}

export default Index;
