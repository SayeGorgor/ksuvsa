import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './CalendarDisplay.css';
import Arrow from '../symbols/dropdown-arrow.svg?react';

import { 
    parseMonth, 
    setIsEventWindowVisible, 
    toggleMonthDropdown, 
    toggleYearDropdown, 
    setMonth, 
    setYear,
    setEventName 
} from './Calendar/calendarSlice';


export const eventsArray = [
    {
        name: 'October GBM',
        date: new Date(2025, 9, 7)
    },
    {
        name: 'Game Night',
        date: new Date(2025, 9, 14)
    },
    {
        name: 'Study Night',
        date: new Date(2025, 10, 2)
    },
    {
        name: 'November GBM',
        date: new Date(2025, 10, 5)
    },
    // {
    //     name: 'Thanksgiving Social',
    //     date: new Date(2025, 10, 18)
    // }
]

const CalendarDisplay = () => {
    //Initial Arrays
    const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                         'August', 'September', 'October', 'November', 'December']; 

    //States
    // const [month, setMonth] = useState(monthsArray[new Date().getMonth()]);
    // const [year, setYear] = useState(new Date().getFullYear().toString());
    const [events, setEvents] = useState(eventsArray);
    // const [isEventWindowVisible, setIsEventWindowVisible] = useState(false);
    // const [isMonthDropdownMenuVisible, setIsMonthDropdownMenuVisible] = useState(false);
    // const [isYearDropdownMenuVisible, setIsYearDropdownMenuVisible] = useState(false);
    // const [eventName, setEventName] = useState('');
    
    //Redux
    const dispatch = useDispatch();
    const year = useSelector(state => state.calendar.year);
    const month = useSelector(state => state.calendar.month);
    const eventName = useSelector(state => state.calendar.eventName);
    const isMonthDropdownMenuVisible = useSelector(state => state.calendar.isMonthDropdownVisible);
    const isYearDropdownMenuVisible = useSelector(state => state.calendar.isYearDropdownVisible);
    const isEventWindowVisible = useSelector(state => state.calendar.isEventWindowVisible);
    const fullState = useSelector(state => state.calendar.month);

    //Functions
    const handleMouseEnter = (e) => {
        const rect = e.target.getBoundingClientRect();
        const width = document.getElementById('event-display').getBoundingClientRect().width;
        dispatch(setIsEventWindowVisible(true));
        dispatch(setEventName(e.target.innerText));
        document.getElementById('event-display').style.left = rect.left - 40 + 'px';
        document.getElementById('event-display').style.top = Math.floor(rect.top) - 180 + "px";
        console.log('Width: ' + width);
        console.log('Right: ' + rect.right);
    }
    const handleMouseLeave = () => {
        dispatch(setIsEventWindowVisible(false));
    }
    const handleMonthDropdownClick = (e) => {
        dispatch(setMonth(e.target.innerText));
    }
    const handleCurrentMonthClick = () => {
        dispatch(toggleMonthDropdown());
    }
    const handleYearDropdownClick = (e) => {
        dispatch(setYear(e.target.innerText));
    }
    const handleCurrentYearClick = () => {
        dispatch(toggleYearDropdown());
    }

    //Fill in calendar on load and on new selection
    useEffect(() => {
        const startDate = new Date(year, monthsArray.indexOf(month), 1);
        const startDOTW = startDate.getDay();
        const numDays = new Date(year, monthsArray.indexOf(month), 0).getDate();
        const displayedEvents = events.filter(event => event.date.getMonth() === startDate.getMonth() &&
                                                       event.date.getYear() === startDate.getYear());
        let dayIndex = startDOTW;

        //Clear cells
        for(let i = 0; i < 42; i++) {
            document.getElementById(`${i}`).innerHTML = '';
            document.getElementById(`${i}`).classList.add('disabled-cell');
        }
        //Add days
        for(let i = 1; i <= numDays; i++) {
            const cell = document.getElementById(`${dayIndex}`);
            cell.innerHTML = i;
            cell.classList.remove('disabled-cell');
            dayIndex++;
        }
        //Add Event Badges
        for(let event of displayedEvents) {
            const cell = document.getElementById(event.date.getDate() + startDOTW - 1);
            const eventBadge = document.createElement('div');
            eventBadge.innerHTML = `${event.name}`;
            eventBadge.classList.add('event-badge');
            eventBadge.addEventListener('mouseenter', handleMouseEnter);
            eventBadge.addEventListener('mouseleave', handleMouseLeave);
            cell.appendChild(eventBadge);
        }
    }, [month, year]);

    return(
        <div id='calendar'>
            <div id='event-display' className={isEventWindowVisible ? '' : 'hide'}>
                <p>{eventName}</p>
                <p>7 - 9:30</p>
                <p>Prillamin Building</p>
            </div>
            <div id='selector-tab'>
                {/* Month and year selectors */}
                <div id='month-dropdown' className={`dropdown ${isMonthDropdownMenuVisible ? 'open' : ''}`}>
                    <div className='current-dropdown-option' onClick={handleCurrentMonthClick}>
                        <p>{month}</p>
                        <Arrow className='arrow' />
                    </div>
                    <div id='month-dropdown-menu' className={`dropdown-menu ${isMonthDropdownMenuVisible ? '' : 'hide'}`}>
                        <ul className='dropdown-menu-options'>
                            <li onClick={handleMonthDropdownClick}>
                                <div className='dropdown-option-wrapper'>January</div>
                            </li>
                            <li onClick={handleMonthDropdownClick}>
                                <div className='dropdown-option-wrapper'>February</div>
                            </li>
                            <li onClick={handleMonthDropdownClick}>
                                <div className='dropdown-option-wrapper'>March</div>
                            </li>
                            <li onClick={handleMonthDropdownClick}>
                                <div className='dropdown-option-wrapper'>April</div>
                            </li>
                            <li onClick={handleMonthDropdownClick}>
                                <div className='dropdown-option-wrapper'>May</div>
                            </li>
                            <li onClick={handleMonthDropdownClick}>
                                <div className='dropdown-option-wrapper'>June</div>
                            </li>
                            <li onClick={handleMonthDropdownClick}>
                                <div className='dropdown-option-wrapper'>July</div>
                            </li>
                            <li onClick={handleMonthDropdownClick}>
                                <div className='dropdown-option-wrapper'>August</div>
                            </li>
                            <li onClick={handleMonthDropdownClick}>
                                <div className='dropdown-option-wrapper'>September</div>
                            </li>
                            <li onClick={handleMonthDropdownClick}>
                                <div className='dropdown-option-wrapper'>October</div>
                            </li>
                            <li onClick={handleMonthDropdownClick}>
                                <div className='dropdown-option-wrapper'>November</div>
                            </li>
                            <li className='bottom-li' onClick={handleMonthDropdownClick}>
                                <div className='dropdown-option-wrapper'>December</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id='year-dropdown' className={`dropdown ${isYearDropdownMenuVisible ? 'open' : ''}`}>
                    <div className='current-dropdown-option' onClick={handleCurrentYearClick}>
                        <p>{year}</p>
                        <Arrow className='arrow' />
                    </div>
                    <div id='year-dropdown-menu' className={`dropdown-menu ${isYearDropdownMenuVisible ? '' : 'hide'}`}>
                        <ul className='dropdown-menu-options'>
                            <li onClick={handleYearDropdownClick}><div className='dropdown-option-wrapper'>2025</div></li>
                            <li onClick={handleYearDropdownClick}><div className='dropdown-option-wrapper'>2026</div></li>
                            <li onClick={handleYearDropdownClick}><div className='dropdown-option-wrapper'>2027</div></li>
                            <li onClick={handleYearDropdownClick}><div className='dropdown-option-wrapper'>2028</div></li>
                            <li onClick={handleYearDropdownClick}><div className='dropdown-option-wrapper'>2029</div></li>
                            <li onClick={handleYearDropdownClick}><div className='dropdown-option-wrapper'>2030</div></li>
                            <li onClick={handleYearDropdownClick}><div className='dropdown-option-wrapper'>2031</div></li>
                            <li onClick={handleYearDropdownClick}><div className='dropdown-option-wrapper'>2032</div></li>
                            <li onClick={handleYearDropdownClick}><div className='dropdown-option-wrapper'>2033</div></li>
                            <li onClick={handleYearDropdownClick}><div className='dropdown-option-wrapper'>2034</div></li>
                            <li onClick={handleYearDropdownClick}><div className='dropdown-option-wrapper'>2035</div></li>
                            <li className='bottom-li' onClick={handleYearDropdownClick}>
                                <div className='dropdown-option-wrapper'>2036</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Days of the week cells */}
            <div id='Sunday' className='weekday-cell'>
                <p className='long-day-name'>Sunday</p>
                <p className='short-day-name'>Sun</p>
            </div>
            <div id='Monday' className='weekday-cell'>
                <p className='long-day-name'>Monday</p>
                <p className='short-day-name'>Mon</p>
            </div>
            <div id='Tuesday' className='weekday-cell'>
                <p className='long-day-name'>Tuesday</p>
                <p className='short-day-name'>Tue</p>
            </div>
            <div id='Wednesday' className='weekday-cell'>
                <p className='long-day-name'>Wednesday</p>
                <p className='short-day-name'>Wed</p>
            </div>
            <div id='Thursday' className='weekday-cell'>
                <p className='long-day-name'>Thursday</p>
                <p className='short-day-name'>Thu</p>
            </div>
            <div id='Friday' className='weekday-cell'>
                <p className='long-day-name'>Friday</p>
                <p className='short-day-name'>Fri</p>
            </div>
            <div id='Saturday' className='weekday-cell'>
                <p className='long-day-name'>Saturday</p>
                <p className='short-day-name'>Sat</p>
            </div>
            {/* Date cells */}
            <div id='0' className='cell'></div>
            <div id='1' className='cell'></div>
            <div id='2' className='cell'></div>
            <div id='3' className='cell'></div>
            <div id='4' className='cell'></div>
            <div id='5' className='cell'></div>
            <div id='6' className='cell'></div>
            <div id='7' className='cell'></div>
            <div id='8' className='cell'></div>
            <div id='9' className='cell'></div>
            <div id='10' className='cell'></div>
            <div id='11' className='cell'></div>
            <div id='12' className='cell'></div>
            <div id='13' className='cell'></div>
            <div id='14' className='cell'></div>
            <div id='15' className='cell'></div>
            <div id='16' className='cell'></div>
            <div id='17' className='cell'></div>
            <div id='18' className='cell'></div>
            <div id='19' className='cell'></div>
            <div id='20' className='cell'></div>
            <div id='21' className='cell'></div>
            <div id='22' className='cell'></div>
            <div id='23' className='cell'></div>
            <div id='24' className='cell'></div>
            <div id='25' className='cell'></div>
            <div id='26' className='cell'></div>
            <div id='27' className='cell'></div>
            <div id='28' className='cell'></div>
            <div id='29' className='cell'></div>
            <div id='30' className='cell'></div>
            <div id='31' className='cell'></div>
            <div id='32' className='cell'></div>
            <div id='33' className='cell'></div>
            <div id='34' className='cell'></div>
            <div id='35' className='cell'></div>
            <div id='36' className='cell'></div>
            <div id='37' className='cell'></div>
            <div id='38' className='cell'></div>
            <div id='39' className='cell'></div>
            <div id='40' className='cell'></div>
            <div id='41' className='cell'></div>
        </div>
    );
}

export default CalendarDisplay;