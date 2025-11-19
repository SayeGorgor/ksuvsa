import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './EboardPage.css';

import { useDispatch, useSelector } from 'react-redux';
import { logout, setIsAuthourized, updatePassword } from '../features/Auth/authSlice';

import CloseWindowIcon from '../assets/close_window_icon.svg?react';

const EboardPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const iconPopupRef = useRef(null);

    const errorMessage = useSelector(state => state.auth.message);
    const hasError = useSelector(state => state.auth.hasError);

    //Use State
    const [showEventWindow, setShowEventWindow] = useState(false);
    const [showLinkWindow, setShowLinkWindow] = useState(false);
    const [showIconPopup, setShowIconPopup] = useState(false);
    const [showChangePasswordWindow, setShowChangePasswordWindow] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    //Functions
    const handleEventClick = () => {
        setShowEventWindow(true);
    }

    const handleAddEventButtonClick = () => {
        setShowEventWindow(true);
    }

    const handleLinkClick = () => {
        setShowLinkWindow(true);
    }

    const handleAddLinkButtonClick = () => {
        setShowLinkWindow(true);
    }

    const handleCloseWindowClick = () => {
        setShowEventWindow(false);
        setShowLinkWindow(false);
        setShowChangePasswordWindow(false);
    }

    const handleIconClick = (e) => {
        e.stopPropagation();
        setShowIconPopup(true);
    }

    const handleChangePasswordClick = () => {
        setShowIconPopup(false);
        setShowChangePasswordWindow(true);
    }

    const handleUpdatePassword = (e) => {
        e.preventDefault();
        const passwordInfo = { newPassword, confirmPassword }
        dispatch(updatePassword(passwordInfo));
    }

    const signout = () => {
        dispatch(logout())
        .then(res => {
            if(res.meta.requestStatus === 'fulfilled') {
                dispatch(setIsAuthourized(false));
            navigate('/');
            }
        });
    }

    //Use Effect
    //Close Icon Pop Up Window On Screen Click
    useEffect(() => {
        const handleOutsideIconPopupClick = (e) => {
            if(iconPopupRef.current && !iconPopupRef.current.contains(e.target)) {
                setShowIconPopup(false);
            }
        }

        if(showIconPopup) window.addEventListener('click', handleOutsideIconPopupClick);

        return () => window.removeEventListener('click', handleOutsideIconPopupClick);
    }, [showIconPopup]);

    //Lock Page When Editing Windows Are Open 
    useEffect(() => {
        const preventScroll = (e) => {
            e.preventDefault();
        };

        const preventKeyScroll = (e) => {
            const keys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", " ", "Home", "End"];
            if (keys.includes(e.key)) {
                e.preventDefault();
            }
        };

        if(showEventWindow || showLinkWindow || showChangePasswordWindow) {
            window.addEventListener("wheel", preventScroll, { passive: false });
            window.addEventListener("touchmove", preventScroll, { passive: false });
            window.addEventListener("keydown", preventKeyScroll);
        }

        return () => {
            window.removeEventListener("wheel", preventScroll);
            window.removeEventListener("touchmove", preventScroll);
            window.removeEventListener("keydown", preventKeyScroll);
        };
    }, [showEventWindow, showLinkWindow, showChangePasswordWindow]);

    return(
        <div id='eboard-page-container'>
            <div id='top-row'>
                <h1>Welcome, Eboard!</h1>
                <div id='eboard-page-logo-container' onClick={handleIconClick}>
                    <img id='eboard-page-logo' src='../../public/photos/ksuvsa_logo.png' />
                </div>
            </div>
            <div id='update-upcoming-events-section'>
                <h2 id='update-upcoming-events-section-title'>Upcoming Events</h2>
                <ul id='upcoming-events-list'>
                    <li>
                        <div className='upcoming-event-card' onClick={handleEventClick}>
                            <h3 className='upcoming-event-title'>November GBM</h3>
                            <p className='upcoming-event-date'>11/15/25</p>
                            <p className='upcoming-event-location'>Prillamin Building</p>
                        </div>
                    </li>
                    <li>
                        <div className='upcoming-event-card' onClick={handleEventClick}>
                            <h3 className='upcoming-event-title'>November GBM</h3>
                            <p className='upcoming-event-date'>11/15/25</p>
                            <p className='upcoming-event-location'>Prillamin Building</p>
                        </div>
                    </li>
                    <li>
                        <div className='upcoming-event-card' onClick={handleEventClick}>
                            <h3 className='upcoming-event-title'>November GBM</h3>
                            <p className='upcoming-event-date'>11/15/25</p>
                            <p className='upcoming-event-location'>Prillamin Building</p>
                        </div>
                    </li>
                </ul>
                <button className='eboard-page-add-btn' onClick={handleAddEventButtonClick}>Add Event</button>
            </div>
            <div id='update-important-links-section'>
                <h2>Important Links</h2>
                <ul id='update-important-links-list'>
                    <li>
                        <div className='contact-link important-link-card' onClick={handleLinkClick}>
                            <div className='update-important-link-img-container'>
                                <img id='volunteer-img' src='../../public/photos/culture_show/carousel_10.jpg' />
                            </div>
                            <p>Volunteer Interest Form</p>
                        </div>
                    </li>
                    <li>
                        <div id='dance-link' className='contact-link important-link-card' onClick={handleLinkClick}>
                            <div className='update-important-link-img-container'>
                                <img id='dance-img' src='../../public/photos/join_us_background.jpg' />
                            </div>
                            <p>Modern & Fan Dance Form</p>
                        </div>
                    </li>
                    <li>
                        <div id='fashion-show-link' className='contact-link important-link-card' onClick={handleLinkClick}>
                            <div className='update-important-link-img-container'>
                                <img id='fashion-show-img' src='../../public/photos/contact_page/fashion_show.jpg' />
                            </div>
                            <p>Fashion Show Interest Form</p>
                        </div>
                    </li>
                    <li>
                        <div id='individual-act-link' className='contact-link important-link-card' onClick={handleLinkClick}>
                            <div className='update-important-link-img-container'>
                                <img id='individual-act-img' src='../../public/photos/contact_page/individual_act.jpg' />
                            </div>
                            <p>Individual Act Interest Form</p>
                        </div>
                    </li>
                    <li>
                        <div id='acting-link' className='contact-link important-link-card' onClick={handleLinkClick}>
                            <div className='update-important-link-img-container'>
                                <img id='acting-img' src='../../public/photos/contact_page/acting.jpg' />
                            </div>
                            <p>Acting Interest Form</p>
                        </div>
                    </li>
                    <li>
                        <div id='emcee-link' className='contact-link important-link-card' onClick={handleLinkClick}>
                            <div className='update-important-link-img-container'>
                                <img id='emcee-img' src='../../public/photos/contact_page/emcee.jpg' />
                            </div>
                            <p>EMCEE Interest Form</p>
                        </div>
                    </li>
                </ul>
                <button id='link-btn' className='eboard-page-add-btn' onClick={handleAddLinkButtonClick}>Add Link</button>
            </div>
            <div id='edit-event-window' className={`editing-window ${showEventWindow ? 'visible' : ''}`}>
                <CloseWindowIcon className='close-editing-window-icon' onClick={handleCloseWindowClick}/>
                <h2>Event Information</h2>
                <form>
                    <label>
                        Event Name
                        <input id='event-name-input' name='event-name' type='text' />
                    </label>
                    <div id='event-date-time-info'>
                        <label>
                            Event Date
                            <input id='event-date-input' name='event-date' type='date' />
                        </label>
                        <label className='event-time-label'>
                            Start Time
                            <input id='event-start-time-input' name='event-start-time' type='time' />
                        </label>
                        <label className='event-time-label'>
                            End Time
                            <input id='event-end-time-input' name='event-end-time' type='time' />
                        </label>
                    </div>
                    <label>
                        Event Location
                        <input id='event-location-input' name='event-location' type='text' />
                    </label>
                    <label>
                        Event Details
                        <textarea id='event-details-input' name='event-datails'></textarea>
                    </label>
                    <button className='save-btn' type='submit'>Save Event</button>
                </form>
            </div>
            <div id='edit-link-window' className={`editing-window ${showLinkWindow ? 'visible' : ''}`}>
                <CloseWindowIcon className='close-editing-window-icon' onClick={handleCloseWindowClick}/>
                <h2>Link Information</h2>
                <form>
                    <label>
                        Link Title
                        <input id='link-title-input' name='link-title' type='text' />
                    </label>
                    <label>
                        Link URL
                        <input id='link-url-input' name='link-url' type='url' />
                    </label>
                    <button className='save-btn' type='submit'>Save Link</button>
                </form>
            </div>
            <div id='eboard-page-icon-popup' className={showIconPopup ? 'visible' : ''} ref={iconPopupRef}>
                <ul id='eboard-page-icon-popup-options-list'>
                    <li>
                        <div className='eboard-page-icon-popup-option' onClick={handleChangePasswordClick}>
                            Change Password
                        </div>
                    </li>
                    <li>
                        <div id='bottom-option' className='eboard-page-icon-popup-option' onClick={signout}>
                            Sign Out
                        </div>
                    </li>
                </ul>
            </div>
            <div id='change-password-window' className={showChangePasswordWindow ? 'visible' : ''}>
                <CloseWindowIcon className='close-editing-window-icon' onClick={handleCloseWindowClick}/>
                <h2>Change Password</h2>
                <p id='change-password-error-message' className={hasError ? 'visible' : ''}>{errorMessage}</p>
                <form id='change-password-form'>
                    <label>
                        Enter New Password
                        <input id='new-password-field' name='new-password' type='text' autoComplete='new-password'
                               value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    </label>
                    <label>
                        Confirm New Password
                        <input id='confirm-password-field' name='confirm-password' type='text' autoComplete='new-password'
                               value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </label>
                    <button id='update-password-btn' className='save-btn' type='submit'
                            onClick={handleUpdatePassword}>
                        Update Password
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EboardPage;