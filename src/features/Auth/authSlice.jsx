import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const attemptLogin = createAsyncThunk(
    'auth/attemptLogin',
    async(credentials, thunkAPI) => {
        try {
            const res = await axios.post(`${API_URL}/login`, credentials);
            return res.data;
        } catch(err) {
            return thunkAPI.rejectWithValue(err.response?.data.message || 'Login Attempt Failed');
        }
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async(thunkAPI) => {
        try {
            const res = await axios.get(`${API_URL}/logout`, {withCredentials:true});
            return res.data;
        } catch(err) {
            return thunkAPI.rejectWithValue(err.response?.data.message || 'Error Signing Out');
        }
    }
);

export const updatePassword = createAsyncThunk(
    'auth/updatePassword',
    async(passwordInfo, thunkAPI) => {
        console.log('Starting Update');
        const { newPassword, confirmPassword } = passwordInfo;
        const { getState } = thunkAPI;
        const state = getState();
        const currentEmail = state.auth.currentEmail;

        if(newPassword !== confirmPassword) {
            console.log('Passwords Must Match');
            return thunkAPI.rejectWithValue(err.response?.data.message || 'Passwords Must Match');
        }
        try {
            console.log('Starting Put Request');
            const res = await axios.put(`http://localhost:4000/eboard`, { email: currentEmail, newPassword });
            return res.data;
        } catch(err) {
            console.log('Error Updating Password');
            return thunkAPI.rejectWithValue(err.response?.data.message || 'Error Updating Password');
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        currentEmail: 'ksuvsa@gmail.com',
        isAuthorized: false,
        isLoading: false,
        hasError: false,
        message: '',
    },
    reducers: {
        setIsAuthourized: (state, action) => {
            state.isAuthorized = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(attemptLogin.pending, state => {
                state.isLoading = true;
                state.hasError = false;
                state.message = '';
            })
            .addCase(attemptLogin.fulfilled, state => {
                state.isLoading = true;
                state.hasError = false;
                state.message = '';
            })
            .addCase(attemptLogin.rejected, (state, action) => {
                state.isLoading = true;
                state.hasError = true;
                state.message = action.payload;
            })
            .addCase(logout.pending, state => {
                state.isLoading = true;
                state.hasError = false;
                state.message = '';
            })
            .addCase(logout.fulfilled, state => {
                state.isLoading = true;
                state.hasError = false;
                state.message = '';
            })
            .addCase(logout.rejected, (state, action) => {
                state.isLoading = true;
                state.hasError = true;
                state.message = action.payload;
            })
            .addCase(updatePassword.pending, state => {
                state.isLoading = true;
                state.hasError = false;
                state.message = '';
            })
            .addCase(updatePassword.fulfilled, state => {
                state.isLoading = true;
                state.hasError = false;
                state.message = '';
            })
            .addCase(updatePassword.rejected, (state, action) => {
                state.isLoading = true;
                state.hasError = true;
                state.message = action.payload;
            })
    }
});

export const { setIsAuthourized } = authSlice.actions;

export default authSlice.reducer;