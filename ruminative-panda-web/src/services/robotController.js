import { store } from '../state/store';
import {
    forward,
    backward,
    left,
    right,
    stop,
    fetchStatus

} from '../state/actionCreators';
import fetch from 'cross-fetch';
import { env } from '../environments/env-test'

const Directions = {
    FORWARD: "Forward",
    BACKWARD: "Backward",
    LEFT: "Left",
    RIGHT: "Right",
    STOP: "Stop",
}

function moveRobot(direction) {
    if (direction == Directions.STOP) {
        fetch(
            `${env.apiUrl}/movement`,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({ direction: Directions.STOP, speed: 0 })
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
                body: JSON.stringify({ direction: direction, speed: 1 })
            });
    }
}

function createController() {
    let updateId = setInterval(
        () => store.dispatch(fetchStatus()),
        5000);
    document.body.onkeydown = (e) => {
        if (e.repeat) {
            return;
        }
        switch (e.keyCode) {
            case 87: // w                
                moveRobot(Directions.FORWARD);
                break;
            case 83: // s
                moveRobot(Directions.BACKWARD);
                break;
            case 65: // a
                moveRobot(Directions.LEFT);
                break;
            case 68: // d
                moveRobot(Directions.RIGHT);
                break;
            case 32: // space
                moveRobot(Directions.STOP);
                break;
        }
    }
    document.body.onkeyup = (e) => {
        switch (e.keyCode) {
            case 87: // w    
            case 83: // s  
            case 65: // a
            case 68: // d
                moveRobot(Directions.STOP);
        }
    }
}

export {
    createController
};