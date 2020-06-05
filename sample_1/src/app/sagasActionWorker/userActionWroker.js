import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { SET_USER, SET_ERROR, FETCH_REQUEST } from '../reducers/userSlice';
import { Fetch } from '../../services/http';
import assert from 'assert';


const GetAllUsers = () => {
    let url = 'users';

    return Fetch(url, "GET");
};

function* FetchUsersList(){
   try{
       const {status, data} = yield call(GetAllUsers);
       yield put(SET_USER({userList: data}));

       // You can execute further operation on the above response.

   }catch(error){
        yield put( SET_ERROR({error_message: error.message}) );
   }
};

function* UserFetchRequest(){
    yield takeLatest(FETCH_REQUEST, FetchUsersList);
}

// For testing
// const iterator = FetchUsersList();

// expects a call instruction
// assert.deepEqual(
//     iterator.next().value,
//     call(Fetch, 'users', 'GET'),
//     "FetchUsersList should yield an Effect call(Fetch, 'users', 'GET')"
// );

export {FetchUsersList};
export default UserFetchRequest;