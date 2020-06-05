import { createSlice } from '@reduxjs/toolkit';
import produce from 'immer';

const { actions, reducer } = createSlice({
    name:"shopping_cart",
    initialState: {
        ordered: []
    },
    reducers:{
        ADD_PRODUCT: produce((draft, action)=>{
            if(draft.ordered.length === 0){
                draft.ordered.push(action.payload);
            }else{
                draft.ordered.map(i => {
                    if(i.id == action.payload.id){
                        i.quantity += 1;
                        i.price = i.basePrice * i.quantity;
                    }else{
                        return draft.ordered.push(action.payload);
                    }
                    return i;
                });
            }
        }),
        INCREMENT_QUANTITY:  produce((draft, action) => {
            draft.ordered.map((i) => {
                if(i.id == action.payload.id){
                    i.quantity += 1; 
                    i.price = i.basePrice * i.quantity; 
                }
                return i;
            });
        }),
        DICREMENT_QUANTITY:  produce((draft, action) => {
            draft.ordered.filter((i, index) => {
                if(i.id == action.payload.id && i.quantity > 0){
                    i.quantity =  i.quantity - 1; 
                    i.price = i.basePrice * i.quantity; 
                }

                if( i.quantity === 0){
                     draft.ordered.splice(index, 1);
                }

                return i;
            });
        }),
        ADD_PRODUCT_REQUEST: (state, action) => {
            return state;
        },
        INCREMENT_REQUEST: (state, action) => {
            return state;
        },
        DECREMENT_REQUEST: (state, action) => {
            return state;
        }
    },
});

export const  { 
    ADD_PRODUCT, 
    INCREMENT_QUANTITY, 
    DICREMENT_QUANTITY, 
    ADD_PRODUCT_REQUEST, 
    INCREMENT_REQUEST,
    DECREMENT_REQUEST
} = actions;

export default reducer;