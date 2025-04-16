import React, { Component } from 'react'
import BannerImg from "../assets/images/banner.svg"

export class Banner extends Component {
  render() {
    return (
        <section className="banner">
            <div className="flex">
                <div className="banner_text" data-aos="fade-up" data-aos-duration="2000">
                    <div className="content">
                        <h1>Hi,<span>i am Sundar</span>React Developer</h1>
                        <a href="https://drive.google.com/file/d/1va8G0H2Qan1vytZl-WKMJ03LZ8lFjpOC/view?usp=drive_link" target ="_blank"  rel="noopener noreferrer"  className="plan">Download Resume</a>
                    </div>
                </div>
                <div className="banner_img" data-aos="zoom-in" data-aos-duration="3000">
                    <img src={BannerImg} alt="banner" />
                </div>
            </div>
        </section>
    )
  }
}

export default Banner
