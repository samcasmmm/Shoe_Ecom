import React from "react";
import img from "../imageHome/cr_img1.png";

const ContactInfo = () => {
  return (
    <div className="customBG">
      
    <div className="contactInfo container">
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5>Call Us 24x7</h5>
            <p>9823826356</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5>Headquarter</h5>
            <p>NMITDS Dadar</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-envelope"></i>
            </div>
            <h5>Email</h5>
            <p>sameerbagwanwork@gmail.com</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
