import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => {
    return {
        visiblePage: state.visiblePage,
        maximized: state.maximized,
        minimized: state.minimized,
        closed: state.closed
    }
}

const Container = connect(mapStateToProps)(App);

export default Container;