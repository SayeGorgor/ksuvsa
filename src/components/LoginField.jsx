import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginField.css';
import CloseWindowIcon from '../assets/close_window_icon.svg?react';

import { useSelector, useDispatch } from 'react-redux';
import { setShowLoginField } from '../features/NavBar/navBarSlice';
import { setIsAuthourized, attemptLogin } from '../features/Auth/authSlice';

const LoginField = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const showLoginField = useSelector(state => state.navBar.showLoginField);

    //Use State
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    //Functions
    const handleCloseWindowClick = () => {
        dispatch(setShowLoginField(false));
    }

    const handleLoginAttempt = (e, email, password) => {
        e.preventDefault();
        const credentials = {email, password};
        dispatch(attemptLogin(credentials))
        .then(res => {
            setPassword('');
            if(res.meta.requestStatus === 'fulfilled') {
                dispatch(setIsAuthourized(true));
                navigate('/eboard');
                dispatch(setShowLoginField(false));
                setEmail('');
            }
        });
    }

    //Use Effect
    //Prevent scrolling when login field is active
    useEffect(() => {
        const lockScroll = () => {
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.dataset.scrollY = scrollY;
            // e.preventDefault();
        };

        const unlockScroll = () => {
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, document.body.dataset.scrollY || 0);
            delete document.body.dataset.scrollY;
        }

        // const preventKeyScroll = (e) => {
        //     const keys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", " ", "Home", "End"];
        //     if (keys.includes(e.key)) {
        //         e.preventDefault();
        //     }
        // };

        if(showLoginField) {
            lockScroll()
            // window.addEventListener("keydown", preventKeyScroll);
        }
        
        return () => {
            unlockScroll();
            // window.removeEventListener("keydown", preventKeyScroll);
        };
    }, [showLoginField]);

    return(
        <div id='login-page-container' className={showLoginField ? 'visible' : ''}>
            <div id='login-form-container'>
                <CloseWindowIcon id='close-window-icon' onClick={handleCloseWindowClick} />
                <img src='/photos/ksuvsa_logo.png' alt='KSUVSA Logo' id='login-logo' />
                <h1>Eboard Log In</h1>
                <form id='login-form'>
                    <label>
                        Email: 
                        <input type='email' id='email-field' name='email' autofill='email'
                               value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label>
                        Password: 
                        <input type='password' id='password-field' name='password' autofill='current-password'
                               value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button type='submit' onClick={(e) => handleLoginAttempt(e, email, password)}>Log In</button>
                </form>
                <a href='#'>Forgot Password?</a>
            </div>
        </div>
    );
}

export default LoginField;