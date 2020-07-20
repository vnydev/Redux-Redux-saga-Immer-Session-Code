import { all } from 'redux-saga/effects';
import UserSagas from './userActionWroker';
import ProductSagas from './productActionWorker';
import AuthSagas from './authActionWorker';
import SampleSagas from './sagas_sample';
import CounterSagas from './counterActionWorker';
import ShoppingCartSagas from './shoppingCartActionWorker';
import DemoFork from './fork_saga';

function* rootSagas(){
  yield all([
    // UserSagas(),
    // ProductSagas(),
    AuthSagas(),
    SampleSagas(),
    CounterSagas(),
    ShoppingCartSagas(),
    DemoFork()
  ]);
}

export default rootSagas;