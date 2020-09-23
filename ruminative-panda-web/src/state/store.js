import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import {
    applicationControl,
    activeCommandKeysReducer,
    commandConfigurationReducer,
    robotStatus
} from './reducers';
import thunkMiddleware from 'redux-thunk';


const reducer = combineReducers({
    applicationControl,
    commandArray: activeCommandKeysReducer,
    commandConfiguration: commandConfigurationReducer,
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