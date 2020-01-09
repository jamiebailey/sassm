import { connect } from 'react-redux';
import { exit, setVisiblePage } from '../actions';
import Button from '../components/elements/Button';


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            switch(ownProps.type) {
                case 'navigate':
                    dispatch(setVisiblePage(ownProps.page))
                    break;
                case 'exit':
                    dispatch(exit());
                    break;
            }
        }
    }
}

const AppLeftMenuButton = connect(
    null,
    mapDispatchToProps
)(Button)

export default AppLeftMenuButton;