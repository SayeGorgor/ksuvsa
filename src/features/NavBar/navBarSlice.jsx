import { createSlice } from '@reduxjs/toolkit';

export const navBarSlice = createSlice({
    name: 'navBar',
    initialState: {
        showSideBar: false,
        showLogoWindow: false,
        showLoginField: false,
        preventAnimations: true
    },
    reducers: {
        setShowSideBar: (state, action) => {
            state.showSideBar = action.payload;
        },
        setShowLoginField: (state, action) => {
            state.showLoginField = action.payload;
        },
        setShowLogoWindow: (state, action) => {
            state.showLogoWindow = action.payload;
        },
        setPreventAnimations: (state, action) => {
            state.preventAnimations = action.payload;
        }
    }
});

export const { 
    setShowSideBar, 
    setShowLoginField, 
    setShowLogoWindow,
    setPreventAnimations 
} = navBarSlice.actions;

export default navBarSlice.reducer;