import { connect } from "react-redux";
import { CommandArray } from '../components/CommandArray';

const mapStateToProps = (state) => ({
    forward: state.commandArray.forward,
    backward: state.commandArray.backward,
    left: state.commandArray.left,
    right: state.commandArray.right,
    headlight: state.commandArray.headlight
})

const CommandArrayContainer = connect(
    mapStateToProps
)(CommandArray);

export {
    CommandArrayContainer
}