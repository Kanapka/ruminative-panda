import React from 'react';
import { env } from '../environments/env-test'
import { Typography } from '@material-ui/core'

function LogEntry(props) {
    return (
        <Typography variant="body2" color="textSecondary">{props.timestamp}: {props.text}</Typography>
    );
}

export {
    LogEntry
}