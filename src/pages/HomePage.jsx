import React, { useState } from 'react';
import Arrow from '../assets/eboard_arrow.svg?react';
import './HomePage.css';

const Home = () => {
    //Use State
    const [currentCard, setCurrentCard] = useState(0);
    
    //Functions

    const handleCardClick = (e) => {
        e.currentTarget.classList.toggle('show-info');
        e.currentTarget.children[0].classList.toggle('show-info');
        console.log('Show Info?', e.currentTarget.children[0].classList.contains('show-info'));
    }

    const handleArrowClick = (e) => {
        const cardList = document.getElementById('eboard-card-list');
        const cardListWidth = cardList.getBoundingClientRect().width;
        const card = cardList.children[currentCard].children[0];
        const cardWidth = card.getBoundingClientRect().width;
        console.log(card);
        console.log(card.children[0]);
        if(e.currentTarget.id === 'forward-arrow') {
            cardList.scrollTo({ left: (cardListWidth - ((cardListWidth - cardWidth) / 2) + 1.1) * (currentCard + 1), behavior: 'smooth'});
            setCurrentCard(currentCard + 1);
            console.log('Current Card: ', currentCard);
        } else {
            cardList.scrollTo({ left: (cardListWidth - ((cardListWidth - cardWidth) / 2) + 1.1) * (currentCard - 1) , behavior: 'smooth'});
            setCurrentCard(currentCard - 1);
            console.log('Current Card: ', currentCard);
        }
        if(card.classList.contains('show-info')) {
            card.classList.remove('show-info');
            card.children[0].classList.remove('show-info');
        }
    }

    return(
        <div id='home-body'>
            <div id='hero'>
                <div id='hero-text-section'>
                    <h1 id='hero-title'>KSU<br></br>VSA</h1>
                    <h6 id='hero-description'>
                        CREATING COMMUNITY<br />CULTIVATING CULTURE<br />BUILDING FRIENDSHIPS
                    </h6>
                </div>
                <img src='/photos/home_hero_background.jpg' alt='KSUVSA Members Posing' />
            </div>
            <div id='goal-section'>
                <div className='goal-section-img-container'>
                    <img src='/photos/home_img_1.jpeg' alt='KSUVSA Members at Field Day' />
                </div>
                <div id='goal-section-text'>
                    <h2>Our Goal</h2>
                    <p>
                        We are an orginization focused on building community among students at Kennesaw
                        State University around the Vietnamese culture. We are inclusive and offer events
                        and festivities for everyone to enjoy and learn about Vietnamese heritage!
                    </p>
                </div>
            </div>
            <div id='eboard-section'>
                <h2>Meet Our Eboard!</h2>
                <div id='eboard-card-list-container'>
                    <Arrow id='back-arrow' className={`arrow ${currentCard !== 0 && 'visible'}`} onClick={(e) => handleArrowClick(e)} />
                    <ul id='eboard-card-list'>
                        <li>
                            <div id='gisel' className='eboard-card' onClick={(e) => handleCardClick(e)}>
                                <div className='info'>
                                    <h3>Gisel Le</h3>
                                    <div className='eboard-card-roles'>
                                        <h4>President</h4>
                                        <h4>3rd Year</h4>
                                        <h4>Interactive Design</h4>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div id='jenny' className='eboard-card' onClick={(e) => handleCardClick(e)}>
                                <div className='info'>
                                    <h3>Jenny Pham</h3>
                                    <div className='eboard-card-roles'>
                                        <h4>Internal President</h4>
                                        <h4>3rd Year</h4>
                                        <h4>Nursing</h4>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div id='hoang' className='eboard-card' onClick={(e) => handleCardClick(e)}>
                                <div className='info'>
                                    <h3>Hoang Nguyen</h3>
                                    <div className='eboard-card-roles'>
                                        <h4>External VP</h4>
                                        <h4>2nd Year</h4>
                                        <h4>Cybersecurity</h4>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div id='tiffany' className='eboard-card' onClick={(e) => handleCardClick(e)}>
                                <div className='info'>
                                    <h3>Tiffany Le</h3>
                                    <div className='eboard-card-roles'>
                                        <h4>Secretary</h4>
                                        <h4>3rd Year</h4>
                                        <h4>Integrated Health Science</h4>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div id='joy' className='eboard-card' onClick={(e) => handleCardClick(e)}>
                                <div className='info'>
                                    <h3>Joy Johnson</h3>
                                    <div className='eboard-card-roles'>
                                        <h4>Event Coordinator</h4>
                                        <h4>3rd Year</h4>
                                        <h4>International Affairs</h4>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div id='shannon' className='eboard-card' onClick={(e) => handleCardClick(e)}>
                                <div className='info'>
                                    <h3>Shannon Lim</h3>
                                    <div className='eboard-card-roles'>
                                        <h4>Treasurer</h4>
                                        <h4>2nd Year</h4>
                                        <h4>Management</h4>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div id='mechelle' className='eboard-card' onClick={(e) => handleCardClick(e)}>
                                <div className='info'>
                                    <h3>Mechelle Le</h3>
                                    <div className='eboard-card-roles'>
                                        <h4>Food Coordinator</h4>
                                        <h4>4th Year</h4>
                                        <h4>Interactive Design</h4>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div id='cierra' className='eboard-card' onClick={(e) => handleCardClick(e)}>
                                <div className='info'>
                                    <h3>Cierra Henry</h3>
                                    <div className='eboard-card-roles'>
                                        <h4>Membership Coordinator</h4>
                                        <h4>3rd Year</h4>
                                        <h4>Integrated Health Science</h4>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div id='chloe' className='eboard-card' onClick={(e) => handleCardClick(e)}>
                                <div className='info'>
                                    <h3>Chloe Park</h3>
                                    <div className='eboard-card-roles'>
                                        <h4>Historian</h4>
                                        <h4>3rd Year</h4>
                                        <h4>Nursing</h4>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <Arrow id='forward-arrow' className={`arrow ${currentCard !== 8 && 'visible'}`} onClick={(e) => handleArrowClick(e)} />
                </div>
            </div>
        </div>
    );
}

export default Home;