import { actions } from "./actionTypes"

const initialState = {
    connected: false,
    robot: {
        motors: {
            forward: true,
            backward: false,
            left: false,
            right: false,
        },
        headlights: {
            enabled: true,
        }
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

function robotStatus(state = initialState.robot, action) {
    switch (action.type) {
        case actions.STATUS_RECEIVED:
            return action.status;
        default:
            return state;
    }
}

export {
    applicationControl,
    robotStatus
}