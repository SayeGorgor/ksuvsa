import React, { useState } from 'react';

import InstagramIcon from '../assets/ig_icon.svg?react';
import GroupMeIcon from '../assets/groupme_icon.svg?react';
import FacebookIcon from '../assets/facebook_icon.svg?react';
import OwlLifeIcon from '../assets/owlife_icon.svg?react';

import './ContactPage.css';

const Contact = () => {
    
    return(
        <div id='contact-page-body'>
            <div id='left-column'>
                <div id='contact-header'>
                    <h1>Let's Stay Connected</h1>
                    <h2>Keep in touch to stay up to date on our news and events!</h2>
                </div>
                <div id='social-media-links-section'>
                    <ul id='social-media-links'>
                        <li>
                            <div className='contact-link social-media-link'>
                                <a href='https://www.instagram.com/ksuvsa/' target='_blank'></a>
                                <InstagramIcon id='ig-icon' className='social-media-icon' />
                            </div>
                        </li>
                        <li>
                            <div className='contact-link social-media-link'>
                                <a href='https://www.facebook.com/VSAatKSU' target='_blank'></a>
                                <FacebookIcon id='facebook-icon' className='social-media-icon' />
                            </div>
                        </li>
                        <li>
                            <div className='contact-link social-media-link'>
                                <a href='https://groupme.com/join_group/109123717/9Zn4RKkC' target='_blank'></a>
                                <GroupMeIcon id='groupme-icon' className='social-media-icon' />
                            </div>
                        </li>
                        <li>
                            <div className='contact-link social-media-link'>
                                <a href='https://owllife.kennesaw.edu/organization/vsaatksu' target='_blank'></a>
                                <OwlLifeIcon id='owllife-icon' className='social-media-icon' />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div id='right-column'>
                <div id='external-contact-links-section'>
                    <h3>External Contacts</h3>
                    <div id='external-contact-links'>
                        <div id='unavsa-link' className='contact-link external-contact-link'>
                            <a href='https://www.instagram.com/unavsa/' target='_blank'></a>
                            <div className='external-link-img-container'>
                                <img src='/photos/contact_page/unavsa_logo.png' />
                            </div>
                            <div className='external-link-text'>
                                <h4>UNAVSA</h4>
                            </div>
                        </div>
                        <div id='uvsase-link' className='contact-link external-contact-link'>
                            <a href='https://www.instagram.com/uvsase/' target='_blank'></a>
                            <div className='external-link-img-container'>
                                <img src='/photos/contact_page/uvsase_logo.png' />
                            </div>
                            <div className='external-link-text'>
                                <h4>UVSASE</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='important-links-section'>
                    <h3>Other Important Links</h3>
                    <ul id='important-links-list'>
                        <li>
                            <div id='volunteer-link' className='contact-link important-link'>
                                <a href='https://docs.google.com/forms/d/e/1FAIpQLSe39QU2ahwat0I5CHY47vuFgJGI2KG2oXNQv8OYwPMXP8w6bQ/viewform?usp=header' 
                                   target='_blank'></a>
                                <div className='important-link-img-container'>
                                    <img id='volunteer-img' src='/photos/culture_show/carousel_10.jpg' />
                                </div>
                                <p>Volunteer Interest Form</p>
                            </div>
                        </li>
                        <li>
                            <div id='dance-link' className='contact-link important-link'>
                                <a href='https://docs.google.com/forms/d/e/1FAIpQLSeuCTagP83ZVr9oBELIY2CeiAusUSnQezShpIBJuQDuATZCdw/closedform' 
                                   target='_blank'></a>
                                <div className='important-link-img-container'>
                                    <img id='dance-img' src='/photos/join_us_background.jpg' />
                                </div>
                                <p>Modern & Fan Dance Form</p>
                            </div>
                        </li>
                        <li>
                            <div id='fashion-show-link' className='contact-link important-link'>
                                <a href='https://docs.google.com/forms/d/e/1FAIpQLSeZ0r0KLN8AJWuF_Cpk8dbjC0HNUcCEX0GnJKmhpHdZQ9GQTA/viewform' 
                                   target='_blank'></a>
                                <div className='important-link-img-container'>
                                    <img id='fashion-show-img' src='/photos/contact_page/fashion_show.jpg' />
                                </div>
                                <p>Fashion Show Interest Form</p>
                            </div>
                        </li>
                        <li>
                            <div id='individual-act-link' className='contact-link important-link'>
                                <a href='https://docs.google.com/forms/d/e/1FAIpQLScQyVY2ZhWpfxcAcHaMIQEoyNbqiMVo8clBiHFw63Kk-4ngNg/viewform' 
                                   target='_blank'></a>
                                <div className='important-link-img-container'>
                                    <img id='individual-act-img' src='/photos/contact_page/individual_act.jpg' />
                                </div>
                                <p>Individual Act Interest Form</p>
                            </div>
                        </li>
                        <li>
                            <div id='acting-link' className='contact-link important-link'>
                                <a href='https://docs.google.com/forms/d/e/1FAIpQLSdLX86wAZUIAVesZ4dfDVqtDfQDGpSXzB3QlkxuABFZNNZoyg/viewform' 
                                   target='_blank'></a>
                                <div className='important-link-img-container'>
                                    <img id='acting-img' src='/photos/contact_page/acting.jpg' />
                                </div>
                                <p>Acting Interest Form</p>
                            </div>
                        </li>
                        <li>
                            <div id='emcee-link' className='contact-link important-link'>
                                <a href='https://docs.google.com/forms/d/e/1FAIpQLSdy22SoLmLTn70lpd48YEOtGUfFNumGiYAc6RnJM85bax-34w/viewform?usp=header' 
                                   target='_blank'></a>
                                <div className='important-link-img-container'>
                                    <img id='emcee-img' src='/photos/contact_page/emcee.jpg' />
                                </div>
                                <p>EMCEE Interest Form</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Contact;