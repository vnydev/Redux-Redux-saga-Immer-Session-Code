import {take, takeEvery, select, takeLatest} from 'redux-saga/effects';

function* watchAndLog() {
    // yield takeEvery('*', function* logger(action) {
    //   const state = yield select()
  
    //   console.log('action', action)
    //   console.log('state after', state)
    // })
    // const action = yield take('*');
    // const state = yield select()
  
    // console.log('action', action)
    // console.log('state after', state)
    // yield put();
    // const action2 = yield takeLatest("exploring_saga", (state) => state);
    // console.log('action2', action2)
  }

  export default watchAndLog;