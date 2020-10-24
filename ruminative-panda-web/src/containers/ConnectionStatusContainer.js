import { connect } from 'react-redux';
import { ConnectionStatus } from '../components/ConnectionStatus';

const mapStateToProps = state => {
    return {
        connectionStatus: state.connected
    }
}


const ConnectionStatusContainer = connect(mapStateToProps)(ConnectionStatus);

export {
    ConnectionStatusContainer
}