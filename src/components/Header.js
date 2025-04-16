import React, { Component} from 'react'
import '../App.css';
import $ from 'jquery'
import Logo from '../assets/images/logo_3.png'

class Header extends Component{
   
    constructor() {
        super();
        this.handle = this.handle.bind(this);
      }
      
      componentDidMount() {
        this.handle();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 1 )  {
                $("header").addClass("fixed");
            } else {
                $("header").removeClass("fixed");
            }
        });
        
        $('header .menus ul li a').click(function() {
            $('.wrap').removeClass('show');
            
        });
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
                            <a href="#"><img src={Logo} alt="logo" /></a>
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
                            <a href="https://drive.google.com/file/d/1va8G0H2Qan1vytZl-WKMJ03LZ8lFjpOC/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="sign_up">Download Resume</a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header