import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import image1 from "./imageHome/s2.png";
import cr_img1 from "./imageHome/cr_img10.png";
import cr_img2 from "./imageHome/cr_img9.png";
import cr_img3 from "./imageHome/cr_img8.png";
import cd_img1 from "./imageHome/card_img.png";
import cd_img2 from "./imageHome/iceshoe.jpg";
import cd_img3 from "./imageHome/s1.png";
import cardimg1 from "./imageHome/cardimg1.jpg";
import cardimg2 from "./imageHome/s3.png";

const MainHome = () => {
  return (
    <>
      <div className="Announcement Announcement2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center display-none">
              <Link to="/">Home</Link>
              <Link to="/allproducts">Products</Link>
              <Link to="/aboutUs">AboutUs</Link>
            </div>
            <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
              <Link to="/login">Login</Link>
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
          style={{ width: "100%", height: "50rem", filter: "brightness(80%)" }}
        >
          <div className="carousel-item active">
            <img src={cr_img1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={cr_img2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={cr_img3} className="d-block w-100 " alt="..." />
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
        <h4>
          <span>Upcoming </span> Products?
        </h4>
        <p>
        Welcome to ShoeShop complete calendar for new and upcoming sneaker releases from some of the most popular brands, including: Jordan Brand, Nike, New Balance, adidas, Vans, Converse, ASICS and Reebok.
        </p>
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
                src={cd_img3}
                alt="Card cap"
              />
              <div className="card-body">
                <center>
                  <h5 className="card-title">Woodland Casual Shoes For Men </h5>
                  <p className="card-text">
                  Get a dressedtokill and aristocratic look with these pair of Woodland shoes. These pair of brown shoes is match to your favored denim.
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
                src={cardimg2}
                alt="Card  cap"
              />
              <div className="card-body">
                <center>
                  <h5 className="card-title">Nike Air Zoom Infinity Tour</h5>
                  <p className="card-text">We increased the volume to give your foot more room, 
                  put an unit in forefoot for more energy transfer through your 
                  swing.comfortable shoe that we know you're going to love.
                  </p>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* infoCard */}

      <div className="container mt-5 mb-5" style={{ marginTop: "-3rem" }}>
        <div className="row ">
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12  " style={{}}>
            <div
              className="card center right "
              style={{ width: "20rem", marginTop: "2rem" }}
            >
              <img
                className="card-img-top zoom2 "
                src={cd_img2}
                alt="Card cap"
              />
              <div className="card-body">
                <center>
                  <h5 className="card-title">Big Fox Classic Boot Shoes</h5>
                  <p className="card-text">
                    Triumph every path of your journey with astonishingly
                    beautiful and impeccably robust Big Fox men's Boots! The Big
                    Fox Boots are Specifically designed and engineered to
                    deliver high performance; at the same time, Big Fox does not
                    compromise with the Style.
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
                src={cardimg1}
                alt="Card cap"
              />
              <div className="card-body">
                <center>
                  <h5 className="card-title">Running Spikes Strider 2.0</h5>
                  <p className="card-text">
                    Mesh upper with tpu film for breathability and lightweight
                    comfort. Eva sockliner comforms to the shape of your foot
                    for comfort and support Tpu plate with removable spikes
                    receptacles for maximum power.Rubber through the heel
                    with a pyramid shaped traction pattern.
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
                  <h5 className="card-title">Nike LunarGlide</h5>
                  <p className="card-text">
                  The shoe whose namesake cushioning was inspired by astronauts 
                  bounding weightlessly on the moon is more stable than ever. 
                  With lightweight Nike Lunarlon cushioning, enhanced stability, 
                  support and style, the shoe delivers a plush, responsive ride that runners love. 
                  </p>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer/>
    </>
  );
};

export default MainHome;
