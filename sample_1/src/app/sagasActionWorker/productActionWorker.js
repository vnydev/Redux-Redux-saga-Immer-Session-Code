import { call, put, takeLatest, select, take, takeEvery } from 'redux-saga/effects';

import { Fetch } from  '../../services/http';
import { SET_PRODUCT, SET_ERROR, PRO_FETCH_REQUEST, CREATE_PRODUCT, getProductState } from '../reducers/productSlice'; 

// Http Request
const GetProductsList = ()=> {
    let url = "product";
    return Fetch(url, "GET");
};

// Http Request
const CreateProduct = (data)=> {
    let url = "product";
    return Fetch(url, "POST", data);
};

// Generator function
function* FetchProducts(action){
    try{
        const {productList} = yield select(getProductState);
        // pass true in action.payload to force the function get new product list
        if(productList.length === 0 || action.payload){
            const {data, status} =  yield call(GetProductsList);
            yield put(SET_PRODUCT({productList: data}));
        }

    }catch(error){
        yield put(SET_ERROR({error_message: error.message}));
    }
}

function* create_product(action){

    try{
        yield put(SET_PRODUCT({isLoading: true}));
        
        const {data, status} =  yield call(CreateProduct, action.payload);
        if(status === 200){
            yield put(SET_PRODUCT({succes_message: data.message, isLoading:false}));
            yield call(FetchProducts);
        }
        
    }catch(error){
        yield put(SET_ERROR({error_message: error.message,  isLoading:false}));
    }

}

function* ProductSagasWorker(){
    yield takeEvery(PRO_FETCH_REQUEST, FetchProducts);
    yield takeLatest(CREATE_PRODUCT, create_product);
}

// function* excuter(){
//     yield take(FetchProducts);
// }
// console.log(excuter().next());

export default ProductSagasWorker;