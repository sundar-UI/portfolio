import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'


 class Skills extends Component {
  render() {
    return (
     <section className = "skills" id = "skill_d">
         <div className= "container">
            <div className ="skill_head" data-aos="fade-up">
                <h4>Skills</h4>
                <p>I have a below skills and i am also used css preprocessor sass and less</p>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-12 left" data-aos="zoom-in" data-aos-duration="2000">
                   <img src="./images/percent_img.jpg" />
                </div>
                <div className="col-lg-6 col-md-12 right" data-aos="fade-left" data-aos-duration="2000">
                    <div className= "progress_block">
                        <p>HTML</p>
                        <div className="progress">
                            <div className="progress-bar" style={{width: "80%"}} > 80%</div>
                        </div>
                    </div>
                    <div className= "progress_block">
                        <p>CSS</p>
                        <div className="progress">
                            <div className="progress-bar" style={{width: "85%"}} >85%</div>
                        </div>
                    </div>
                    <div className= "progress_block">
                        <p>JAVASCRIPT</p>
                        <div className="progress">
                            <div className="progress-bar" style={{width: "60%"}} >60%</div>
                        </div>
                    </div>
                    <div className= "progress_block">
                        <p>JQUERY</p>
                        <div className="progress">
                            <div className="progress-bar" style={{width: "75%"}} >75%</div>
                        </div>
                    </div>
                    <div className= "progress_block">
                        <p>BOOTSTRAP</p>
                        <div className="progress">
                            <div className="progress-bar" style={{width: "80%"}} >80%</div>
                        </div>
                    </div>
                    <div className= "progress_block">
                        <p>REACT JS</p>
                        <div className="progress">
                            <div className="progress-bar" style={{width: "60%"}} >60%</div>
                        </div>
                    </div>
                    <div className= "progress_block">
                        <p>CS-CART</p>
                        <div className="progress">
                            <div className="progress-bar" style={{width: "85%"}} >85%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
    )
  }
}

export default Skills
