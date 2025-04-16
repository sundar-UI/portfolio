import React, { Component } from 'react'
import background from '../bg-images/education_bg.jpg'


class Education extends Component {
  render() {
    return (
      <section className="Education" style={{ backgroundImage: `url(${background})` }} >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 ed_block" data-aos="fade-right" data-aos-duration="2000">
              <p>Education</p>
              <div>
                <p>SSLC</p>
                <span>Mangayarkarsi Higher secondry school, Madurai</span>
                <div className="progress blue">
                  <span className="progress-left">
                    <span className="progress-bar"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar"></span>
                  </span>
                  <div className="progress-value">93.8%</div>
                </div>
              </div>
              <div>
                <p>HSC</p>
                <span>Mangayarkarsi Higher secondry school, Madurai</span>
                <div className="progress yellow">
                  <span className="progress-left">
                    <span className="progress-bar"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar"></span>
                  </span>
                  <div className="progress-value">86.8%</div>
                </div>
              </div>
              <div>
                <p>Bsc(cs)</p>
                <span>The American college, Madurai</span>
                <div className="progress green">
                  <span className="progress-left">
                    <span className="progress-bar"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar"></span>
                  </span>
                  <div className="progress-value">64.7%</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 experience" data-aos="fade-down" data-aos-duration="2000">
              <p>Experience</p>
              <div style={{marginBottom:"30px"}}>
                <p>Innblockchain Pvt Ltd<span>Apr 2023 - Present</span></p>
                <p>React Developer</p>
                <span>I Worked on React Blockchain Projects like NFT Marketplace(Rarible Clone) and Defi
                  (pancake swap clone) for maintaining and other feature works</span>
                <span>Also Serviced for React Service projects like ecommerce websites and products like (olx
                  clone, airbnb clone).</span>
                <span>And also designed for a company landing page</span>
              </div>
              <div>
                <p>Bugtreat Technologies<span>March 2021 - Apr 2023</span></p>
                <p>UI Developer</p>
                <span>I will be responsible for website developement and will taking care of maintenance of the Hosted website</span>
                <span>and responsible for cs-cart(E-commerce) website making and maintenance</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Education
