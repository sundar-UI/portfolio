import React, { Component } from 'react'
 class Blogs extends Component {
  render() {
    return (
        <section className="blogs">
            <div className="container">
                <h6>BLOG</h6>
                <h1>Explore Marketing Tips</h1>
                <div className="blog_slider" id = "scroll_d">
                    <div className="item">
                        <a href="#">
                            <div className="img">
                                <img src="./images/blog1.png" alt="blog" />
                                <div className="author flex">
                                    <div className="_img">
                                        <img src="./images/author1.png" alt="author" />
                                    </div>
                                    <div className="_text">
                                        <h3>John Doe</h3>
                                        <p>Head of Marketing</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text">
                                <h2>Tips for a good Pitching Presentation</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                            </div>
                        </a>
                    </div>
                    <div className="item">
                        <a href="#">
                            <div className="img">
                                <img src="./images/blog2.png" alt="blog" />
                                <div className="author flex">
                                    <div className="_img">
                                        <img src="./images/author2.png" alt="author" />
                                    </div>
                                    <div className="_text">
                                        <h3>Jane Maria</h3>
                                        <p>Designer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text">
                                <h2>Improve Your Content’s Traffic</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                            </div>
                        </a>
                    </div>
                    <div className="item">
                        <a href="#">
                            <div className="img">
                                <img src="./images/blog3.png" alt="blog" />
                                <div className="author flex">
                                    <div className="_img">
                                        <img src="./images/author3.png" alt="author" />
                                    </div>
                                    <div className="_text">
                                        <h3>Jack Dorsey</h3>
                                        <p>Marketing Specialist</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text">
                                <h2>Reaching Deal with your Clients</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}

export default Blogs
