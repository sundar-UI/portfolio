import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

class About extends Component {
  render() {
    return (
      <section className="about_me" id="about_d">
        <div className="container">
          <p className="ab_head" data-aos="slide-down">About me</p>
          <div className="row">
            <div className="col-lg-6 col-md-12 image">
              {/* <img src="./images/about_img1.jpg" alt="blog" /> */}
              <p>Name : <span>Sundareswarar N</span></p>
              <p>Date-of-birth : <span>22/10/2000</span></p>
              <p>Address : <span>Madurai, TamilNadu</span></p>
              <p>E-mail : <a href="mailto: sundar.n8525@gmail.com">sundar.n8525@gmail.com</a></p>
              <p>phone : <a href="tel:+91-8525038343">+91-8525038343</a></p>
            </div>
            <div className="col-lg-6 col-md-12 details" data-aos="fade-left" data-aos-duration="1000">
              <p>Summary</p>
              <span>Energetic and creative web developer with 4 years of overall experience and 2 years of React JS
                experience, creating and maintaining functional, appealing, and responsive websites for a wide
                range of clients, clear understanding of modern technologies and best design and development
                practices.</span>
              {/* <p>Professional summary</p> */}
              {/* <ul>
                <li>Developed the front-end webpage by using HTML, CSS, JAVASCRIPT</li>
                <li>Use Responsive web design templates to meet cut edge technology requirements</li>
                <li>Implemented page optimization techniques for web pages</li>
                <li> Provide UI Support for ZodeakNFT (Rarible Clone) and Maintained the product in React js as
                a part of blockchain project Refer. url : https://zodeaknft.zodeak-dev.com/</li>
                <li>Also Provide UI and Functionality Support for Innswap (Pancake swap Clone) from the
                scratch and then continued to work on other features and Maintained the product in React js
                as a part of blockchain project Refer. url : https://innswap_react.zodeak-dev.com/</li>
                <li>Implemented page optimization techniques for web pages for best performence
                Technologies Used</li>
              </ul> */}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
