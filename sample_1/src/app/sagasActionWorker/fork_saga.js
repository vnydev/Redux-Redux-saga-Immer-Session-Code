import { all, call, put, fork, takeLatest, select, cps, takeEvery, delay } from 'redux-saga/effects';

import { Fetch } from  '../../services/http';
import { SET_PRODUCT, SET_ERROR, PRO_FETCH_REQUEST, CREATE_PRODUCT, getProductState } from '../reducers/productSlice'; 
import { FETCH_REQUEST } from '../reducers/userSlice';

function* Delay(sec){
    yield delay(sec);
    yield call(()=>console.log("delay for 1sec.") );
}

function* fetchResorce(url, method){

    if(url === 'users'){
        console.log("error Invalid request");
        throw new Error("Invalid request");
    }
   const fetchRes = yield call(Fetch, url, method);
   console.log("fetchRes", fetchRes);
   
};

function* fetchAll(){
    yield all([
        call(fetchResorce, 'product', 'GET'),
        call(fetchResorce, 'users', 'GET'),
        call(Delay, 1000)
    ]);
}

// function* fetchAll() {
//     try{
//         const task1 = yield fork(fetchResorce, 'product', 'GET');
//         console.log("task1", task1);
//         yield delay(2000)
//         console.log("delay for 2sec.")
//         const task2 = yield fork(fetchResorce, 'users', 'GET');
//         console.log("task2", task2);
       
//         // yield fork(()=>console.log("delay for 1sec.") );
//     }catch(error){
//         console.log("error fetch all", error)
//     }
//   }

function* Main (){
    try{
        yield call(fetchAll);
    }catch(error){
        console.log("catch error in main", error);
    }
}

function* sagaWatcher(){
    yield takeEvery(FETCH_REQUEST, fetchAll);
}

export default sagaWatcher;
// export default function* demo_fork(){
//     yield all([
//         fork(sagaWatcher)
//     ]);
// };