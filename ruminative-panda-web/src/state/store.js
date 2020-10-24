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
    connected: applicationControl,
    robotStatus,
    commandArray: activeCommandKeysReducer,
    commandConfiguration: commandConfigurationReducer,
});

const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware
    ));

export {
    store
}