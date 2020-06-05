import { createSlice } from '@reduxjs/toolkit';

const {actions, reducer} = createSlice({
    name: "user",
    initialState:{
        isLoading: false,
        user: {},
        userList: [],
        succes_message: "",
        error_message: ""
    },
    reducers: {
        SET_USER: (state, action) => {
            return {...state, ...action.payload};
        },
        SET_ERROR: (state, action) => {
            return {
                ...state, 
                error_message: action.payload.error_message
            };
        },
        FETCH_REQUEST: (state, action) => { return state; }
    }
});

export const { SET_USER, SET_ERROR, FETCH_REQUEST } = actions;

export default reducer;