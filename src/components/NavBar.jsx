import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

import { useSelector, useDispatch } from 'react-redux';
import { setShowLogoWindow, setShowSideBar, setPreventAnimations } from '../features/NavBar/navBarSlice';

import LogoWindow from './LogoWindow';
import LoginField from './LoginField';
import NavSideBar from './NavSideBar';
import HamburgerMenuIcon from '../assets/hamburger_menu_icon.svg?react';

const NavBar = () => {
    //Redux
    const showLogoWindow = useSelector(state => state.navBar.showLogoWindow);
    const showSideBar = useSelector(state => state.navBar.showSideBar);
    const dispatch = useDispatch();

    //Functions
    const handleLogoClick = (e) => {
        const logoWindow = document.getElementById('logo-window-container');
        const logoLeft = document.getElementById('logo-container').getBoundingClientRect().left;
        console.log(logoWindow);

        e.stopPropagation();
        logoWindow.style.left = `${Math.max(0, logoLeft - 20)}px`;
        dispatch(setShowLogoWindow(true));
        console.log('Show Logo: ', showLogoWindow);
    }

    const toggleHamburgerMenu = () => {
        dispatch(setPreventAnimations(false));
        dispatch(setShowSideBar(true));
    }

    const closeSideBarOnScreenClick = (e) => {
        e.stopPropagation();
        dispatch(setShowSideBar(false));
    }

    //Use Effect
    //Nav Bar disappears on scroll down and reappears on scroll up
    useEffect(() => {
        const nav = document.getElementById('nav-body');
        let lastScroll = 0;

        const handleScroll = () => {
            let currentScroll = Math.max(0, window.scrollY);
            if(currentScroll < 30) {
                nav.classList.add('at-top');
            } else {
                nav.classList.remove('at-top');
                if (currentScroll < lastScroll) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
            }
            lastScroll = currentScroll;
        };
        
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // useEffect(() => {
    //     if(showLogoWindow) {
    //         const logoWindow = document.getElementById('logo-window');
    //         const logoLeft = document.getElementById('logo-container').getBoundingClientRect().left;
    //         console.log('Logo Left: ', logoLeft);
            
    //         if(logoWindow) logoWindow.style.left = `${logoLeft}px`;
    //     }
    // }, [showLogoWindow]);

    return(
        <>
            <div id='screen-overlay' className={showSideBar ? 'visible' : ''} 
                 onClick={(e) => closeSideBarOnScreenClick(e)}></div>
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
                    <img id='logo' src='/photos/ksuvsa_logo.png' alt='KSUVSA Logo' />
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
                <HamburgerMenuIcon id='hamburger-menu-icon' onClick={toggleHamburgerMenu} />
            </nav>
            <NavSideBar id='nav-side-bar' />
            <LogoWindow />
            <LoginField />
        </>
    )
}

export default NavBar;