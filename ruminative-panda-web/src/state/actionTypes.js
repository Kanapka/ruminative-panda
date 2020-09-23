const actions = {
    START_CONNECTION: 'StartConnection',
    CONNECTION_FAILED: 'ConnectionFailed',
    CONNECTED: 'Connected',
    DISCONNECT: 'Disconnect',
    DISCONNECTED: 'Disconnected',

    COMMAND_KEY_PRESSED: 'CommandKeyPressed',
    SET_ROBOT_ORDER: 'SetRobotOrders',
    SET_SPEED: 'SetSpeed',
    SET_CURVE: 'SetCurve',

    GET_STATUS: 'GetStatus',
    STATUS_RECEIVED: 'StatusReceived',
    GET_STATUS_FAILED: 'GetStatusFailed'
}

const commandKeys = {
    FORWARD: 87, //w
    BACKWARD: 83, //s
    LEFT: 65, //a
    RIGHT: 68, //d
    STOP: 32, //space
    HEADLIGHT: 72 //h
}

function calculateAvailableKeys() {
    const available = [];
    for (const key in commandKeys) {
        if (commandKeys.hasOwnProperty(key)) {
            available.push(commandKeys[key]);
        }
    }
    return available;
}
const availableCommandKeys = calculateAvailableKeys();

export {
    actions,
    commandKeys,
    availableCommandKeys
}