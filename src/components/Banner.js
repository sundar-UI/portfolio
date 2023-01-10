import React, { Component } from 'react'

export class Banner extends Component {
  render() {
    return (
        <section className="banner">
            <div className="flex">
                <div className="banner_text">
                    <div className="content">
                        <h1>We take care <span>Marketing</span> things</h1>
                        <a href="#" className="plan">Pick a Plan</a>
                    </div>
                </div>
                <div className="banner_img">
                    <img src="./images/banner.svg" alt="banner" />
                </div>
            </div>
        </section>
    )
  }
}

export default Banner
