import React, { Component } from 'react'
import Img1 from '../assets/images/kitchen_img1.png'
import Img2 from '../assets/images/blog_img3.png'
import Img3 from '../assets/images/dana-img1.png'
import Img4 from '../assets/images/about_img3.png'
import Img5 from '../assets/images/ln_img2.png'
import Img6 from '../assets/images/blog_img1.png'
import Img7 from '../assets/images/gadgets.jpg'
import Img8 from '../assets/images/baby_img2.png'
import Img9 from '../assets/images/defi.webp'
import Img10 from '../assets/images/nft.jpeg'


class Blogs extends Component {
    render() {
        return (
            <section className="blogs" id="scroll_d">
                <div className="container">
                    <h6 data-aos="slide-down">My Works</h6>
                    <h1 data-aos="slide-up">It contains wordpress, codeigniter and cs-cart websites</h1>
                    <div className="blog_slider" data-aos="fade-in" data-aos-duration="3000">
                        <div className="item" data-aos="fade-up">
                            <a href="https://innswap_react.zodeak-dev.com/" target="_blank" rel="noopener noreferrer">
                                <div className="img" data-aos="zoom-in-up" data-aos-duration="1000">
                                    <img src={Img9} alt="blog" />
                                </div>
                                <div className="text" data-aos="slide-up" data-aos-duration="2000">
                                    <h2>Innswap</h2>
                                    <p>It is a Blockchain Defi Product like Uniswap and pancakeswap clone </p>
                                </div>
                            </a>
                        </div>
                        <div className="item" data-aos="fade-up">
                            <a href="https://zodeaknft.zodeak-dev.com/" target="_blank" rel="noopener noreferrer">
                                <div className="img" data-aos="zoom-in-up" data-aos-duration="1000">
                                    <img src={Img10} alt="blog" />
                                </div>
                                <div className="text" data-aos="slide-up" data-aos-duration="2000">
                                    <h2>Zodeak Nft</h2>
                                    <p>It is a Blockchain NFT Marketplace product like Rarible clone</p>
                                </div>
                            </a>
                        </div>
                        <div className="item" data-aos="fade-up">
                            <a href="https://groeneveld.ibmhub.nl/" target="_blank" rel="noopener noreferrer">
                                <div className="img" data-aos="zoom-in-up" data-aos-duration="1000">
                                    <img src={Img1} alt="blog" />
                                </div>
                                <div className="text" data-aos="slide-up" data-aos-duration="2000">
                                    <h2>Groeneveld</h2>
                                    <p>It is a Wordpress website for kitchen appliances and other segments </p>
                                </div>
                            </a>
                        </div>
                        <div className="item" data-aos="fade-up">
                            <a href="https://solar.ibmhub.nl/" target="_blank" rel="noopener noreferrer">
                                <div className="img" data-aos="zoom-in-up" data-aos-duration="1000">
                                    <img src={Img2} alt="blog" />
                                </div>
                                <div className="text" data-aos="slide-up" data-aos-duration="2000">
                                    <h2>Solar for all</h2>
                                    <p>It is a codeigniter website for solar panels and electricals items</p>
                                </div>
                            </a>
                        </div>
                        <div className="item" data-aos="fade-up">
                            <a href="https://danalewu.com/" target="_blank" rel="noopener noreferrer">
                                <div className="img" data-aos="zoom-in-up" data-aos-duration="1000">
                                    <img src={Img3} alt="blog" />
                                </div>
                                <div className="text" data-aos="slide-up" data-aos-duration="2000">
                                    <h2>Dana Lewu</h2>
                                    <p>It is a wordpress website for booking musci concerts</p>
                                </div>
                            </a>
                        </div>
                        <div className="item" data-aos="fade-up">
                            <a href="https://bugtreat.org/foodzat/" target="_blank" rel="noopener noreferrer">
                                <div className="img" data-aos="zoom-in-up" data-aos-duration="1000">
                                    <img src={Img4} alt="blog" />
                                </div>
                                <div className="text" data-aos="slide-up" data-aos-duration="2000">
                                    <h2>Foodzat</h2>
                                    <p>It is a codeigniter product based website its under developement process</p>
                                </div>
                            </a>
                        </div>
                        <div className="item" data-aos="fade-up">
                            <a href="https://bugtreat.org/foodorder/" target="_blank" rel="noopener noreferrer">
                                <div className="img" data-aos="zoom-in-up" data-aos-duration="1000">
                                    <img src={Img5} alt="blog" />
                                </div>
                                <div className="text" data-aos="slide-up" data-aos-duration="2000">
                                    <h2>Foodbeez</h2>
                                    <p>It is a codeigniter product based website its under developement process</p>
                                </div>
                            </a>
                        </div>
                        <div className="item" data-aos="fade-up">
                            <a href="https://www.xeltek.com/" target="_blank" rel="noopener noreferrer">
                                <div className="img" data-aos="zoom-in-up" data-aos-duration="1000">
                                    <img src={Img6} alt="blog" />
                                </div>
                                <div className="text" data-aos="slide-up" data-aos-duration="2000">
                                    <h2>Xeltek</h2>
                                    <p>It is a CS-CART Website for Automation and Iot machine product</p>
                                </div>
                            </a>
                        </div>
                        <div className="item" data-aos="fade-up">
                            <a href="https://powerjungle.net/" target="_blank" rel="noopener noreferrer">
                                <div className="img" data-aos="zoom-in-up" data-aos-duration="1000">
                                    <img src={Img7} alt="blog" />
                                </div>
                                <div className="text" data-aos="slide-up" data-aos-duration="2000">
                                    <h2>Powerjungle</h2>
                                    <p>It is a CS-CART Website for All product like flipkart and amazon</p>
                                </div>
                            </a>
                        </div>
                        <div className="item" data-aos="fade-up">
                            <a href="https://test.yobler.com/" target="_blank" rel="noopener noreferrer">
                                <div className="img" data-aos="zoom-in-up" data-aos-duration="1000">
                                    <img src={Img8} alt="blog" />
                                </div>
                                <div className="text" data-aos="slide-up" data-aos-duration="2000">
                                    <h2>yobler</h2>
                                    <p>It is a CS-CART Website for All Kids product, its a testing site need to move on live</p>
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
