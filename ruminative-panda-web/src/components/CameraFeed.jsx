import React from 'react';
import { env } from '../environments/env-test'
import { Card, CardContent, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    container: {
        'justify-content': 'center',
        'align-items': 'center'
    },
    camera: {
        display: 'flex',
        'min-height': 480,
        'min-width': 640
    },
    image: {
        margin: 'auto'
    }
}))

function image() {
    return `${env.apiUrl}/camera.mjpg`
    // return 'http://raspberrypi:8000/stream.mjpg';
}

function CameraFeed() {
    const classes = useStyles();

    return (
        <Card>
            <CardContent className={classes.container}>
                <div className={classes.camera} >
                    <img
                        className={classes.image}
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