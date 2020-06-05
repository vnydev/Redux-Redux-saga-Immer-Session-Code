import { createSlice } from '@reduxjs/toolkit';

const {actions, reducer} = createSlice({
    name: "product",
    initialState:{
        isLoading: false,
        product: {},
        productList: [],
        succes_message: "",
        error_message: "",
        formValue: {},
    },
    reducers: {
        SET_PRODUCT: (state, action) => {
            return {...state, ...action.payload};
        },
        SET_ERROR: (state, action) => {
            return {
                ...state, 
                error_message: action.payload.error_message
            };
        },
        PRO_FETCH_REQUEST: (state, action) => {
            return {...state};
        },
        CREATE_PRODUCT: (state, action) => {
            return {...state};
        }
    }
});

export const getProductState = state => state.product;

export const { SET_PRODUCT, SET_ERROR, PRO_FETCH_REQUEST, CREATE_PRODUCT } = actions;

export default reducer;