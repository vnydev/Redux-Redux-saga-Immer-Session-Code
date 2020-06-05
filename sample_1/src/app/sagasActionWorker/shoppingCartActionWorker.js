import { put, takeLatest, take } from 'redux-saga/effects';

import { ADD_PRODUCT, INCREMENT_QUANTITY, DICREMENT_QUANTITY, ADD_PRODUCT_REQUEST, INCREMENT_REQUEST, DECREMENT_REQUEST } from '../reducers/shopingCartSlice';

function* addProduct (action){
    yield put(ADD_PRODUCT(action.payload));
}

export function* incrementQuanity(action){
    yield put(INCREMENT_QUANTITY(action.payload));
}

export function* decrementQuanity(action){
    yield put(DICREMENT_QUANTITY(action.payload));
}

function* cartSagaWorker(){
    yield takeLatest(ADD_PRODUCT_REQUEST, addProduct);
    yield takeLatest(INCREMENT_REQUEST, incrementQuanity);
    yield takeLatest(DECREMENT_REQUEST, decrementQuanity);
}

export default cartSagaWorker;