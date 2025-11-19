import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "./features/Calendar/calendarSlice";
import navBarReducer from './features/NavBar/navBarSlice';
import authReducer from './features/Auth/authSlice';

export const store = configureStore({
    reducer: {
        calendar: calendarReducer,
        navBar: navBarReducer,
        auth: authReducer
    }
});