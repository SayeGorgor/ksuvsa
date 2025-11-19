import { useEffect, useRef } from 'react';
import './LogoWindow.css';

import { useSelector, useDispatch } from 'react-redux';
import { setShowLoginField, setShowLogoWindow } from '../features/NavBar/navBarSlice';

const LogoWindow = () => {
    const showLogoWindow = useSelector(state => state.navBar.showLogoWindow);
    const showLoginField = useSelector(state => state.navBar.showLoginField);
    const dispatch = useDispatch();
    const logoWindowRef = useRef(null);

    //Functions
    const handleEboardLoginClick = () => {
        dispatch(setShowLoginField(true));
    }

    //Use Effect
    //Close logo window by clicking outside of it
    useEffect(() => {
        const handleClickOutside = (e) => {
            if(logoWindowRef.current && !logoWindowRef.current.contains(e.target)) {
                dispatch(setShowLogoWindow(false));
            }
        }

        const handleScroll = () => {
            if(logoWindowRef.current) {
                dispatch(setShowLogoWindow(false));
            }
        }

        if(showLogoWindow) {
            window.addEventListener('click', handleClickOutside);
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('click', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        }
    }, [showLogoWindow]);

    return(
        <div id='logo-window-container' className={showLogoWindow ? 'visible' : ''}
             ref={logoWindowRef}>
            <div id='logo-window' onClick={handleEboardLoginClick}>
                <p>Eboard Log In</p>
            </div>
        </div>
    );
}

export default LogoWindow;