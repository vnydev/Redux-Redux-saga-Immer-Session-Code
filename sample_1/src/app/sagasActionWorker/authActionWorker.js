import { put, call, take, fork, cancel } from 'redux-saga/effects';
import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCESS, LOGOUT_REQUEST, RESET_AUTH } from '../reducers/authSlice';

function loginRequest({username, password, isLogin}){
    try{
        if(!isLogin){
            throw new Error("Login faild");
        }
        return {
            isAuthenticate: true,
            token:"bjkfnbksnaklfnjkdas",
            message: "User successfully login"
        };
    }catch(error){
        throw new Error(error);
    }
}

function logoutRequest(){
    return false;
}

function clearSession(){
    // clear session from browser cookie or from backend storage (redis, inmemory)
    return {};
}
function storeToken(){
    // store token in browser cookie or manage on backend
    return {};
}

function* authorize( username, password ){
    try{

        const { token, isAuthenticate, message } =  yield call(loginRequest, {username, password, isLogin: false});
        yield put(LOGIN_SUCESS({token, isAuthenticate, message}));
        yield call(storeToken);
        return token;

    }catch(error){
        yield put(LOGIN_ERROR({error_message: error }));
    }
};

function* authFlow(){
    while (true){
        const { username, password } = yield take(LOGIN_REQUEST);
        const token = yield call(authorize, username, password);

        if (token) {
            yield call(storeToken);
            yield take(LOGOUT_REQUEST);
            yield call(clearSession);
            yield put(RESET_AUTH({}));
        }
    }
}

function* authFlow2(){
    while (true){
        const { username, password } = yield take(LOGIN_REQUEST);
        // fork run function in background
        yield fork(authorize, username, password);
        // Now there is no depencey on token
        // if authorize is faild LOGOUT_REQUEST exceute and wait new LOGIN_REQUEST request
        // but there is one more problem in worst case what if user logout before login is complete
        yield take([LOGOUT_REQUEST, LOGIN_ERROR]); //Now we are watching two concurrent action
        yield call(clearSession);
        yield put(RESET_AUTH({}));
    }
}

/*
But we're not yet done. If we take a LOGOUT in the middle of an API call, 
we have to cancel the authorize process, otherwise we'll have 2 concurrent 
tasks evolving in parallel: The authorize task will continue running and 
upon a successful (resp. failed) result, will dispatch a LOGIN_SUCCESS 
(resp. a LOGIN_ERROR) action leading to an inconsistent state.
*/

function* authFlow3(){
    while (true){
        const { username, password } = yield take(LOGIN_REQUEST);
        const task = yield fork(authorize, username, password);

        const action = yield take([LOGOUT_REQUEST, LOGIN_ERROR]);
        if(action.type == "LOGIN_ERROR"){
            yield cancel(task);
            console.log("task", task)
        }
        yield call(clearSession);
        yield put(RESET_AUTH({}));
        
    }
}

export default authFlow3;