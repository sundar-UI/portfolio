import React, { Component} from 'react'
import '../App.css';
import $ from 'jquery'

class Header extends Component{
   
    constructor() {
        super();
        this.handle = this.handle.bind(this);
      }
      
      componentDidMount() {
        this.handle();
      }

      handle = () => {
        $('.toggle_btn').click(function() {
            $('.wrap').addClass('show');
            $('body').addClass('noScroll');
        });
        
        $('.close_btn').click(function() {
            $('.wrap').removeClass('show');
            $('body').removeClass('noScroll');
        });
      }
    
    
    render(){
        return(
            <header>
                <div className="container">
                    <div className="flex">
                        <div className="logo">
                            <a href="#"><img src="./images/logo.png" alt="logo" /></a>
                        </div>
                        <div className="menus flex">
                            <span className="toggle_btn">Menu</span>
                            <div className="wrap">
                                <span className="close_btn"></span>
                                <ul>
                                    <li><a href="#" data-content="Home">Home</a></li>
                                    <li><a href="#about_d" data-content="About">About</a></li>
                                    <li><a href="#scroll_d" data-content="Work">Work</a></li>
                                    <li><a href="#skill_d" data-content="Skills">Skills</a></li>
                                </ul>
                            </div>
                            <a href="https://drive.google.com/file/d/103z4NUDEDt9oHgT1jkyJBIY_FqGE9xAA/view?usp=share_link" target="_blank" className="sign_up">Download Resume</a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header