import { actionCreators } from '../state/actionTypes';
import { connect } from 'react-redux';
import { ConnectionStatus } from '../components/ConnectionStatus';

const mapStateToProps = state => {
    return {
        connectionStatus: state.connected
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onConnect: () => dispatch(actionCreators.connect()),
        onDisconnect: () => dispatch(actionCreators.disconnect())
    }
}

const ConnectionStatusContainer = connect(mapStateToProps, mapDispatchToProps)(ConnectionStatus);

export {
    ConnectionStatusContainer
}