import React from 'react';
import PropTypes from 'prop-types';
import { Card, Typography, CardContent, CardActions } from '@material-ui/core';
import { Label } from '@material-ui/icons';

const ConnectionStatus = ({ connectionStatus }) => {
    const textStatus = (connected) => {
        return connected
            ? "Connected"
            : "Offline"
    }

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" color="textPrimary">Connection</Typography>
                <Typography variant="subtitle1" color="secondary">{textStatus(connectionStatus)}</Typography>
            </CardContent>
        </Card>
    )
}

ConnectionStatus.propTypes = {
    connectionStatus: PropTypes.bool.isRequired
}

export {
    ConnectionStatus
};