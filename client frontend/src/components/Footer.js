import React from "react";
import nike from "./imageHome/nike.png"
import adidas from "./imageHome/adid.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="justify-content-center d-flex">
        <div className="card-name">
          <img
            alt="paypal"
            src="https://pbs.twimg.com/media/EfTZlEnWAAMn1lX.png"
          />
        </div>
        <div className="card-name">
            <img
              alt="Nike"
              src={nike}
            />
          </div>
        <div className="card-name">
            <img
              alt="Nike"
              src={adidas}
            />
          </div>
      </div>
    </div>
  );
};

export default Footer;
