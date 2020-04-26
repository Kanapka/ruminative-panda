const actions = {
    CONNECT: 'Connect',
    DISCONNECT: 'Disconnect'
}

const actionCreators = {
    connect() {
        return { type: actions.CONNECT };
    },

    disconnect() {
        return { type: actions.DISCONNECT };
    }
}

export {
    actions,
    actionCreators
}