import React from 'react';
import { env } from '../environments/env-test'
import { Paper, Card, CardContent, Typography } from '@material-ui/core'
import { LogEntry } from './LogEntry';

const log = [
    {
        timestamp: "14:34",
        text: "alamakota"
    },
    {
        timestamp: "15:45",
        text: "afgadfga afdgad adfga dfga dfgadfgadfghfgh adfh"
    }
];

function Status() {
    const logItems = log.map((item) =>
        <LogEntry timestamp={item.timestamp} text={item.text} />
    );

    return (
        <Card elevation={1}>
            <CardContent>
                <Typography variant="h6" color="textPrimary" gutterBottom>Log</Typography>
                {logItems}

            </CardContent>
        </Card>
    );
}

export {
    Status
}