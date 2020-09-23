import fetch from 'cross-fetch';
import { env } from '../environments/env-test'

const Directions = {
    FORWARD: "Forward",
    BACKWARD: "Backward",
    STOP: "Stop"
}

function moveRobot(direction, speed, curve) {
    if (direction == Directions.STOP) {
        fetch(
            `${env.apiUrl}/movement`,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({ direction: Directions.STOP, speed: 0, curve: 0 })
            });
    }
    else {
        fetch(
            `${env.apiUrl}/movement`,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({ direction, speed, curve })
            });
    }
}

function switchHeadlights(enabled) {
    fetch(
        `${env.apiUrl}/headlights`,
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ enabled: enabled })
        }
    );
}

function getStatus() {
    return fetch(`${env.apiUrl}/state`)
        .then(
            response => {
                return response.json()
            },
            error => console.log("error")
        )
}

export default
    {
        Directions,
        moveRobot,
        switchHeadlights,
        getStatus
    }