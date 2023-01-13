import React, { Component } from 'react'

 class Education extends Component {
  render() {
    return (
      <section className = "Education">
          <img className="act_bg" src="../images/education_bg.jpg" />
          <div className="container">
              <div className="row">
                  <div className="col-lg-6 col-md-12 ed_block" data-aos="fade-right" data-aos-duration = "2000">
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
                  <div className="col-lg-6 col-md-12 experience" data-aos="fade-down" data-aos-duration = "2000">
                      <p>Experience</p>
                      <div>
                          <p>Bugtreat Technologies<span>March 2021 - Present</span></p>
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
