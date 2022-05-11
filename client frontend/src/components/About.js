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
                About US
              </Link>
            </div>
            <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
              <Link to="/Login">Login</Link>
              <Link to="/Register">SignUp</Link>
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
