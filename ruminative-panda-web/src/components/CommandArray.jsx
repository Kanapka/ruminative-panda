import React from 'react';
import { Button, Card, CardContent, Typography, ButtonGroup } from '@material-ui/core'

function CommandArray({
    forward,
    backward,
    left,
    right,
    rotateRight,
    rotateLeft,
    headlight,
}) {

    const toVariant = (value) => {
        return value
            ? 'contained'
            : 'outlined'
    };

    const button = (value, text) => {
        return (
            <Button variant={toVariant(value)} color="primary">{text}</Button>

        )
    }

    return (
        <>
            <Card elevation={1}>
                <CardContent>
                    <ButtonGroup
                        orientation="vertical">
                        {button(forward, 'Forward')}
                        {button(backward, 'Backward')}
                        {button(left, 'Left')}
                        {button(right, 'Right')}
                        {button(rotateRight, 'Rotate R')}
                        {button(rotateLeft, 'Rotate L')}
                        {button(headlight, 'Headlight')}
                    </ButtonGroup>

                </CardContent>
            </Card>
        </>
    )
}

export {
    CommandArray
}