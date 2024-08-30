import React from "react";
import { blog } from "../../../dummydata";
import "./footer.css";

const Footer = () => {
  return (
    <>
    
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>Resume Analyzer</h1>
            <span>Your Career, Our Expertise</span>
            <p>Enhance your career prospects with expert resume analysis and personalized feedback.</p>

            <i className='fab fa-linkedin icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
\              <li>Testimonials</li>
\              <li>Contact Us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
\              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Feedback</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Posts</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB' key={val.id}>
                <div className='img'>
                  <img src={val.cover} alt={val.title} />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Have a Question?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                Pune 
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +91 123 456 7890
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                support@resumeanalyzer.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Final Year Project - Resume Analyzer
        </p>
      </div>
    </>
  );
}

export default Footer;
