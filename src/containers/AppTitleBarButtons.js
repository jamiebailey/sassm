import { connect } from 'react-redux';
import { exit } from '../actions';
import AppTitleBarButtons from '../components/AppTitleBarButtons';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        close: () => {
            dispatch(exit())
        }
    }
}

const AppTitleBarButtonsContainer = connect(
    null,
    mapDispatchToProps
)(AppTitleBarButtons);

export default AppTitleBarButtonsContainer;