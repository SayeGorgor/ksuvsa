import { useEffect, useState } from 'react';
import { carouselPhotos, emToPx } from '../helpers/helpers';
import './CultureShowPage.css';

import CarouselArrow from '../assets/carousel_arrow.svg?react';
import ExitArrow from '../assets/exit_arrow.svg?react';


const CultureShowPage = () => {
    //States
    const [currentPhoto, setCurrentPhoto] = useState(1);

    //Functions
    const handleClick = (e) => {
        if(!e.currentTarget.classList.contains('showing')) {
            const id = e.currentTarget.id;
            if(!e.currentTarget.classList.contains('on-top')) {
                e.currentTarget.classList.add('on-top');
                if(id === 'media-section') {
                    document.getElementById('theme-section').classList.remove('on-top');
                } else {
                    document.getElementById('media-section').classList.remove('on-top');
                }
            }
            if(id === 'media-section') {
                document.getElementById('media-exit-arrow').classList.toggle('showing');
                document.getElementById('media-exit-arrow').classList.toggle('closing');
            } else {
                document.getElementById('theme-exit-arrow').classList.toggle('showing');
                document.getElementById('theme-exit-arrow').classList.toggle('closing');
            }
            e.currentTarget.classList.toggle('showing');
            e.currentTarget.children[0].classList.toggle('showing');
            e.currentTarget.children[1].classList.toggle('showing');
            e.currentTarget.children[0].classList.toggle('closing');
            e.currentTarget.children[1].classList.toggle('closing');
        }
    }

    const handleCarouselClick = (e) => {
        const carousel = document.getElementById('photo-carousel');
        const carouselWidth = carousel.getBoundingClientRect().width;
        let oldNumber = currentPhoto;
        if(e.currentTarget.id === 'photo-forward-arrow') {
            if(currentPhoto === 11) {
                oldNumber = 1;
                carousel.scrollTo({left: carouselWidth});
                console.log(currentPhoto);
            }
            carousel.scrollTo({left: carouselWidth * (oldNumber + 1), behavior: 'smooth'});
            setCurrentPhoto(oldNumber + 1);
            console.log(currentPhoto);
        } else {
            if(currentPhoto === 0) {
                oldNumber = 10;
                carousel.scrollTo({left: carouselWidth * 10});
                console.log(currentPhoto);
            }
            carousel.scrollTo({left: carouselWidth * (oldNumber - 1), behavior: 'smooth'});
            setCurrentPhoto(oldNumber - 1);
            console.log(currentPhoto);
        }
    }

    const handleMediaExitClick = (e) => {
        const mediaSection = document.getElementById('media-section');
        const mediaHeader = document.getElementById('media-header');
        const mediaContents = document.getElementById('media-section-contents');
        const carousel = document.getElementById('photo-carousel');
        const carouselWidth = carousel.getBoundingClientRect().width;

        e.currentTarget.classList.toggle('showing');
        e.currentTarget.classList.toggle('closing');
        mediaHeader.classList.toggle('showing');
        mediaHeader.classList.toggle('closing');
        mediaContents.classList.toggle('showing');
        mediaContents.classList.toggle('closing');
        mediaSection.classList.toggle('showing');

        carousel.scrollTo({left: carouselWidth});
        setCurrentPhoto(1);
    }

    const handleThemeExitClick = (e) => {
        const themeSection = document.getElementById('theme-section');
        const themeHeader = document.getElementById('theme-header');
        const themeContents = document.getElementById('theme-section-contents');

        e.currentTarget.classList.toggle('showing');
        e.currentTarget.classList.toggle('closing');
        themeHeader.classList.toggle('showing');
        themeHeader.classList.toggle('closing');
        themeContents.classList.toggle('showing');
        themeContents.classList.toggle('closing');
        themeSection.classList.toggle('showing');
    }

    //Use Effects
    useEffect(() => {
        const carousel = document.getElementById('photo-carousel');
        carousel.scrollTo({left: emToPx(40)});
    }, []);

    return(
        <div id='cs-page-body'>
            <div id='cs-page-hero-section'>
                <img id='cs-page-hero-img' src='/photos/culture_show_hero_2.jpg' 
                     alt='KSUVSA Culture Show Fan Dance Performance' />
                <h3 id='present-text'>KSUVSA Presents...</h3>
                <h2 id='annual-text'>THE ANNUAL</h2>
                <h2 id='main-text'>CULTURE SHOW</h2>
            </div>
            <div id='cs-page-abt-section'>
                <div id='cs-page-abt-img-container'>
                    <img id='cs-page-abt-img' src='/photos/culture_show_abt_3.jpg' 
                         alt='KSUVSA Members Performing at Culture Show'/>
                </div>
                <div id='cs-page-abt-text'>
                    <h2>About Our Show</h2>
                    <p id='abt-text-1'>
                        This year’s theme reminds us that love, understanding, and unity 
                        transcend barriers—whether they be of tradition, family, or circumstance. 
                    </p>
                    <p id='abt-text-2'>
                        Just as in the stories of old, we too face challenges that seek to keep us 
                        apart, but it is in choosing compassion over conflict that we truly honor our 
                        heritage and build a stronger community.
                    </p>
                </div>
            </div>
            <div id='cs-page-2025-section'>
                <div id='cs-page-2025-title'>
                    <h2 id='title'>The Heart Of Vietnam</h2>
                    <h2 id='year'>'25</h2>
                </div>
                <div id='main-content-container'>
                    <div id='theme-section' className='on-top' onClick={(e) => handleClick(e)}>
                        <h3 id='theme-header' className='closing'>Theme</h3>
                        <div id='theme-section-contents' className='closing'>
                            <h2>Star Crossed Lovers</h2>
                            <p id='theme-text-1'>
                                This year’s theme reminds us that love, understanding, 
                                and unity transcend barriers—whether they be of tradition, 
                                family, or circumstance.
                            </p>
                            <p id='theme-text-2'>
                                Just as in the stories of old, we too face challenges that seek 
                                to keep us apart, but it is in choosing compassion over conflict that we 
                                truly honor our heritage and build a stronger community.
                            </p>
                        </div>
                    </div>
                    <ExitArrow id='theme-exit-arrow' className='exit-arrow closing' 
                                   onClick={(e) => handleThemeExitClick(e)} />
                    <div id='media-section' onClick={(e) => handleClick(e)}>
                        <h3 id='media-header' className='closing'>Media</h3>
                        <div id='media-section-contents' className='closing'>
                            <div id='photo-carousel-container'>
                                <CarouselArrow id='photo-back-arrow' className='carousel-arrow' 
                                               onClick={(e) => handleCarouselClick(e)} />
                                <ul id='photo-carousel'>
                                    {carouselPhotos.map((link, index) => (
                                        <li key={index}>
                                            <img src={link} alt='Picture of 2025 KSUVSA Culture Show' />
                                        </li>
                                    ))}
                                </ul>
                                <CarouselArrow id='photo-forward-arrow' className='carousel-arrow' 
                                               onClick={(e) => handleCarouselClick(e)} />
                            </div>
                        </div>
                    </div>
                    <ExitArrow id='media-exit-arrow' className='exit-arrow closing' onClick={(e) => handleMediaExitClick(e)} />
                </div>
            </div>
            <div id='join-us-section'>
                <div id='blank'>

                </div>
                <div id='join-us-text-section'>
                    <h2>Interested... Join Us!</h2>
                    <h4>
                        We are currently looking for volunteers and sponsors for 
                        our upcoming 2026 show! Check out some of our links below
                    </h4>
                    <div id='links'>
                        <div id='student-links-container' className='link-list-container'>
                            <h3>Student Links</h3>
                            <ul id='student-links'>
                                <li>
                                    <div className='link'>
                                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSe39QU2ahwat0I5CHY47vuFgJGI2KG2oXNQv8OYwPMXP8w6bQ/viewform?usp=header'
                                           target='_blank'>
                                            Volunter Interest Form
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className='link'>
                                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSeuCTagP83ZVr9oBELIY2CeiAusUSnQezShpIBJuQDuATZCdw/closedform'
                                           target='_blank'>
                                            Modern & Fan Dance Interest Form
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className='link'>
                                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSeZ0r0KLN8AJWuF_Cpk8dbjC0HNUcCEX0GnJKmhpHdZQ9GQTA/viewform'
                                           target='_blank'>
                                            Fashion Show Interest Form
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className='link'>
                                        <a href='https://docs.google.com/forms/d/e/1FAIpQLScQyVY2ZhWpfxcAcHaMIQEoyNbqiMVo8clBiHFw63Kk-4ngNg/viewform'
                                           target='_blank'>
                                            Individual Act Interest Form
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className='link'>
                                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSdLX86wAZUIAVesZ4dfDVqtDfQDGpSXzB3QlkxuABFZNNZoyg/viewform?usp=header'
                                           target='_blank'>
                                            Acting Interest Form
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className='link'>
                                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSdy22SoLmLTn70lpd48YEOtGUfFNumGiYAc6RnJM85bax-34w/viewform'
                                           target='_blank'>
                                            EMCEE Interest Form
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div id='sponsor-links-container' className='link-list-container'>
                            <h3>Sponsor Links</h3>
                            <ul id='sponsor-links'>
                                <li>
                                    <div className='link'>
                                        <a>Sponsor Form</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id='join-us-img-container'>
                    <img id='join-us-img' src='/photos/join_us_background.jpg' 
                         alt='KSUVSA Members Performing at Culture Show'/>
                </div>
            </div>
        </div>
    );
}

export default CultureShowPage;