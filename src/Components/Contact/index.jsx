import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaMobileAlt } from "react-icons/fa";

import "./style.css";

function index() {
  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>

      <div className="contact_top">
        <div className="location">
          <FaMapMarkerAlt className="contact-icon" />
          <div>
            <h4>Location:</h4>
            <p className="conatct_p">
              A108 Adam street <br /> New York,NY 535022
            </p>
          </div>
        </div>

        <div className="location">
          <FaEnvelope className="contact-icon" />
          <div>
            <h4>Email:</h4>
            <p className="conatct_p">
              info@example.com <br /> contact@example.com
            </p>
          </div>
        </div>

        <div className="location3">
          <FaMobileAlt className="contact-icon" />
          <div>
            <h4>Call:</h4>
            <p className="conatct_p">
              +1 5894 34783 81 <br /> +1 5894 34783 81
            </p>
          </div>
        </div>
      </div>

      {/* <div className="contact_form">
        <form className="row g-3">
          <div className="col-md-6 mb-3">
            <input
              type="text"
              placeholder="Your Name"
              className="form-control"
              id="inputEmail4"
            />
          </div>
          <div className="col-md-6">
            <input
              type="email"
              placeholder="Your Email"
              className="form-control"
              id="inputPassword4"
            />
          </div>
          <div className="col-12 mb-3">
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Subject"
            />
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="Message"
              id="floatingTextarea2"
              style={{ height: "100px" }}
            ></textarea>
            <label for="floatingTextarea2">Message</label>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-send">
              Send Message
            </button>
          </div>
        </form>
      </div> */}

    </div>
  );
}

export default index;
