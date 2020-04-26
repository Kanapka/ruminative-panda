import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Typography, CardContent, CardActions } from '@material-ui/core';

const ConnectionStatus = ({ onConnect, onDisconnect, connectionStatus }) => {
    const textStatus = (connected) => {
        return connected
            ? "Connected"
            : "Offline"
    }

    const buttonText = (connected) => {
        return connected
            ? "Disconnect"
            : "Connect"
    }

    const onClick = (e) => {
        connectionStatus
            ? onDisconnect()
            : onConnect()
    }

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" color="textPrimary">Connection</Typography>
                <Typography variant="subtitle1" color="secondary">{textStatus(connectionStatus)}</Typography>
            </CardContent>
            <CardActions>
                <Button
                    color="primary"
                    onClick={onClick}>
                    {buttonText(connectionStatus)}
                </Button>
            </CardActions>
        </Card>
    )
}

ConnectionStatus.propTypes = {
    onConnect: PropTypes.func.isRequired,
    onDisconnect: PropTypes.func.isRequired,
    connectionStatus: PropTypes.bool.isRequired
}

export {
    ConnectionStatus
}