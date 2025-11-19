import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

import { useSelector, useDispatch } from 'react-redux';
import { setShowLogoWindow, setShowSideBar } from '../features/NavBar/navBarSlice';

import LogoWindow from './LogoWindow';
import LoginField from './LoginField';
import NavSideBar from './NavSideBar';
import HamburgerMenuIcon from '../assets/hamburger_menu_icon.svg?react';

const NavBar = () => {
    const showLogoWindow = useSelector(state => state.navBar.showLogoWindow);
    const dispatch = useDispatch();
    //Functions
    const handleLogoClick = (e) => {
        e.stopPropagation();
        dispatch(setShowLogoWindow(true));
        console.log('Show Logo: ', showLogoWindow);
    }

    //Use Effect
    //Nav Bar disappears on scroll down and reappears on scroll up
    useEffect(() => {
        const nav = document.getElementById('nav-body');
        let lastScroll = 0;

        const handleScroll = () => {
            let currentScroll = window.scrollY;
            if(currentScroll < 10) {
                nav.classList.add('at-top');
            } else {
                nav.classList.remove('at-top');
            }
            if (currentScroll < lastScroll) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
            lastScroll = currentScroll;
        };
        
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <>
            <nav id='nav-body' className='scrolled'>
                {/* <LoginField id='login-field' className='showing' /> */}
                <ul id='nav-links-left' className='nav-links'>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/events'>Events</NavLink>
                    </li>
                    <li>
                        <NavLink to='/culture-show'>Culture Show</NavLink>
                    </li>
                </ul>
                <div id='logo-container' onClick={(e) => handleLogoClick(e)}>
                    <img id='logo' src='../../public/photos/ksuvsa_logo.png' alt='KSUVSA Logo' />
                </div>
                <ul id='nav-links-right' className='nav-links'>
                    <li>
                        <NavLink to='/calendar'>Calendar</NavLink>
                    </li>
                    <li>
                        <NavLink to='/sponsors'>Sponsors</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>
                </ul>
                <HamburgerMenuIcon id='hamburger-menu-icon' onClick={() => dispatch(setShowSideBar(true))} />
            </nav>
            <NavSideBar id='nav-side-bar' />
            <LogoWindow />
            <LoginField />
        </>
    )
}

export default NavBar;