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
                                <img src="./images/logo.png" alt="logo" />
                            </a>
                        </div>
                    </div>
                    <div className="right">
                        <p>&copy; 2023 Company name. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
  }
}

export default Footer
