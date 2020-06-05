import test from 'tape';
import { put, call } from 'redux-saga/effects';
import { INCREMENT_ASYNC } from '../../features/counter/counterSlice';

import { increamentAsync, delay, } from './counterActionWorker';

test("Test increamentAsync action", (assert) => {
    let inc = increamentAsync();
    
    assert.deepEqual(
        inc.next().value,
        call(delay, 2000),
        "increamentAsync sags cal must delay for 2000ms"
    );

    assert.deepEqual(
        inc.next().value,
        put(INCREMENT_ASYNC),
        "increamentAsync saga must dispatch INCREMENT_ASYNC action"
    );

    assert.deepEqual(
        inc.next(),
        { done: true, value: undefined },
        'incrementAsync Saga must be done'
    );

    assert.end();
});
