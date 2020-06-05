import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import { INCREMENT_ASYNC, COUNTER_REQUEST } from '../../features/counter/counterSlice';

export const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* increamentAsync (action){
    console.log("increamentAsync action", action)
    yield delay(2000);
    yield put(INCREMENT_ASYNC(action.payload));
}

function* counterSagaWorker(){
    yield takeEvery(COUNTER_REQUEST, increamentAsync);
}
export default counterSagaWorker;