import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './NavSideBar.css';

import CloseWindowIcon from '../assets/close_window_icon.svg?react';

import { useDispatch, useSelector } from 'react-redux';
import { setShowSideBar } from '../features/NavBar/navBarSlice';

const NavSideBar = () => {
    //Redux
    const dispatch = useDispatch();
    const showSideBar = useSelector(state => state.navBar.showSideBar);
    const preventAnimations = useSelector(state => state.navBar.preventAnimations);

    //Use Effect
    useEffect(() => {
        const lockScroll = () => {
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.dataset.scrollY = scrollY;
        };

        const unlockScroll = () => {
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, document.body.dataset.scrollY || 0);
            delete document.body.dataset.scrollY;
        }

        if(showSideBar) {
            lockScroll();
        }
        
        return () => {
            unlockScroll();
        };
    }, [showSideBar]);

    return(
        <nav id='nav-side-bar-container' 
             className={`${showSideBar ? 'open' : 'closed'} 
                         ${preventAnimations ? 'prevent-mount-animation' : ''}`} 
             inert={showSideBar ? undefined : ''}>
            <CloseWindowIcon id='nav-side-bar-close-window-icon' onClick={() => dispatch(setShowSideBar(false))} /> 
            <ul id='nav-side-bar-links'>
                <li onClick={() => dispatch(setShowSideBar(false))}>
                    Home
                    <NavLink to='/'></NavLink>
                </li>
                <li onClick={() => dispatch(setShowSideBar(false))}>
                    Events
                    <NavLink to='/events'></NavLink>
                </li>
                <li onClick={() => dispatch(setShowSideBar(false))}>
                    Culture Show
                    <NavLink to='/culture-show'></NavLink>
                </li>
                <li onClick={() => dispatch(setShowSideBar(false))}>
                    Calendar
                    <NavLink to='/calendar'></NavLink>
                </li>
                <li onClick={() => dispatch(setShowSideBar(false))}>
                    Sponsors
                    <NavLink to='/sponsors'></NavLink>
                </li>
                <li onClick={() => dispatch(setShowSideBar(false))}>
                    Contact
                    <NavLink to='/contact'></NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavSideBar;