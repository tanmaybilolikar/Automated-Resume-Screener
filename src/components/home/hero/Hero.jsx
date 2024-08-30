import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO RESUME ANALYZER' title='Enhance Your Career with Expert Resume Analysis' />
            <p>Unlock your potential with personalized resume feedback that helps you stand out in a competitive job market.</p>
            <div className='button'>
              <button className='primary-btn'>
                ANALYZE MY RESUME <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                LEARN MORE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  );
}

export default Hero;
