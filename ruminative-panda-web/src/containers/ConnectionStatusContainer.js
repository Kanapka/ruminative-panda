import { startConnection, disconnect } from '../state/actionCreators';
import { connect } from 'react-redux';
import { ConnectionStatus } from '../components/ConnectionStatus';

const mapStateToProps = state => {
    return {
        connectionStatus: state.connected
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onConnect: () => dispatch(startConnection()),
        onDisconnect: () => dispatch(disconnect())
    }
}

const ConnectionStatusContainer = connect(mapStateToProps, mapDispatchToProps)(ConnectionStatus);

export {
    ConnectionStatusContainer
}