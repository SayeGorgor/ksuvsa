import React from 'react';
import './EventsPage.css';

const EventsPage = () => {
    return(
        <div id='events-page-container'>
            <div id='events-page-hero-container'>
                <img id='events-page-hero-img' src='../../public/photos/events_page/event_page_hero.jpg' />
                <h1>Our Events</h1>
            </div>
            <div id='main-title-container'>
                <h2>Take a look at some of our main events!</h2>
            </div>
            <div id='gbm-section' className='section'>
                <div id='gbm-img-container' className='section-img-container'>
                    <img src='../../public/photos/events_page/gbm.jpg' />
                </div>
                <div id='gbm-text' className='section-text'>
                    <h3>General Body Meetings</h3>
                    <p>
                        KSUVSA hosts monthly General Body Meetings (GBMs) where we 
                        offer a place for students to not only explore Vietnamese 
                        culture, but to also meet and connect with other students!
                        Our meetings include fun ice breakers, food, and activities so 
                        feel free to stop by!
                    </p>
                </div>
            </div>
            <div id='fundraiser-section' className='section'>
                <div id='fundraiser-text' className='section-text'>
                    <h3>Fundraisers</h3>
                    <p>
                        KSUVSA offers fundraisers throughout the year to help 
                        raise money to support our club and club events! Some of 
                        our most popular fundraisers include our Cafe Su Da funcraiser,
                        our carwash fundraiser, and our boba fundraiser. Check out our 
                        Calendar page to see some of our upcoming fundraisers!
                    </p>
                </div>
                <div id='fundraiser-img-container' className='section-img-container'>
                    <img src='../../public/photos/events_page/fundraiser.jpg' />
                </div>
            </div>
            <div id='social-section' className='section'>
                <div id='social-img-container' className='section-img-container'>
                    <img src='../../public/photos/events_page/social.jpg' />
                </div>
                <div id='social-text' className='section-text'>
                    <h3>Socials</h3>
                    <p>
                        KSUVSA welcomes you to our wide variety of socials! Our socials are 
                        events outside of our regular meeting schedule that allow students to 
                        make new friends, play games, and have a great time! Some examples of our socials 
                        include Game Night, Karaoke, Study Night and more!
                    </p>
                </div>
            </div>
            <div id='outro'>
                <p>
                    If you're interested in any of our events you can go to our 
                    Calendar page and see our upcoming events! You can also check out 
                    our gallery to get a feel for some of our events!
                </p>
                <button className='view-gallery-button target-button'>
                    <a href='https://owllife.kennesaw.edu/organization/vsaatksu/gallery' target='_blank'></a>
                    View Gallery
                </button>
            </div>
        </div>
    );
}

export default EventsPage;