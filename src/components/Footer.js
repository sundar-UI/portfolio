import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
        <footer>
            <div className="container">
                <div className="flex">
                    <div className="left flex">
                        <div className="logo">
                            <a href="#">
                                <img src="./images/logo_3.png" alt="logo" />
                            </a>
                        </div>
                    </div>
                    <div className="right">
                        <p>&copy; 2023 React Js website</p>
                    </div>
                </div>
            </div>
            <a href="#" className="go_top"><img src="./images/arrow-up-solid.svg" alt="arrow"/></a>
        </footer>
    )
  }
}

export default Footer
