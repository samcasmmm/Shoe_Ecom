import React from "react";
import { Link } from "react-router-dom";
import image1 from "./imageHome/2.png";
import cr_img1 from "./imageHome/cr_img1.png";
import cr_img2 from "./imageHome/cr_img9.png";
import cr_img3 from "./imageHome/cr_img8.png";
import cd_img1 from "./imageHome/card_img.png";
import cd_img2 from "./imageHome/cd_img2.png";

const MainHome = () => {
  return (
    <>
      <div className="Announcement Announcement2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center display-none">
              <Link to="/">
                Home
              </Link>
              <Link to="/allproducts">
                Products
              </Link>
              <Link to="/aboutUs">
                AboutUs
              </Link>
            </div>
            <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
              <Link to="/Login">Login</Link>
              <Link to="/Register">SignUp</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div
          className="carousel-inner"
          style={{ width: "100%", height: "60rem",filter: "brightness(30%)" }}
        >
          <div className="carousel-item active">
            <img src={cr_img1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={cr_img2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={cr_img3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Cards */}

      
      <div className="section-head col-sm-12 mt-5 mb-2">
          <h4><span>Looking for new</span>Products?</h4>
          <p>When you choose us, you'll feel the benefit of 10 years' experience of Web Development. Because we know the digital world and we know that how to handle it. With working knowledge of online, SEO and social media.</p>
        </div>

      <div className="container mt-5 mb-5" style={{ marginTop: "-3rem" }}>
        <div className="row ">
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12  " style={{}}>
            <div
              className="card center right "
              style={{ width: "20rem", marginTop: "2rem" }}
            >
              <img
                className="card-img-top zoom2 "
                src={image1}
                alt="Card cap"
              />
              <div className="card-body">
                <center>
                  <h5 className="card-title">HOUSE MAID SERVICES</h5>
                  <p className="card-text">
                    We provide maids that work either part-time or full time and
                    who are responsible for the cleanliness and maintenance of
                    an area in a workplace or a house.
                  </p>
                </center>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div
              className="card center"
              style={{ width: "20rem", marginTop: "2rem" }}
            >
              <img
                className="card-img-top  zoom2"
                src={cd_img2}
                alt="Card cap"
              />
              <div className="card-body">
                <center>
                  <h5 className="card-title">BABY SITTER</h5>
                  <p className="card-text">
                   Process of hiring a caretaker for your baby can be
                    stressful and a lot of things have to be taken into
                    consideration. We understand this complex process and aspire
                    to make
                  </p>
                </center>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div
              className="card center left  "
              style={{ width: "20rem", marginTop: "2rem" }}
            >
              <img
                className="card-img-top zoom2"
                src={cd_img1}
                alt="Card  cap"
              />
              <div className="card-body">
                <center>
                  <h5 className="card-title">COOK</h5>
                  <p className="card-text">
                    Every meal you eat should be nutritious, fresh, and
                    well-cooked. Food is the most important part of our lives as
                    our physical health, mental health, and our daily stamina
                    depends on it.
                  </p>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* info */}

      <div className="feat bg-gray pt-5 pb-5">
    <div className="container">
      <div className="row">
        <div className="section-head col-sm-12">
          <h4><span>Why Choose</span> Us?</h4>
          <p>When you choose us, you'll feel the benefit of 10 years' experience of Web Development. Because we know the digital world and we know that how to handle it. With working knowledge of online, SEO and social media.</p>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="item"> <span className="icon feature_box_col_one"><i className="fa fa-globe"></i></span>
            <h6>Modern Design</h6>
            <p>We use latest technology for the latest world because we know the demand of peoples.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="item"> <span className="icon feature_box_col_two"><i className="fa fa-anchor"></i></span>
            <h6>Creative Design</h6>
            <p>creative and and always lisen our costomers and we mix these two things and make beast design.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="item"> <span className="icon feature_box_col_three"><i className="fa fa-hourglass-half"></i></span>
            <h6>24 x 7 User Support</h6>
            <p>If our customer has any problem and any query we are always happy to help then.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

      {/* footer */}

      <div className="footer">
        <div className="justify-content-center d-flex">
          <div className="card-name">
            <img
              alt="paypal"
              src="https://pbs.twimg.com/media/EfTZlEnWAAMn1lX.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHome;
