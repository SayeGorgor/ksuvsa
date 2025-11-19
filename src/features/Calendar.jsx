import React, { useState, useEffect } from 'react';
import CalendarDisplay from './CalendarDisplay';
import './Calendar.css';
import { eventsArray } from './CalendarDisplay';

const Calendar = () => {
    const parseDate = (date) => {
        const day = date.getDate();
        let month = '';
        switch(date.getMonth()) {
            case 0:
                month = 'Jan';
                break;
            case 1:
                month = 'Feb';
                break;
            case 2:
                month = 'Mar';
                break;
            case 3:
                month = 'Apr';
                break;
            case 4:
                month = 'May';
                break;
            case 5:
                month = 'Jun';
                break;
            case 6:
                month = 'Jul';
                break;
            case 7:
                month = 'Aug';
                break;
            case 8:
                month = 'Sep';
                break;
            case 9:
                month = 'Oct';
                break;
            case 10:
                month = 'Nov';
                break;
            case 11:
                month = 'Dec';
                break;
            default:
                console.log('error');
        }
        return `${month} ${day}`;
    }
    return(
        <div id='calendar-page-body'>
            {/* <h1>Calendar</h1> */}
            <div id='columns'>
                <div id='event-column' className='column'>
                    <div id='upcoming-title'>
                        <h2>Upcoming Events</h2>
                        <h3>KSUVSA Welcomes You For</h3>
                    </div>
                    <ul id='event-card-list'>
                        {eventsArray.map((event) => 
                            <li>
                                <div className='event-card'>
                                    <h3 className='event-date'>{parseDate(event.date)}</h3>
                                    <div className='event-info'>
                                        <h4>{event.name}</h4>
                                        <h5 className='event-location'>Prillamin Building</h5>
                                        <h5>7 - 9:30 PM</h5>
                                    </div>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>       
                <div className='calendar'>
                    <CalendarDisplay />
                </div>               
            </div>
        </div>
    );
}

export default Calendar;