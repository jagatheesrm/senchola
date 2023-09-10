import {
  faEnvelopeOpenText,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Footer from "../Footer";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="container-main">
        <div
          className="contact-container">
          <div className="container-left" >
            <div className="title">
              <h1>CONTACT FORM</h1>
              <h3>Get in Touch</h3>
              <p>Enter your message to reach out</p>
            </div>

            <div className="contact-form">
              <form>
                <div>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Enter your name" />
                </div>
                <div>
                  <label htmlFor="email">Email Address<span className="asterisk">*</span></label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone">Phone Number<span className="asterisk">*</span></label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your number"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="comment">Comment or Message</label>
                  <textarea id="comment" rows="4" placeholder="Enter your comment" />
                </div>
                <button type="submit">Send</button>
              </form>
              <div className="contact-info">
                <div className="items">
                  <div className="fa-icon">
                    <FontAwesomeIcon icon={faPhoneVolume} />
                  </div>
                  <div className="info-item">
                    <h4>PHONE</h4>
                    <span className="tex-col">+91 7358972073</span></div>
                </div>

                <div className="items">

                  <div className="fa-icon">
                    <FontAwesomeIcon icon={faEnvelopeOpenText} />
                  </div>
                  <div className="info-item">
                    <h4>EMAIL</h4>
                    <span className="tex-col">info@gmail.com</span>
                  </div>
                </div>

                <div className="items">

                  <div className="fa-icon">
                    <FontAwesomeIcon icon={faLocationDot} />

                  </div>
                  <div className="info-item" >
                    <h4>ADDRESS</h4>
                    <span className="tex-col">
                      The Estate, 8th Floor, Dickenson Road, Bangalore - 560042
                    </span></div>

                </div>

              </div>
            </div>
          </div>
          <div className="container-right" >
            <div className="green-background"></div>
            <iframe
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=thottiyapatti,periyr&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="map"
              className="contact-map"></iframe>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
