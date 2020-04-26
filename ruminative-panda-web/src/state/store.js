import { createStore } from 'redux';
import { pandaApp } from './reducers';

const store = createStore(pandaApp);

export {
    store
}