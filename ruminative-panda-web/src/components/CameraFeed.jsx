import React from 'react';
import { env } from '../environments/env-test'
import { Card, CardContent, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    camera: {
        height: 480,
        width: 640
    }
}))

function image() {
    return `${env.apiUrl}/camera.mjpeg`
}

function CameraFeed() {
    const classes = useStyles();

    return (
        <Card elevation={1}>
            <CardContent>
                <div className={classes.camera} >
                    <img
                        src={image()}
                        alt="camera feed offline" />

                </div>
            </CardContent>
        </Card>
    );
}

export {
    CameraFeed
}