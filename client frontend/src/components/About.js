import React from 'react'
import { Link } from "react-router-dom";
import Footer from './Footer';

const About = () => {
  return (
    <>
{/* Header */}

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
      {/* Main About Us */}

      <div className="feat bg-gray pt-5 pb-5">
    <div className="container">
      <div className="row">
        <div className="section-head col-sm-12">
          <h4><span>Why Choose</span> Us?</h4>
          <p>When you choose us, you'll feel the benefit of 10 years' experience of Web Development. Because we know the digital world and we know that how to handle it. With working knowledge of online, SEO and social media.</p>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="item"> <span className="icon feature_box_col_one"><i className="fa fa-shoe-prints"></i></span>
            <h6>An Investment In Footwear</h6>
            <p>When making an investment in a pair of shoes, this is a valid question to ask yourself particularly when you are surrounded by an incredible amount of footwear options to choose from. The answer lies in our unwavering passion for footwear</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="item"> <span className="icon feature_box_col_two"><i className="fa fa-exclamation-triangle"></i></span>
            <h6>Attention To Detail</h6>
            <p>
            We do so by controlling every facet of the shoemaking process from sourcing of leather, to the closing (sewing of the upper), the lasting, down to finishing of the shoe. We monitor each step with careful attention to ensure that quality.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="item"> <span className="icon feature_box_col_three"><i className="fa fa-spinner"></i></span>
            <h6>Our Process</h6>
            <p>To create our collection we took the base of a bespoke last that was created by Mr. Tony Gaziano of Gaziano & Girling (in our opinion one of the best last makers in the world). We then refined all of our lasts on the fit of that original one.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="item"> <span className="icon feature_box_col_one"><i className="fa fa-building"></i></span>
          <h6>Headquarter</h6>
          <p>NMITDS Dadar</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="item"> <span className="icon feature_box_col_two"><i className="fa fa-phone" style={{transform:" scaleX(-1)"}}></i></span>
            <h6>Call Us 24x7</h6>
            <p>9823826356</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="item"> <span className="icon feature_box_col_three"><i className="fa fa-envelope"></i></span>
          <h6>Email</h6>
          <p>sameerbagwanwork@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>


      {/* footer */}
      <Footer/>
      
    </>

    
  )
}

export default About
