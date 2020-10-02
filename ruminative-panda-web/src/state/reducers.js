import { actions, commandKeys } from "./actionTypes"

const initialState = {
    connected: false,
    robotStatus: {
        motors: {
            forward: true,
            backward: false,
            left: false,
            right: false,
        },
        headlights: {
            enabled: true,
        },
        modules: []
    },
    commandArray: {
        forward: false,
        backward: false,
        left: false,
        right: false,
        stop: false,
        headlight: false,
    },
    commandConfiguration: {
        speed: 1,
        curve: 0.5,
    }
}

function applicationControl(state = false, action) {
    switch (action.type) {
        case actions.CONNECT:
            return true;
        case actions.DISCONNECT:
            return false;
        default:
            return state;
    }
}

function robotStatus(state = initialState.robotStatus, action) {
    switch (action.type) {
        case actions.STATUS_RECEIVED:
            if (action.status) {
                return action.status;
            }
            else {
                return state;
            }
        default:
            return state;
    }
}

function activeCommandKeysReducer(state = initialState.commandArray, action) {
    switch (action.type) {
        case actions.COMMAND_KEY_PRESSED:
            const target = action.isUp;
            const newCommands = { ...state }
            switch (action.key) {
                case commandKeys.FORWARD:
                    newCommands.forward = target;
                    return newCommands;
                case commandKeys.BACKWARD:
                    newCommands.backward = target;
                    return newCommands;
                case commandKeys.LEFT:
                    newCommands.left = target;
                    return newCommands;
                case commandKeys.RIGHT:
                    newCommands.right = target;
                    return newCommands;
                case commandKeys.STOP:
                    newCommands.stop = target;
                    return newCommands;
                case commandKeys.HEADLIGHT:
                    newCommands.headlight = target;
                    return newCommands;
                default:
                    //no change on unrecognised key
                    return state;
            }
        default:
            return state;
    }
}

function commandConfigurationReducer(state = initialState.commandConfiguration, action) {
    debugger;
    switch (action.type) {
        case actions.SET_CURVE:
            return {
                ...state,
                curve: action.value,
            };
        case actions.SET_SPEED:
            return {
                ...state,
                speed: action.value,
            }
        default:
            return state;
    }
}

export {
    applicationControl,
    activeCommandKeysReducer,
    commandConfigurationReducer,
    robotStatus
}