import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import {
    applicationControl,
    robotStatus
} from './reducers';
import thunkMiddleware from 'redux-thunk';


const reducer = combineReducers({
    applicationControl,
    robotStatus
});

const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware
    ));

export {
    store
}