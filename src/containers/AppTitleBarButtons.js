import { connect } from 'react-redux';
import { exit, maximize, minimize } from '../actions';
import AppTitleBarButtons from '../components/AppTitleBarButtons';

const mapStateToProps = (state) => {
    return {
        maximized: state.maximized
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        close: () => {
            dispatch(exit())
        },
        maximize: (max) => {
            dispatch(maximize(max))
        },
        minimize: () => {
            dispatch(minimize(true))
        }
    }
}

const AppTitleBarButtonsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppTitleBarButtons);

export default AppTitleBarButtonsContainer;