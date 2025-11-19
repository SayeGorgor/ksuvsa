import { createSlice } from '@reduxjs/toolkit';

export const parseMonth = (month) => {
    switch(month) {
        case 0:
            return 'January';
        case 1:
            return 'February';
        case 2:
            return 'March';
        case 3:
            return 'April';
        case 4:
            return 'May';
        case 5:
            return 'June';
        case 6:
            return 'July';
        case 7:
            return 'August';
        case 8:
            return 'September';
        case 9:
            return 'October';
        case 10:
            return 'November';
        case 11:
            return 'December';
        default:
            return 'Invalid Month';
    }
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [],
        isMonthDropdownVisible: false,
        isYearDropdownVisible: false,
        isEventWindowVisible: false,
        year: new Date().getFullYear(),
        month: parseMonth(new Date().getMonth()),
        eventName: ''
    },
    reducers: {
        toggleMonthDropdown: (state, action) => {
            state.isMonthDropdownVisible = !state.isMonthDropdownVisible;
            state.isYearDropdownVisible = false;
        },
        toggleYearDropdown: (state, action) => {
            state.isYearDropdownVisible = !state.isYearDropdownVisible;
            state.isMonthDropdownVisible = false;
        },
        setIsEventWindowVisible: (state, action) => {
            state.isEventWindowVisible = action.payload;
        },
        setEventName: (state, action) => {
            state.eventName = action.payload;
        },
        setMonth: (state, action) => {
            state.month = action.payload;
            state.isMonthDropdownVisible = false;
        },
        setYear: (state, action) => {
            state.year = action.payload;
            state.isYearDropdownVisible = false;
        }
    }
});

export const { 
    setIsEventWindowVisible, 
    toggleMonthDropdown, 
    toggleYearDropdown, 
    setYear, 
    setMonth, 
    setEventName 
} = calendarSlice.actions;

export default calendarSlice.reducer;