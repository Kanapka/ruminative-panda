import { actions } from "./actionTypes"

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
        }
    },
    robotOrders: {
        forward: false,
        backward: false,
        left: false,
        right: false,
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

// function robotControl(state = initialState.robotOrders, action) {
//     switch (action.type) {
//         case actions.GO_FORWARD:
//             break;
//         case actions.GO_BACKWARD: 
//             break;
//         case actions.GO_LEFT: 
//             break;
//         case actions.GO_RIGHT: 
//             break;
//         case actions.STOP: 
//             break;
//     }
// }

export {
    applicationControl,
    robotStatus
}