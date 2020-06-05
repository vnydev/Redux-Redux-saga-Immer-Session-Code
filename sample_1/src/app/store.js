import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';

import counterReducer from '../features/counter/counterSlice';
import createSagaMiddleware from 'redux-saga';
import rootSagas from './sagasActionWorker';
import reducers from './reducers';
const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    counter: counterReducer,
    form: formReducer,
    ...reducers
  },
  middleware: [...getDefaultMiddleware(), sagaMiddleware]
});

sagaMiddleware.run(rootSagas);