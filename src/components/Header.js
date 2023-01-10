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
                                    <li><a href="#" data-content="Why us?">Why us?</a></li>
                                    <li><a href="#scroll_d" data-content="Marketing platform">Marketing platform</a></li>
                                    <li><a href="#" data-content="Pricing">Pricing</a></li>
                                </ul>
                            </div>
                            <a href="#" className="sign_up">Sign Up, It’s Free</a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header