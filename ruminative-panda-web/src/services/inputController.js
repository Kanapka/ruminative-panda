
import {
    actionCreators as actions
} from '../state/actionCreators';
import { availableCommandKeys } from '../state/actionTypes';

function createController(store) {
    let updateId = setInterval(
        () => store.dispatch(actions.fetchStatus()),
        100000);
    document.body.onkeydown = (e) => {
        if (e.repeat) {
            return;
        }
        console.log(`Pressed ${e.key} (${e.keyCode})`)
        if (availableCommandKeys.some(k => k == e.keyCode)) {
            store.dispatch(actions.sendMovementCommand(e.keyCode, true));
        }
    }
    document.body.onkeyup = (e) => {
        if (availableCommandKeys.some(k => k == e.keyCode)) {
            store.dispatch(actions.sendMovementCommand(e.keyCode, false))
        }
    }
}

export {
    createController
};