import React, { Component } from 'react'
import Logo from '../assets/images/logo_3.png'
import Arrow from '../assets/images/arrow-up-solid.svg'

class Footer extends Component {
  render() {
    return (
        <footer>
            <div className="container">
                <div className="flex">
                    <div className="left flex">
                        <div className="logo">
                            <a href="/">
                                <img src={Logo} alt="logo" />
                            </a>
                        </div>
                    </div>
                    <div className="right">
                        <p>&copy; 2023 React Js website</p>
                    </div>
                </div>
            </div>
            <a href="#" className="go_top"><img src={Arrow} alt="arrow"/></a>
        </footer>
    )
  }
}

export default Footer
