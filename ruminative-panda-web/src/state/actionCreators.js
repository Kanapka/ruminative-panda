import { actions } from './actionTypes'
import robotAPI from '../services/robotAPI';

function setConnected(isConnected) {
    return {
        type: actions.CONNECTED,
        isConnected
    }
}

function setSpeed(value) {
    return { type: actions.SET_SPEED, value }
}

function setCurve(value) {
    return { type: actions.SET_CURVE, value }
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
        if (commandArray.rotateLeft) {
            robotAPI.moveRobot(null, speed, -1);
            return;
        }
        if (commandArray.rotateRight) {
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
                dispatch(setConnected(true))
            })
            .catch(err => {
                dispatch(setConnected(false))
            });
    };
}

const actionCreators = {
    setSpeed,
    setCurve,
    sendMovementCommand,
    fetchStatus,
    commandKeyPressed,
}
export {
    actionCreators
}