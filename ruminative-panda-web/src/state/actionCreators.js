import { actions } from './actionTypes'
import { env } from '../environments/env-test'
import fetch from 'cross-fetch'

function connect() {
    return { type: actions.START_CONNECTION };
}

function disconnect() {
    return { type: actions.DISCONNECT };
}

function forward() {
    return { type: actions.GO_FORWARD };
}

function backward() {
    return { type: actions.GO_BACKWARD };
}

function left() {
    return { type: actions.GO_LEFT };
}

function right() {
    return { type: actions.GO_RIGHT };
}

function getStatus() {
    return { type: actions.GET_STATUS };
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

        return fetch(`${env.apiUrl}/state`)
            .then(
                response => {
                    return response.json()
                },
                error => console.log("eerror")
            )
            .then(json => {
                dispatch(receiveStatus(json))
            });
    };
}
export {
    connect as startConnection,
    disconnect,
    forward,
    backward,
    left,
    right,
    getStatus,
    receiveStatus,
    fetchStatus
}