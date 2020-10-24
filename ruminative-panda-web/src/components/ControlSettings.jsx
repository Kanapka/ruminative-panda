import React from 'react';
import { Card, CardContent, Typography, Slider } from '@material-ui/core'


function ControlSettings({ speed, setSpeed, curve, setCurve, disabled }) {
    // const logItems = log.map((item) =>
    //     <LogEntry timestamp={item.timestamp} text={item.text} />
    // );

    return (
        <Card elevation={1}>
            <CardContent>
                <Typography variant="h6" color="textPrimary" gutterBottom > Speed</Typography>
                <Typography variant="h6" color="textSecondary" gutterBottom>{speed}</Typography>
                <Slider
                    disabled={disabled}
                    max={1}
                    min={0}
                    step={0.05}
                    onChange={(e, v) => { setSpeed(v) }}
                    value={speed} />
                <Typography variant="h6" color="textPrimary" gutterBottom>Curve</Typography>
                <Typography variant="h6" color="textSecondary" gutterBottom>{curve}</Typography>
                <Slider
                    disabled={disabled}
                    max={1}
                    min={0}
                    step={0.05}
                    onChange={(e, v) => { setCurve(v) }}
                    value={curve} />

            </CardContent>
        </Card>
    );
}

export {
    ControlSettings
}