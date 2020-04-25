import React from 'react';
import { env } from '../environments/env-test'
import { Card, Button, Typography, CardContent, CardActions } from '@material-ui/core'

class ConnectionStatus extends React.Component {
    render() {
        return <Card>
            <CardContent>
                <Typography variant="h6" color="textPrimary">Connection</Typography>
                <Typography variant="subtitle1" color="secondary">Offline</Typography>
            </CardContent>
            <CardActions>
                <Button color="primary">Connect</Button>
            </CardActions>
        </Card>
    }
}

export {
    ConnectionStatus
}