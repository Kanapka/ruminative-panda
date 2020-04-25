import React from 'react';
import { env } from '../environments/env-test'
import { Card, CardContent, Typography } from '@material-ui/core'

function Modules() {
    return (
        <Card elevation={1}>
            <CardContent>
                <Typography variant="h6" color="textPrimary">Modules</Typography>
            </CardContent>
        </Card>
    );
}

export {
    Modules
}