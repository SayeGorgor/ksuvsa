import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavSideBar.css';

import CloseWindowIcon from '../assets/close_window_icon.svg?react';

import { useDispatch, useSelector } from 'react-redux';
import { setShowSideBar } from '../features/NavBar/navBarSlice';

const NavSideBar = () => {
    //Redux
    const dispatch = useDispatch();
    const showSideBar = useSelector(state => state.navBar.showSideBar);

    //Functions
    const openSideBar = () => {
        const sideBar = document.getElementById('nav-side-bar-container');
        sideBar.classList.add('open');
        sideBar.classList.remove('closed');
        sideBar.removeAttribute('inert');
    }
    const closeSideBar = () => {
        const sideBar = document.getElementById('nav-side-bar-container');
        sideBar.classList.remove('open');
        sideBar.classList.add('closed');
        sideBar.setAttribute('inert', '');
    }
    return(
        <nav id='nav-side-bar-container' className={showSideBar ? 'open' : 'closed'} inert={showSideBar ? undefined : ''}>
            <CloseWindowIcon id='nav-side-bar-close-window-icon' onClick={() => dispatch(setShowSideBar(false))} /> 
            <ul id='nav-side-bar-links'>
                <li>
                    Home
                    <NavLink to='/'></NavLink>
                </li>
                <li>
                    Events
                    <NavLink to='/events'></NavLink>
                </li>
                <li>
                    Culture Show
                    <NavLink to='/culture-show'></NavLink>
                </li>
                <li>
                    Calendar
                    <NavLink to='/calendar'></NavLink>
                </li>
                <li>
                    Sponsors
                    <NavLink to='/sponsors'></NavLink>
                </li>
                <li>
                    Contact
                    <NavLink to='/contact'></NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavSideBar;