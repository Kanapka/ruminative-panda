import { connect } from "react-redux";
import { ControlSettings } from "../components/ControlSettings";
import { actionCreators as actions } from "../state/actionCreators";


const mapDispatchToProps = {
    setSpeed: actions.setSpeed,
    setCurve: actions.setCurve,
};


const mapStateToProps = (state) => {
    return {
        speed: state.commandConfiguration.speed,
        curve: state.commandConfiguration.curve,
        disabled: false
            || state.commandArray.forward
            || state.commandArray.backward
            || state.commandArray.left
            || state.commandArray.right
    }
}

const ControlSettingsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ControlSettings)

export {
    ControlSettingsContainer
}