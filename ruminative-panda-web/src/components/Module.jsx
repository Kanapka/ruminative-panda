import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'

const Module = ({
    name,
    message,
    enabled,
    actions
}) => {
    const buttons = (actions || []).map(a => {
        <Button
            color="primary"
            onClick={a.invoke}>
            {a.name}
        </Button>
    });
    return (
        <Card>
            <CardHeader>
                <Typography variant="h3" color="textPrimary">
                    {name}
                </Typography>
            </CardHeader>
            <CardContent>
                <Typography color="textPrimary">
                    {message}
                </Typography>
            </CardContent>
            <CardActions>
                {buttons}
            </CardActions>
        </Card>
    )
}

Module.propTypes = {
    name: PropTypes.string.isRequired,
    message: PropTypes.string,
    enabled: PropTypes.bool.isRequired,
    actions: PropTypes.array
}

export {
    Module
}