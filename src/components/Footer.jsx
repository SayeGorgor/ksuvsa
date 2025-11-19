import { Link } from 'react-router-dom';
import './Footer.css';

import InstagramIcon from '../assets/ig_icon.svg?react';
import GroupMeIcon from '../assets/groupme_icon.svg?react';
import FacebookIcon from '../assets/facebook_icon.svg?react';
import OwlLifeIcon from '../assets/owlife_icon.svg?react';

const Footer = () => {
    return(
        <footer id='footer-body'>
            <div id='description-section'>
                <div id='footer-logo-container'>
                    <img id='footer-logo' src='../../public/photos/ksuvsa_logo.png' alt='KSUVSA Logo' />
                </div>
                <h5>KSUVSA</h5>
                <p>
                    We are an orginization focused on building community among students at Kennesaw
                    State University around the Vietnamese culture.
                </p>
            </div>
            <div id='browse-section'>
                <h5>Browse</h5>
                <Link to='/'>Home</Link>
                <Link to='/events'>Events</Link>
                <Link to='/culture-show'>Culture Show</Link>
                <Link to='/calendar'>Calendar</Link>
                <Link to='/sponsors'>Sponsors</Link>
                <Link to='/contact'>Contact</Link>
            </div>
            <div id='contact-section'>
                <h5>Contact</h5>
                <p>
                    1000 Chastain Rd<br />
                    Kennesaw, GA 30144
                </p>
                <p>ksuvsa@gmail.com</p>
                <ul id='footer-contact-links'>
                    <li>
                        <div className='footer-contact-link'>
                            <a href='https://www.instagram.com/ksuvsa/' target='_blank'></a>
                            <InstagramIcon id='ig-icon' className='social-media-icon' />
                        </div>
                    </li>
                    <li>
                        <div className='footer-contact-link'>
                            <a href='https://www.facebook.com/VSAatKSU' target='_blank'></a>
                            <FacebookIcon id='footer-facebook-icon' className='social-media-icon' />
                        </div>
                    </li>
                    <li>
                        <div className='footer-contact-link'>
                            <a href='https://groupme.com/join_group/109123717/9Zn4RKkC' target='_blank'></a>
                            <GroupMeIcon id='footer-groupme-icon' className='social-media-icon' />
                        </div>
                    </li>
                    <li>
                        <div className='footer-contact-link'>
                            <a href='https://owllife.kennesaw.edu/organization/vsaatksu' target='_blank'></a>
                            <OwlLifeIcon id='footer-owllife-icon' className='social-media-icon' />
                        </div>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;