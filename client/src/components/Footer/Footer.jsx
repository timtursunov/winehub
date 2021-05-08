import React from 'react';
import {ReactComponent as InstagramIcon} from '../../assets/icons/instagram-seeklogo.com.svg';
import {ReactComponent as LinkedinIcon} from '../../assets/icons/linkedin-icon-seeklogo.com.svg';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
function Footer (){
    return(
        <div className='footer'>
            <div className='footer__text-div'>
                <a className='footer__heading' href="/log-in">log in for business</a>
            </div>
            <div className='footer__icons'>
                <div className='footer__icon-div'>
                    <InstagramIcon className='footer__icon'/>
                </div>
                <div className='footer__icon-div'>
                    <LinkedinIcon className='footer__icon'/>
                </div>
            </div>
        </div>

    )

}

export default Footer