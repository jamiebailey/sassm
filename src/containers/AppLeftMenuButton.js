import { connect } from 'react-redux';
import { setVisiblePage } from '../actions';
import Button from '../components/elements/Button';


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisiblePage(ownProps.page))
        }
    }
}

const AppLeftMenuButton = connect(
    null,
    mapDispatchToProps
)(Button)

export default AppLeftMenuButton;