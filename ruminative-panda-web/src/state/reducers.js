import { actions } from "./actionTypes"

const initialState = {
    connected: false
}

function pandaApp(state = initialState, action) {
    switch (action.type) {
        case actions.CONNECT:
            return {
                ...state,
                connected: true
            };
        case actions.DISCONNECT:
            return {
                ...state,
                connected: false
            }
        default:
            return state;
    }
}

export {
    pandaApp
}