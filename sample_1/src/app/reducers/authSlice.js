import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
    name: "auth",
    initialState:{
        isLoading: false,
        isAuthenticate: false,
        success_message: "",
        error_message: "",
    },
    reducers:{
        LOGIN_SUCESS: (state, action) => {
            // return new state
            return {
                ...state,
                token: action.payload.token,
                isAuthenticate: action.payload.isAuthenticate,
                success_message: action.payload.message,
                error_message: "",
                };
        },
        LOGIN_REQUEST: (state, action) => {
            return {...state, ...action.payload};
        },
        LOGIN_ERROR: (state, action) => {
            return {
                ...state, 
                success_message: "",
                error_message: action.payload.message
            };
        },
        LOGOUT_REQUEST: (state, action) => {
            return {
                ...state,
                isAuthenticate: action.payload,
            };
        },
        RESET_AUTH: (state, action) => {
            return {
                ...state, 
                ...action.payload,
                success_message: "",
                error_message: "",
                isAuthenticate: false
            };
        }
    }
});

export const getHomeState = state => state.home;

export const { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCESS, LOGOUT_REQUEST, RESET_AUTH } = actions;

export default reducer;