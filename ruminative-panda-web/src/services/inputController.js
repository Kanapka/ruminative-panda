import { store } from '../state/store';
import {
    fetchStatus, sendMovementCommand
} from '../state/actionCreators';
import { availableCommandKeys } from '../state/actionTypes';

function createController() {
    let updateId = setInterval(
        () => store.dispatch(fetchStatus()),
        1000);
    document.body.onkeydown = (e) => {
        if (e.repeat) {
            return;
        }
        if (availableCommandKeys.some(k => k == e.keyCode)) {
            store.dispatch(sendMovementCommand(e.keyCode, true));
        }
    }
    document.body.onkeyup = (e) => {
        if (availableCommandKeys.some(k => k == e.keyCode)) {
            store.dispatch(sendMovementCommand(e.keyCode, false))
        }
    }
}

export {
    createController
};