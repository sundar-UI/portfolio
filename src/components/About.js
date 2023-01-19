import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

 class About extends Component {
  render() {
    return (
      <section className = "about_me" id= "about_d">
           <div className="container">
               <p className="ab_head" data-aos="slide-down">About me</p>
               <div className="row">
                    <div className="col-lg-6 col-md-12 image">
                       {/* <img src="./images/about_img1.jpg" alt="blog" /> */}
                       <p>Name : <span>Sundareswarar N</span></p>
                       <p>Date-of-birth : <span>22/10/2000</span></p>
                       <p>Address : <span>Madurai, TamilNadu</span></p>
                       <p>E-mail : <a href = "mailto: sundar.n8525@gmail.com">sundar.n8525@gmail.com</a></p>
                       <p>phone : <a href="tel:+91-8525038343">+91-8525038343</a></p>
                    </div>
                    <div className= "col-lg-6 col-md-12 details" data-aos="fade-left" data-aos-duration="1000">
                        <p>Career objective</p>
                        <span>1.10years Experience in user interface designing, Experience in code standards. Team player with effective communication and interpersonal skills, Willingto work as a key player in challenging & creative environment</span>
                        <p>Professional summary</p>
                        <ul>
                            <li>Developed th front-end webpage by using HTML, CSS, JAVASCRIPT</li>
                            <li>Use Responsive web design templates to meet cut edge technology requirements</li>
                            <li>Implemented page optimization techniques for web pages</li>
                        </ul>
                    </div>
                </div>
           </div>
      </section>
    )
  }
}

export default About
