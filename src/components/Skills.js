import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import SkillImg from '../assets/images/percent_img.jpg'


 class Skills extends Component {
  render() {
    return (
     <section className = "skills" id = "skill_d">
         <div className= "container">
            <div className ="skill_head" data-aos="fade-up">
                <h4>Skills</h4>
                <p>I have a below skills and i am also used css preprocessor sass and less and React Styled components</p>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-12 left" data-aos="zoom-in" data-aos-duration="2000">
                   <img src={SkillImg} alt="skills" />
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
                            <div className="progress-bar" style={{width: "70%"}} >70%</div>
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
                            <div className="progress-bar" style={{width: "80%"}} >80%</div>
                        </div>
                    </div>
                    <div className= "progress_block">
                        <p>TYPESCRIPT</p>
                        <div className="progress">
                            <div className="progress-bar" style={{width: "70%"}} >70%</div>
                        </div>
                    </div>
                    <div className= "progress_block">
                        <p>REDUX</p>
                        <div className="progress">
                            <div className="progress-bar" style={{width: "80%"}} >80%</div>
                        </div>
                    </div>
                    <div className= "progress_block">
                        <p>REACT MUI</p>
                        <div className="progress">
                            <div className="progress-bar" style={{width: "80%"}} >80%</div>
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
