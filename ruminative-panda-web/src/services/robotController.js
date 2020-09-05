import { store } from '../state/store';
import {
    fetchStatus
} from '../state/actionCreators';
import robotAPI from './robotAPI';

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
                robotAPI.moveRobot(robotAPI.Directions.FORWARD);
                break;
            case 83: // s
                robotAPI.moveRobot(robotAPI.Directions.BACKWARD);
                break;
            case 65: // a
                robotAPI.moveRobot(robotAPI.Directions.LEFT);
                break;
            case 68: // d
                robotAPI.moveRobot(robotAPI.Directions.RIGHT);
                break;
            case 32: // space
                robotAPI.moveRobot(robotAPI.Directions.STOP);
                break;
            case 72: // h
                robotAPI.switchHeadlights(true);
                break;
            default:
                // no action on unrecognised key
                break
        }
    }
    document.body.onkeyup = (e) => {
        switch (e.keyCode) {
            case 87: // w    
            case 83: // s  
            case 65: // a
            case 68: // d
                robotAPI.moveRobot(robotAPI.Directions.STOP);
        }
    }
}

export {
    createController
};