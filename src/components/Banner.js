import React, { Component } from 'react'

export class Banner extends Component {
  render() {
    return (
        <section className="banner">
            <div className="flex">
                <div className="banner_text" data-aos="fade-up" data-aos-duration="2000">
                    <div className="content">
                        <h1>Hi,<span>i am Sundar</span>React Developer</h1>
                        <a href="https://drive.google.com/file/d/1sa7kgGgLViN--vVZk_1oUVXbeyZe5X2s/view?usp=sharing" target ="_blank" className="plan">Download Resume</a>
                    </div>
                </div>
                <div className="banner_img" data-aos="zoom-in" data-aos-duration="3000">
                    <img src="./images/banner.svg" alt="banner" />
                </div>
            </div>
        </section>
    )
  }
}

export default Banner
