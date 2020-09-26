import { actions } from './actionTypes'
import robotAPI from '../services/robotAPI';

function connect() {
    return { type: actions.START_CONNECTION };
}

function disconnect() {
    return { type: actions.DISCONNECT };
}

function getStatus() {
    return { type: actions.GET_STATUS };
}

function commandKeyPressed(key, isUp) {
    return { type: actions.COMMAND_KEY_PRESSED, key, isUp };
}

function sendMovementCommand(key, isUp) {
    return (dispatch, getState) => {
        dispatch(commandKeyPressed(key, isUp));
        const state = getState();
        const commandArray = state.commandArray;
        const speed = state.commandConfiguration.speed;
        if (commandArray.stop || (!commandArray.forward && !commandArray.backward)) {
            robotAPI.moveRobot(robotAPI.Directions.STOP, 0, 0);
            console.log("stopping");
            return;
        }

        //rotations
        if (commandArray.rotateLeft && !commandArray.forward && !commandArray.backward) {
            robotAPI.moveRobot(null, speed, -1);
            return;
        }
        if (commandArray.rotateRight && !commandArray.forward && !commandArray.backward) {
            robotAPI.moveRobot(null, speed, 1);
            return;
        }

        //just movement
        const direction = commandArray.forward
            ? robotAPI.Directions.FORWARD
            : robotAPI.Directions.BACKWARD;
        const curve = (commandArray.right - commandArray.left) * state.commandConfiguration.curve;
        console.log(commandArray);
        console.log(`Going ${direction} at speed ${speed} with curve ${curve}`)
        robotAPI.moveRobot(direction, speed, curve);
    }
}

function receiveStatus(status) {
    return {
        type: actions.STATUS_RECEIVED,
        status: status
    };
}

function fetchStatus() {
    return (dispatch) => {
        dispatch(getStatus());

        return robotAPI.getStatus()
            .then(json => {
                dispatch(receiveStatus(json))
            });
    };
}
export {
    connect as startConnection,
    disconnect,
    sendMovementCommand,
    receiveStatus,
    fetchStatus,
    commandKeyPressed,
}